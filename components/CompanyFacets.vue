<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <!-- Company Facet card -->
        <v-card class="ma-1" elevation="5">
          <v-container>
            <br />
            <v-row>
              <!-- Iterate through company facets/aspects -->
              <v-col
                v-for="(item, index) in this.currentLanguageData.data.index
                  .companyFacets"
                :key="`${index}-aspects`"
                cols="12"
                sm="6"
                md="4"
              >
                <!-- Title -->
                <v-card-title class="justify-center">{{
                  item.aspectTitle
                }}</v-card-title>
                <!-- Icon -->
                <v-icon size="100" :color="item.color" class="iconFade">
                  {{ item.icon }}
                </v-icon>
                <!-- Text -->
                <v-card-text>
                  <p class="text-caption text-justify">
                    {{ item.aspectCaption }}
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      currentLanguageData: (state) => state.webText.currentLanguageData,
      activeLanguage: (state) => state.webText.activeLanguage,
    }),
  },
}
</script>

<style>
.iconFade {
  animation: fadeInAnimation ease 6s;
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
