<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-parallax
          fluid
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
          <v-row align="center" justify="center" class="ma-0 pa-0">
            <v-col cols="12">
              <h1 class="text-h4 font-weight-thin mb-4">
                The Future... balanced
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
        <v-card min-height="120px" class="ma-0 pa-0">
          <v-card-title>Banner slogan</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-4">
      <v-col cols="12" sm="8">
        <v-row>
          <v-col cols="4">
            <v-img
              class="ma-auto"
              min-height="100px"
              :max-height="mobile ? '200px' : '500px'"
              min-width="80px"
              max-width="400px"
              src="https://picsum.photos/seed/picsum/400/300"
            ></v-img>
          </v-col>
          <v-col cols="8" class="d-flex align-center">
            <p class="text-justify text-h5">
              {{ this.currentLanguageData.data.index.mission }}
            </p>
          </v-col>
        </v-row>
        <br />
        <v-divider></v-divider>
        <br />
        <v-row>
          <v-col cols="8" class="d-flex align-center">
            <p class="text-justify text-h5">
              {{ this.currentLanguageData.data.index.vision }}
            </p>
          </v-col>
          <v-col cols="4">
            <v-img
              class="ma-auto"
              min-height="100px"
              :max-height="mobile ? '200px' : '500px'"
              min-width="80px"
              max-width="400px"
              src="https://picsum.photos/seed/picsum/400/300"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" height="300px">
        <v-img
          class="ma-auto"
          min-height="100px"
          :max-height="mobile ? '120px' : '500px'"
          min-width="80px"
          max-width="400px"
          src="https://picsum.photos/seed/picsum/400/300"
        ></v-img>
      </v-col>
    </v-row>

    <landing-content />
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="center" justify="center" class="ma-0 pa-0">
        <v-col cols="12" class="text-center">
          <h1 class="text-h4 font-weight-thin mb-4">Stay in touch</h1>
          <!-- <h4 class="subheading">without preconceptions</h4> -->
          <v-btn :href="`${this.activeLanguage}/contact`"> Email me! </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LandingContent from '@/components/LandingContent.vue'
export default {
  components: {
    LandingContent,
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
  computed: mapState({
    currentLanguageData: (state) => state.webText.currentLanguageData,
    activeLanguage: (state) => state.webText.activeLanguage,
  }),
}
</script>

<style></style>
