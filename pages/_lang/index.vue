<template>
  <div>
    <v-row class="mt-9">
      <v-col cols="12">
        <!-- Parallax -->
        <v-parallax fluid height="540" :src="parallaxImageTop">
          <v-row align="center" justify="center" class="ma-0 pa-0">
            <v-col cols="12">
              <p class="text-h4 font-weight-bold mb-4 text-uppercase">
                Innovation magnified
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
          <v-row>
            <v-col class="d-flex align-center justify-center">
              <p
                :class="
                  mobile
                    ? 'text-subtitle white--text ma-4'
                    : 'text-h6 white--text ma-4'
                "
              >
                "Innovation distinguishes between a leader and a follower"
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="7"></v-col>
            <v-col cols="5">
              <p class="mr-4 text-subtitle white--text">-Steve Jobs</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- Sections -->
    <vision-mission />
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
import VisionMission from '@/components/VisionMission.vue'
export default {
  components: {
    CompanyFacets,
    VisionMission,
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
          content: 'Trading company located in Bali, Indonesia',
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
</style>
