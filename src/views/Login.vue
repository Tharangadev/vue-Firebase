<template>
  <b-col cols="12" sm="5" class="mt-5">
    <b-card header-tag="header" footer-tag="footer">
      <h6 slot="header" class="mb-0">Login</h6>
      <b-card-text>
        <b-form @submit.prevent="login">
          <b-form-group>
            <b-form-input placeholder="Email" type="email" v-model="loginDetails.email"></b-form-input>
            <b-form-invalid-feedback id="input-live-feedback">Enter at least 3 letters</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-form-input placeholder="Password" type="password" v-model="loginDetails.password"></b-form-input>
            <b-form-invalid-feedback id="input-live-feedback">Enter at least 3 letters</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-button variant="primary" type="submit" :disabled="requestsend">Login</b-button>
          </b-form-group>
        </b-form>
      </b-card-text>
      <em slot="footer" class="footer-block d-flex justify-content-around">
        <router-link to="/register">make a account</router-link>
        <router-link to="/resetemail">forgot password</router-link>
      </em>
    </b-card>
  </b-col>
</template>
<script>
import firebase from "firebase";
export default {
  name: "login",
  methods: {
    login() {
      var self = this;
      if (this.loginDetails.email != "" && this.loginDetails.password != "") {
        ///reset error
        this.$store.dispatch("addError", "");
        this.requestsend = true;
        firebase
          .auth()
          .signInWithEmailAndPassword(
            this.loginDetails.email,
            this.loginDetails.password
          )
          .then(
            function(user) {
              console.log(user);
              self.requestsend = false;
              self.$store.dispatch("adduserdetails", {
                username: self.loginDetails.email
              });
              self.$router.push("/control");
            },
            function(err) {
              self.$store.dispatch("addError", err.message);
              self.requestsend = false;
            }
          );
      } else {
        ////vuex error
        this.$store.dispatch("addError", "Please fill the required feilds");
      }
    }
  },
  data() {
    return {
      loginDetails: {
        email: "",
        password: ""
      },
      requestsend: false
    };
  }
};
</script>
<style lang="css" scoped>
  .footer-block{
    font-size: 12px;
  }
</style>
