
<template>
  <b-col cols="12" sm="5" class="mt-5">
    <b-card header-tag="header" footer-tag="footer">
      <h6 slot="header" class="mb-0">Enter telephone auth code</h6>
      <b-card-text>
        <div id="rec"></div>
        <form @submit.prevent="authcode" v-if="visibleBoard">
          <b-input-group>
          
		  <b-button type="submit" slot="append">submit</b-button>
          </b-input-group>
        </form>
      </b-card-text>
      <em slot="footer"></em>
    </b-card>
  </b-col>
</template>

<script>
export default {
name:"authophonecode"
}
</script>
<style>

</style>
