<template>
  <q-page class="flex flex-center column justify-center q-px-md">
    <q-icon name="fas fa-chevron-left"
            class="absolute-left q-ma-lg"
            size="23px"
            color="grey"/>
    <div class="full-width column items-center justify-center">
      <q-img class="logo q-mb-lg"
           src="../../assets/instadevlogo.svg"></q-img>
      <q-input filled v-model="email" label="E-mail" class="full-width q-mb-md"/>
      <q-input filled v-model="password" label="Password"
        type="password" class="full-width q-mb-md"/>
      <div class="full-width items-end column">
        <a class="link q-mt-md" href="#">Forgot password?</a>
      </div>
      <q-btn color="primary"
             label="Log In"
             class="sign-in-button full-width q-mt-lg"
             :disable="true"/>
      <div class="flex full-width items-center justify-center q-mt-xl">
        <q-img class="facebook-icon" src="../../assets/facebooklogo.svg"/>
        <a class="link q-ml-xs" href="#">Log in with Facebook</a>
      </div>
      <div class="full-width row items-center justify-center q-my-xl">
        <q-separator class="separator" inset/>
        OR
        <q-separator class="separator" inset/>
      </div>
      <div class="full-width row items-center justify-center text-black-opacity">
        Don't have an account? <a class="link q-ml-xs" href="#">Sign up</a>
      </div>
    </div>
    <div class="full-width column items-center justify-center absolute-bottom">
      <q-separator class="full-width"/>
      <div class="q-my-lg text-black-opacity"><span> Instagram of Facebook </span></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 49px;
  width: 182px;
}

.sign-in-button {
  height: 44px;
  border-radius: 5px;
  background-color: $instablue ;
}

.facebook-icon {
  height: 17px;
  width: 17px;
}

.separator {
  width: 35%;
}
</style>
