<template>
  <div>
    <v-row class="mt-9">
      <v-col cols="12">
        <!-- Parallax -->
        <v-parallax fluid height="540" :src="parallaxImageTop">
          <v-row align="center" justify="center" class="ma-0 pa-0">
            <v-col cols="12">
              <p class="text-h4 font-weight-bold mb-4 text-uppercase">
                Innovation balanced
              </p>
              <nuxt-link :to="`/${this.activeLanguage}/contact`">
                <v-btn color="secondary" outlined large> Contact us </v-btn>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="ma-0 pa-0">
        <!-- Banner -->
        <v-card color="primary lighten-1" min-height="140px" class="ma-0 pa-0">
          <v-row class="d-flex align-center justify-center">
            <v-col cols="4" sm="5"><hr class="horizontalLine" /> </v-col>
            <v-col cols="4" sm="2">
              <p
                :class="
                  mobile
                    ? 'text-subtitle white--text ma-0 text-center'
                    : 'text-h6 white--text ma-0 text-center'
                "
              >
                Our Brands
              </p>
            </v-col>
            <v-col cols="4" sm="5"> <hr class="horizontalLine" /> </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-img
                class="ml-auto mr-auto mb-2"
                src="/WildCoko_web.PNG"
                max-height="80px"
                max-width="80px"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- Sections -->
    <v-row>
      <!-- Text section -->
      <v-col cols="12" sm="9">
        <v-card class="ma-4 pa-1 elevate" outlined shaped elevation="9">
          <v-card-title>
            <p class="text-uppercase text-subtitle-1">Who are we?</p>
          </v-card-title>
          <v-card-text>
            <p class="text-caption text-justify">
              {{ this.currentLanguageData.data.index.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" class="black pa-2 pt-2 asideContainer"> </v-col>
    </v-row>
    <company-facets />

    <!-- Email retrieve parallax -->
    <v-parallax :src="parallaxImageBot">
      <v-row align="center" justify="center" class="ma-0 pa-0">
        <v-col cols="12" class="text-center">
          <h1 class="text-h5 font-weight-thin mb-4">Reach out to us</h1>
          <nuxt-link :to="`/${this.activeLanguage}/contact`">
            <v-btn color="secondary" outlined large> Contact us </v-btn>
          </nuxt-link>
          <!-- Email submission -->
          <!-- <v-form @submit.prevent="submit">
            <v-container class="emailBox">
              <v-row class="text-center">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  clearable
                  filled
                  dense
                  single-line
                  solo-inverted
                  dark
                  prepend-icon="mdi-email"
                  color="secondary lighten-2"
                  label="E-mail"
                  class="ml-auto mr-auto"
                  required
                ></v-text-field>
                <v-btn height="40px" class="ml-auto mr-auto"> email me </v-btn>
              </v-row>
            </v-container>
          </v-form> -->
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CompanyFacets from '~/components/CompanyFacets.vue'
export default {
  components: {
    CompanyFacets,
  },
  data() {
    return {
      parallaxImageTop: require('@/static/HomeParallax.jpg'),
      parallaxImageBot: require('@/static/EmailParallax.jpg'),
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  // property used by vue meta
  head() {
    return {
      // title for this page
      title: 'Teluk Biru Karya',
      meta: [
        {
          // defines decription for this page
          hid: 'description',
          name: 'description',
          content: `We build unique brands to exceed our customer's expectatioms.  We are based in Bali, Indonesia`,
        },
      ],
    }
  },
  // maps a computed property with a vuex property
  computed: {
    ...mapState({
      currentLanguageData: (state) => state.webText.currentLanguageData,
      activeLanguage: (state) => state.webText.activeLanguage,
    }),
    mobile() {
      return this.$vuetify.breakpoint.xs
    },
  },
}
</script>

<style scoped>
.emailBox {
  max-width: 400px;
}
.asideContainer {
  background-image: url('/VisMisAside.png');
}

.horizontalLine {
  width: 100%;
  text-align: center;
  margin-left: 0;
}
</style>
