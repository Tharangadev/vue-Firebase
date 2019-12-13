<template lang="html">
  <b-col cols="12" sm="5" class="mt-5">
    <b-card header-tag="header" footer-tag="footer">
      <h6 slot="header" class="mb-0">{{userName}}</h6>
      <b-card-text>
      </b-card-text>
      <em slot="footer">
         <button type="button" name="button" @click="signOut">Sign out</button>
      </em>
    </b-card>
  </b-col>
</template>

<script>
import firebase from "firebase";
export default {
  name: "control",
  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.state.userdetails.username;
    }
  },
  mounted() {
    let slef = this;
    let user = firebase.auth().currentUser;
    if (!firebase.auth().currentUser) {
      this.$router.push("/login");
    } else {
      let userid = firebase.auth().currentUser.uid;
    }
  },
  methods: {
    signOut() {
      let self = this;
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            self.$router.push("/login");
          },
          function(error) {
            console.log(error);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
