<template>
  <v-app id="app">
    <NavBar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      right: true,
      rightDrawer: false,
    }
  },
  head() {
    return {
      // title for this page
      titleTemplate: 'Teluk Biru Karya - %s',
      meta: [
        {
          // defines decription for this page
          hid: 'description',
          name: 'description',
          content:
            'Where you can find all the events taking place in your neighborhood',
        },
      ],
    }
  },
}
</script>

<style></style>
