<template>
  
    <b-dropdown id="phoneCode" slot="prepend" :text="selectedCountry">
      <b-dropdown-item
        v-for="phone in PhoneNumbers"
        @click="countrySelect(phone.dial_code)"
        >{{phone.name}}</b-dropdown-item
      >
    </b-dropdown>
</template>
<script>
  import countryCode from '../PhoneCode';
  export default {
    name: 'Countrycode',
    data() {
      return {
        countrycode: 'IT',
        PhoneNumbers: countryCode,
        selectedCountry: '+1',
      };
    },
    methods: {
      countrySelect(code) {
	      this.$emit('setCcode',code)
        this.selectedCountry = code;
      },
    },
  };
</script>
<style type="css">
  #phoneCode .dropdown-menu {
    height: 200px;
    overflow-y: scroll;
  }
</style>
