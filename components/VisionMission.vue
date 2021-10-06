<template>
  <v-row class="ma-4">
    <v-col cols="12" sm="8">
      <v-row class="secondary lighten-2">
        <v-col cols="12" sm="5" class="d-flex align-center justify-center">
          <v-icon size="150" color="primary" class="ma-3 iconFade">
            mdi-map-marker-circle</v-icon
          >
        </v-col>
        <v-col cols="12" sm="7" class="d-flex">
          <v-row>
            <v-col>
              <p class="text-caption">Mission</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p
                :class="
                  mobile ? 'text-center text-subtitle' : 'text-center text-h5'
                "
              >
                {{ this.currentLanguageData.data.index.mission }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="200"
          max-width="500"
          src="https://picsum.photos/id/11/900/300"
        ></v-img>
      </v-row>
      <v-row class="primary lighten-2 d-flex flex-row-reverse">
        <v-col cols="12" sm="5" class="d-flex align-center justify-center">
          <v-icon size="150" color="black" class="ma-3 iconFade">
            mdi-eye-circle</v-icon
          >
        </v-col>
        <v-col cols="12" sm="7" class="d-flex">
          <v-row>
            <v-col>
              <p class="text-caption">Vision</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p
                :class="
                  mobile ? 'text-center text-subtitle' : 'text-center text-h5'
                "
              >
                {{ this.currentLanguageData.data.index.vision }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="4" height="300px" class="black">
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
</template>

<script>
import { mapState } from 'vuex'

export default {
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

<style>
.iconFade {
  animation: fadeInAnimation ease 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
