<template>
  <b-col cols="12" sm="5" class="mt-5">
    <b-card header-tag="header" footer-tag="footer">
      <h6 slot="header" class="mb-0">{{boxTitle}}</h6>
      <b-card-text>
        <div id="rec" v-if="recap"></div>
        <form @submit.prevent="text" v-if="visibleBoard">
          <b-input-group>
            <Countrycode slot="prepend" @setCcode="setCcode"></Countrycode>
            <b-form-input
              type="tel"
              placeholder="Enter the phone number"
              v-model="telephonenumber"
            ></b-form-input>
            <b-button type="submit" slot="append">submit</b-button>
          </b-input-group>
        </form>

        <form @submit.prevent="phoneValidate" v-if="validateForm">
          <b-input-group>
            <b-form-input type="text" v-model="verifyText"></b-form-input>

            <b-input-group-append>
              <b-button type="submit">Validate</b-button>
            </b-input-group-append>
          </b-input-group>
        </form>
      </b-card-text>
      <em slot="footer"></em>
    </b-card>
  </b-col>
</template>

<script>
  import firebase from 'firebase';
  firebase.auth().languageCode = 'si';

  let appVerifier = window.recaptchaVerifier;
  import Countrycode from '../components/country-code.vue';
  export default {
    name: 'phone',
    components: {Countrycode},
    methods: {
      setCcode(code) {
        this.countryCode = code;
      },
      phoneValidate() {
        let self = this;
        confirmationResult
          .confirm(this.verifyText)
          .then(function(result) {
            // User signed in successfully.
            var user = result.user;
            self.$router.push('/control');
            console.log(user);
            // ...
          })
          .catch(function(error) {
            // User couldn't sign in (bad verification code?)
            // ..
            slef.$store.displtch('adderror', error.message);
          });
       
      },
      text() {
        let self = this;
        firebase
          .auth()
          .signInWithPhoneNumber(
            this.countryCode + this.telephonenumber,
            window.recaptchaVerifier,
          )
          .then(function(confirmationResult) {
            window.confirmationResult = confirmationResult;
            self.validateForm = true;
            self.recap = false;
            self.visibleBoard = false;
            self.boxTitle = 'Enter the passcode sent to your phone';
          })
          .catch(function(error) {
            // Error; SMS not sent
            //
            self.$store.dispatch('addError', error.message);
            console.log(error);
            alert('message was not sent');
          });
      },
    },
    data() {
      return {
        boxTitle: 'Enter telephone number to sign in',
        recap: true,
        countryCode: '',
        telephonenumber: '',
        visibleBoard: false,
        validateForm: false,
        verifyText: '',
      };
    },
    mounted() {
      let self = this;
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('rec', {
        size: 'normal',
        callback: function(response) {
          self.visibleBoard = true;
        },
        'expired-callback': function() {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      });
      window.recaptchaVerifier.render().then(function(widgetId) {
        window.recaptchaWidgetId = widgetId;
      });
    },
  };
</script>
<style>
  #rec {
    display: flex;
    justify-content: center;
    margin-bottom: 22px;
  }
</style>
