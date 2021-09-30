<template>
  <div class="nav">
    <!-- <nuxt-link :to="`/${activeLanguage}/`" class="brand">
      Teluk Biru Karya
    </nuxt-link>
    <nav>
      <nuxt-link :to="`/${activeLanguage}/`"> Home </nuxt-link> |
      <nuxt-link :to="`/${activeLanguage}/about`"> About </nuxt-link> |
      <nuxt-link :to="`/${activeLanguage}/brands`"> Brands </nuxt-link> |
      <nuxt-link :to="`/${activeLanguage}/contact`"> Contact </nuxt-link> |
    </nav> -->
    <!-- <v-card class="mx-auto overflow-hidden" height="400"> -->
    <v-app-bar color="secondary">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Teluk Biru Karya</v-toolbar-title>
      <v-spacer></v-spacer>

      <nav>
        <v-btn
          v-for="(item, index) in items"
          :key="`${index}-navbar`"
          class="ma-1"
          color="primary"
          outlined
        >
          <nuxt-link :to="item.to">
            {{ item.title }}
          </nuxt-link>
        </v-btn>
        <v-btn @click="printState" class="ma-1" color="primary" outlined
          >Print</v-btn
        >
      </nav>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <nuxt-link
            v-for="(item, index) in items"
            :key="`${index}-navdrawer`"
            :to="item.to"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>

  <!-- </v-card> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      group: null,
      items: [
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

      title: 'Home',
    }
  },
  fetch() {
    try {
      console.log('params: ', this.$route.params)
      this.$store.dispatch(
        'webText/fetchLanguageAndSet',
        this.$route.params.lang
      )
    } catch (e) {
      throw new Error('Unable to detect language.')
    }
  },
  computed: mapState({
    currentLanguageData: (state) => state.webText.currentLanguageData,
    activeLanguage: (state) => state.webText.activeLanguage,
  }),
  methods: {
    printState() {
      console.log(
        'state active lang: ',
        this.$store.state.webText.activeLanguage
      )
      console.log(
        'state active data: ',
        this.$store.state.webText.currentLanguageData
      )

      console.log('this component: ', this.activeLanguage)
    },
  },
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>
