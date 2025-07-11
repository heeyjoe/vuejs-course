<template>
  <div class="full-width row justify-between items-center">
    <q-img class="q-ml-sm camera" src="../../assets/cameraicon.svg"></q-img>
    <q-img class="logo" src="../../assets/instadevlogo.svg"></q-img>
    <div>
      <q-img class="q-mr-lg" src="../../assets/reelsicon.svg" width="28px"></q-img>
      <q-img class="q-mr-sm" src="../../assets/directicon.svg" width="28px"></q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style lang="scss" scoped>
.logo{
  width: 115px;
  height: 30px;
}

.camera{
  width: 29px;
  height: 26px;
}

.q-img {
  cursor: pointer;
}
</style>
