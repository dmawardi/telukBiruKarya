<template>
  <v-app id="app">
    <NavBar />
    <v-main>
      <v-container fluid class="white pb-0">
        <Nuxt />
      </v-container>
    </v-main>
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
    return {}
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
            'PT Teluk Biru Karya is a producer of premium unique brands. Based in Bali, Indonesia',
        },
      ],
    }
  },
}
</script>

<style></style>
