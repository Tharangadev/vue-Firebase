<template>
  <b-col cols="12" sm="5" class="mt-5">
    <b-card>
      <b-list-group>
        <b-list-group-item>
          <router-link to="register">
            Register
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link to="login">
            Login
          </router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link to="text">
            text
          </router-link>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
