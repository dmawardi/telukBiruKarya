<template>
  <div class="nav">
    <v-app-bar color="white" fixed elevate-on-scroll>
      <!-- Burger icon (shown when mobile) -->
      <v-app-bar-nav-icon
        v-show="mobile"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <!-- Image -->
      <v-img
        class="ml-auto mr-auto"
        min-height="50px"
        max-height="50"
        max-width="60"
        min-width="42px"
        src="/Teluk_Biru_Web.PNG"
      ></v-img>
      <!-- Title text -->
      <v-app-bar-title
        v-show="!mobile"
        mobile-break-point="1264"
        class="primary--text"
      >
        Teluk Biru Karya
      </v-app-bar-title>

      <v-spacer v-show="!mobile"></v-spacer>
      <!-- Buttons appear if not on mobile -->
      <nuxt-link
        v-for="(item, index) in items"
        v-show="!mobile"
        :key="`${index}-navbar`"
        :to="`/${activeLanguage}/${item.to}`"
      >
        <v-btn
          v-show="!mobile"
          class="ma-1"
          :color="isFocusItem(index) ? 'primary' : 'secondary'"
          :rounded="isFocusItem(index)"
          :outlined="isFocusItem(index)"
          >{{ item.title }}</v-btn
        >
      </nuxt-link>
    </v-app-bar>

    <!-- Navigation drawer -->
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
      // links
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: ``,
        },

        {
          icon: 'mdi-alert-circle',
          title: 'About',
          to: `about`,
        },
        {
          icon: 'mdi-cards-variant',
          title: 'Brands',
          to: `brands`,
        },
        {
          icon: 'mdi-human-greeting-proximity',
          title: 'Contact us',
          to: `contact`,
        },
      ],

      title: 'Home',
    }
  },
  fetch() {
    try {
      if (
        this.$route.params.lang === undefined ||
        this.$route.params.lang === 'undefined'
      ) {
        this.$store.dispatch('webText/fetchLanguageAndSet', 'en')
      } else {
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
    },
  },
  methods: {
    isFocusItem(index) {
      if (index === 3) {
        return true
      } else {
        return false
      }
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
