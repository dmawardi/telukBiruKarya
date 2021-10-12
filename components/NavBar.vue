<template>
  <div class="nav">
    <v-app-bar min-height="70px" color="white" fixed elevate-on-scroll>
      <!-- Burger icon (shown when mobile) -->
      <v-app-bar-nav-icon
        v-show="mobile"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <!-- Image -->
      <nuxt-link
        :to="`/${this.$route.params.lang}`"
        class="ml-auto mr-auto pa-0"
      >
        <v-img
          min-height="40px"
          max-height="50"
          max-width="50"
          min-width="40px"
          src="/Teluk_Biru_Web.PNG"
        ></v-img>
      </nuxt-link>

      <!-- Title text -->
      <v-app-bar-title
        v-show="!smallScreen"
        mobile-break-point="1264"
        :class="
          this.$vuetify.breakpoint.sm
            ? 'primary--text text-subtitle-2'
            : 'primary--text text-no-wrap'
        "
      >
        <div class="text-no-wrap">Teluk Biru Karya</div>
      </v-app-bar-title>

      <v-spacer v-show="!mobile"></v-spacer>
      <!-- Buttons appear if not on mobile -->
      <v-container v-show="!mobile" class="buttonContainer">
        <v-row no-gutters v-show="!smallScreen">
          <v-col cols="12" class="pa-0 text-right">
            <v-btn-toggle v-model="toggleLanguage" rounded>
              <v-btn x-small @click="changeLanguage('en')"> EN </v-btn>

              <v-btn x-small @click="changeLanguage('id')"> ID </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row no-gutters class="text-right">
          <v-col cols="12">
            <nuxt-link
              v-for="(item, index) in items"
              :key="`${index}-navbar`"
              :to="`/${activeLanguage}/${item.to}`"
            >
              <v-btn
                v-show="!mobile"
                small
                class="ma-1"
                :color="isFocusItem(index) ? 'primary' : 'secondary'"
                :rounded="isFocusItem(index)"
                :outlined="isFocusItem(index)"
                >{{ item.title }}</v-btn
              >
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
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
        <v-container class="d-flex align-center justify-center">
          <v-list-item-icon>
            <v-icon>mdi-translate</v-icon>
          </v-list-item-icon>
          <v-btn-toggle rounded v-model="toggleLanguage" mandatory>
            <v-btn x-small @click="changeLanguage('en')"> EN </v-btn>

            <v-btn x-small @click="changeLanguage('id')"> ID </v-btn>
          </v-btn-toggle>
        </v-container>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      toggleLanguage: '',
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

      this.setToggleLangToStateActiveLang()
    } catch (e) {
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
    smallScreen() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs
    },
  },
  methods: {
    changeLanguage(languageToChangeTo) {
      // Change state activelanguage
      this.$store.dispatch('webText/fetchLanguageAndSet', languageToChangeTo)
      // Set to appropriate toggle on screen
      this.setToggleLangToStateActiveLang()
      // Grab the current route and reroute to the correct language
      this.grabCurrentRouteAndPushToActiveLangVersion()
    },
    // If the item is the 4th item in array, return true
    isFocusItem(index) {
      if (index === 3) {
        return true
      } else {
        return false
      }
    },
    // Grab the current active language from state and set toggle appropriately
    setToggleLangToStateActiveLang() {
      if (this.activeLanguage === 'en') {
        this.toggleLanguage = 0
      } else if (this.activeLanguage === 'id') {
        this.toggleLanguage = 1
      }
    },
    grabCurrentRouteAndPushToActiveLangVersion() {
      // Grab current route
      const route = this.$router.currentRoute
      // split for string concatenation
      const split = route.path.split('/')
      // push to appropriate route
      this.$router.push(`/${this.activeLanguage}/${split[2]}`)
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
.companyText {
  min-width: 150px;
}

.v-app-bar-title__content {
  width: 146px;
}
*/ .v-toolbar__content {
  min-height: 70px;
}
</style>
