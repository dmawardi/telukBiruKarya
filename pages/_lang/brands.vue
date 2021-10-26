<template>
  <v-card class="mt-9 mb-9 pa-1">
    <v-card-title>Brands</v-card-title>
    <v-row class="ma-2">
      <!-- Iterate through brands -->
      <brand-card
        v-for="(brand, index) in this.currentLanguageData.data.brands.list"
        :key="`brand-${index}`"
        :brand="brand"
      />
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import BrandCard from '@/components/BrandCard.vue'

export default {
  components: { BrandCard },
  data() {
    return {}
  },
  head() {
    return {
      // title for this page
      title: 'Brands',
      meta: [
        {
          // defines decription for this page
          hid: 'description',
          name: 'description',
          content: `Teluk Biru Karya builds unique brands for the niche market. Examples include: Wild Coko & Cade's Drinks`,
        },
      ],
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
      return this.$vuetify.breakpoint.sm
    },
  },
}
</script>

<style></style>
