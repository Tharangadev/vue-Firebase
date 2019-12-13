<template>
<b-col cols="12" sm="5" class="mt-5">
  <b-card header-tag="header">
    <h6 slot="header" class="mb-0">Register</h6>
    <b-card-text>
      <b-form @submit.prevent="registerAccount">
        <b-form-group :invalid-feedback="errors.first('regUsername')" :state="!errors.has('regUsername')">
          <b-form-input placeholder="Username" type="text" v-model="register.username" v-validate="'min:3|required'" name="regUsername"></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">Enter at least 3 letters</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group :invalid-feedback="errors.first('regEmail')" :state="!errors.has('regEmail')">
          <b-form-input placeholder="Email" type="email" v-model="register.email" v-validate="'required|email'" name="regEmail"></b-form-input>
        </b-form-group>
        <b-form-group :invalid-feedback="errors.first('regPassword')" :state="!errors.has('regPassword')">
          <b-form-input placeholder="Password" type="password" v-model="register.password" v-validate="'required'" name="regPassword" ref="regPassword"></b-form-input>
        </b-form-group>
        <b-form-group :invalid-feedback="errors.first('regPasswordRepeat')" :state="!errors.has('regPasswordRepeat')">
          <b-form-input placeholder="Password Repeat" type="password" v-model="register.passwordrepeat" name="regPasswordRepeat" v-validate="'required|confirmed:regPassword'"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-button variant="primary" type="submit" :disabled="requestsend">Login</b-button>
        </b-form-group>
      </b-form>
    </b-card-text>
  </b-card>
</b-col>
</template>
<script>
import {
  Validator
} from "vee-validate"
import firebase from 'firebase'

const dict = {
  custom: {
    regUsername: {
      required: "Please fill the username feild",
      min: "username feild should be atleast 3 charachters"
    },
    regEmail: {
      required: "Please fillt he Email feild",
      email: "Please enter a valid Email"
    },
    regPassword: {
      required: "please enter a password",
      regex: "The password's first character must be a letter, it must contain at least 5 characters and no more than 8 characters and no characters other than letters, numbers and the underscore may be used"
    },
    regPasswordRepeat: {
      required: "Password feilds do not match ",
      confirmed: "Password feilds do not match "
    }
  }
}

Validator.localize("en", dict)
///firebase register loging
let db = firebase.database()
let ref=db.ref('users')

export default {
  name: "login",
  methods: {
    registerAccount() {
      let self = this
      firebase.auth().createUserWithEmailAndPassword(this.register.email, this.register.password)
        .then(
          (user) => {

            if (user) {

              let newdata = {
                uername: this.register.username,
                email: this.register.email,
                password: this.register.password
              }

              ref.push(newdata)
              self.$store.dispatch('sucessAlert','registration sucessfull')
              self.$store.dispatch('adduserdetails',{username:self.register.username,email:self.register.email})
              this.$router.push('/control')
            }
          })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          self.$store.dispatch("addError", errorMessage)
        })
    }
  },
  computed: {

  },
  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
        passwordrepeat: ""
      },
      requestsend: false,
      errorState: true
    };
  }
};
</script>
<style lang="css" scoped>
</style>
