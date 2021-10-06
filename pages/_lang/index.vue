<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-parallax
          fluid
          height="590"
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        >
          <v-row align="center" justify="center" class="ma-0 pa-0">
            <v-col cols="12">
              <h1 class="text-h4 font-weight-thin mb-4">
                The future... balanced
              </h1>
              <!-- <h4 class="subheading">without preconceptions</h4> -->
              <v-btn outlined :href="`${this.activeLanguage}/contact`">
                Contact us
              </v-btn>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="ma-0 pa-0">
        <v-card color="primary darken-1" min-height="140px" class="ma-0 pa-0">
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

    <vision-mission />
    <company-facets />
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="center" justify="center" class="ma-0 pa-0">
        <v-col cols="12" class="text-center">
          <h1 class="text-h5 font-weight-thin mb-4">
            Stay in touch with what we are up to
          </h1>
          <!-- <h4 class="subheading">without preconceptions</h4> -->
          <v-form @submit.prevent="submit">
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
                  prepend-icon="mdi-email"
                  color="primary lighten-2"
                  label="E-mail"
                  class="ml-auto mr-auto"
                  required
                ></v-text-field>
                <v-btn height="40px" class="ml-auto mr-auto"> email me </v-btn>
              </v-row>
            </v-container>
          </v-form>
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
      // if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
      //   return true
      // } else {
      //   return false
      // }
    },
  },
}
</script>

<style scoped>
.emailBox {
  max-width: 400px;
}
</style>
