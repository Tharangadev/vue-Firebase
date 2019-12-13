<template lang="html">
  <b-col cols="12" sm="5" class="mt-5">
    <b-card header-tag="header" footer-tag="footer">
      <h6 slot="header" class="mb-0">
        Reset the password
      </h6>
      <b-card-text>
        <form @submit.prevent="resetpassword">
        <b-form-group :invalid-feedback="errors.first('newPassword')" :state="!errors.has('newPassword')">
          <b-form-input placeholder="Enter new password" type="password" v-model="newPassword" v-validate="'min:3|required'" name="newPassword"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-button type="submit">
            reset password
          </b-button>
        </b-form-group>
      </form>
      </b-card-text>
      <em slot="footer">

      </em>
    </b-card>
  </b-col>
</template>

<script>
export default {
  methods: {
    resetpassword() {
    }
  },
  mounted() {
  },
  data() {
    return {
      newPassword: ""
    }
  }
}
</script>

<style lang="css">
</style>
