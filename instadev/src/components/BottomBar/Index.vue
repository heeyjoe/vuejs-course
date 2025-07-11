<template>
  <div class="full-width row justify-around">
    <q-img src="../../assets/homeicon.svg"></q-img>
    <q-img src="../../assets/searchicon.svg"></q-img>
    <q-img src="../../assets/addphotoicon.svg"></q-img>
    <q-img src="../../assets/hearticon.svg"></q-img>
    <q-avatar size="35px">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
};
</script>

<style lang="scss" scoped>
.q-img {
  width: 70px;
  cursor: pointer;
}
</style>
