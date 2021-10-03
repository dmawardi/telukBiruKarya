<template>
  <div class="nav">
    <v-app-bar color="white">
      <v-app-bar-nav-icon
        v-show="mobile"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <!-- <v-spacer v-show="mobile"></v-spacer> -->

      <v-img
        class="ml-auto mr-auto"
        min-height="50px"
        max-height="50"
        max-width="60"
        min-width="42px"
        src="/Teluk_Biru.PNG"
      ></v-img>
      <v-toolbar-title v-show="!mobile">Teluk Biru Karya</v-toolbar-title>

      <v-spacer v-show="!mobile"></v-spacer>
      <!-- Buttons appear if not on mobile -->
      <nuxt-link
        v-for="(item, index) in items"
        v-show="!mobile"
        :key="`${index}-navbar`"
        :to="item.to"
      >
        <v-tab>{{ item.title }}</v-tab>
        <!-- <v-btn class="ma-1" color="white" outlined> -->
        <!-- </v-btn> -->
      </nuxt-link>
      <v-btn
        v-show="!mobile"
        class="ma-1"
        color="primary"
        outlined
        @click="printState"
        >Print</v-btn
      >
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
    // console.log('context: ', context)
    console.log('params: ', this.$route.params)
    try {
      if (
        this.$route.params.lang === undefined ||
        this.$route.params.lang === 'undefined'
      ) {
        console.log('determined to be undefined')
        this.$store.dispatch('webText/fetchLanguageAndSet', 'en')
      } else {
        console.log('else')
        this.$store.dispatch(
          'webText/fetchLanguageAndSet',
          this.$route.params.lang
        )
      }
    } catch (e) {
      // redirect('/en')
      console.log('caught error')
      throw new Error('Unable to detect language.')
    }
  },
  computed: {
    ...mapState({
      currentLanguageData: (state) => state.webText.currentLanguageData,
      activeLanguage: (state) => state.webText.activeLanguage,
    }),
    mobile() {
      return this.$vuetify.breakpoint.xs
      // if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
      //   return true
      // } else {
      //   return false
      // }
    },
  },
  methods: {
    printState() {
      console.log(
        'state active lang: ',
        this.$store.state.webText.activeLanguage
      )
      console.log('state active lang data: ', this.currentLanguageData)

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

nav {
  background-color: #70d399;
  padding: 2px;
  border-radius: 5px;
}
</style>
