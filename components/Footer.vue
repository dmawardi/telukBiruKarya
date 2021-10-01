<template>
  <v-footer color="secondary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="`${link.title}=footer`"
        text
        rounded
        class="secondary ma-2"
      >
        <nuxt-link :to="link.to">
          {{ link.title }}
        </nuxt-link>
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Teluk Biru Karya</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      links: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: `/${this.activeLanguage}/`,
        },
        {
          icon: 'mdi-account',
          title: 'Contact us',
          to: `/${this.activeLanguage}/contact`,
        },
        {
          icon: 'mdi-info',
          title: 'About',
          to: `/${this.activeLanguage}/about`,
        },
        {
          icon: 'mdi-account',
          title: 'Brands',
          to: `/${this.activeLanguage}/brands`,
        },
      ],
    }
  },

  computed: mapState({
    currentLanguageData: (state) => state.webText.currentLanguageData,
    activeLanguage: (state) => state.webText.activeLanguage,
  }),

  //   methods: {
  //     printState() {
  //       console.log(
  //         'store active lang:',
  //         this.$store.state.webText.activeLanguage
  //       )
  //       console.log('this component active lang:', this.activeLanguage)
  //     },
  //   },
}
</script>

<style></style>
