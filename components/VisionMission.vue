<template>
  <v-row>
    <!-- <v-col cols="12" sm="9"> -->
    <v-row class="secondary lighten-2">
      <v-col cols="12" sm="5" class="d-flex align-center justify-center">
        <!-- Mission Section -->
        <v-icon size="150" color="primary" class="ma-3 iconFade">
          mdi-map-marker-circle</v-icon
        >
      </v-col>
      <v-col cols="12" sm="7" class="d-flex">
        <v-row>
          <v-col>
            <p class="text-subtitle">Mission</p>
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
    <!-- Separator row -->
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-img max-height="200px" src="/VisMisSeparator.png"></v-img>
      </v-col>
    </v-row>
    <!-- Vision row -->
    <v-row class="primary lighten-2 d-flex flex-row-reverse">
      <v-col cols="12" sm="5" class="d-flex align-center justify-center">
        <v-icon size="150" color="black" class="ma-3 iconFade">
          mdi-eye-circle</v-icon
        >
      </v-col>
      <v-col cols="12" sm="7" class="d-flex">
        <v-row>
          <v-col>
            <p class="text-subtitle">Vision</p>
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
    <!-- </v-col> -->
    <!-- Side column (hidden when mobile) -->
    <!-- <v-col
      v-show="!mobile"
      cols="12"
      sm="3"
      class="black pa-0 pt-2 asideContainer"
    >
    </v-col> -->
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
.asideContainer {
  background-image: url('/VisMisAside.png');
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
