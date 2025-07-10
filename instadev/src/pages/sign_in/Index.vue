<template>
  <q-page class="flex flex-center column">
    <q-img src="../../assets/instadevlogo.svg" height="49px"></q-img>
    <q-input filled v-model="text" label="Filled"/>
    <q-input filled v-model="text" label="Filled"/>
    <a href="#">Forgot password?</a>
    <q-btn color="primary" label="Sign In"/>
    <div class="flex row">
    <q-img src="../../assets/facebooklogo.svg"/>
      <a href="#">Sign in with Facebook</a>
    </div>
    <div class="full-width">
      <q-separator />
      or
      <q-separator />
    </div>
    <div>
      Don't have an account? <a href="#">Sign up</a>
    </div>
    <q-separator/>
    Instagram of Facebook
  </q-page>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      text: '',
    };
  },
};
</script>
