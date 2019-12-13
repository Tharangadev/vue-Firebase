<template>
  <div>
    <b-alert
      :show="errorAlert.length > 0"
      variant="danger"
      fade
      class="rounded-0 text-center"
      @dismiss-count-down="3"
      >{{ errorAlert }}</b-alert
    >
    <b-alert
      :show="sucessAlert.length > 0"
      variant="success"
      fade
      class="rounded-0 text-center"
      @dismiss-count-down="3"
      >{{ sucessAlert }}</b-alert
    >
    <b-container>
      <b-row class="justify-content-md-center">
        <router-view></router-view>
      </b-row>
    </b-container>
  </div>
</template>
<script>
//firebase config
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
import firebase from 'firebase';

export default {
  name: 'app',
  components: {},
  computed: {
    errorAlert() {
      return this.$store.state.error;
    },
    sucessAlert() {
      return this.$store.state.sucessAlert;
    },
  },
  mounted() {
    firebase.initializeApp(firebaseConfig);
  },
};
</script>
<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700&display=swap');

* {
  font-family: 'Fira Sans', sans-serif;
}
</style>
