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
    return {
      brands: [
        {
          brandName: 'Wild Coko',
          subtext:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam, sapien finibus ultrices tristique, tellus mauris venenatis lectus, ut volutpat diam sem vitae odio.',
          imgSrc: require('@/static/WildCoko_web.png'),
          imgHeight: '200px',
          imgWidth: '200px',
          caption: 'Infused Organic Coconut Oil',
        },
      ],
    }
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
          content:
            'Teluk Biru Karya build unique brands for the niche market. Some examples include: Wild Coko',
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
