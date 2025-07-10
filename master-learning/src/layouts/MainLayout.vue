<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="flex justify-between items-center q-pa-md">
      <q-icon name="keyboard_arrow_left" size="25px"></q-icon>
      <q-toolbar-title class="text-center"> Master Learning </q-toolbar-title>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="leftDrawerOpen = !leftDrawerOpen"
      />
      <div>Quasar v{{ $q.version }}</div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Master Learning First Project
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Início',
    caption: 'Início da aplicação',
    icon: 'home',
    link: 'https://quasar.dev'
  },
  {
    title: 'Cursos',
    caption: 'Ir para o site de cursos',
    icon: 'school',
    link: 'https://github.com/quasarframework'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="stylus" scoped>
.q-header {
  background-color: #f95179;
}

.q-q-page-container{
  padding-top: 65px !important;

}

</style>