<template>
  <v-app id="app">
    <NavBar />
    <v-main class="grey lighten-2">
      <v-container fluid class="white">
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
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer,
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
