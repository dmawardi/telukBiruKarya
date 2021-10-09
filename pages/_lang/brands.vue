<template>
  <v-card class="mt-9 mb-9 pa-1">
    <v-card-title>Brands</v-card-title>
    <v-row class="ma-2">
      <!-- Iterate through brands -->
      <brand-card
        v-for="(brand, index) in brands"
        :key="`brand-${index}`"
        :brand="brand"
      />
    </v-row>
  </v-card>
</template>

<script>
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
          imgSrc: require('@/static/WildCoko web.png'),
          imgHeight: '200px',
          imgWidth: '200px',
          caption: 'Infused Organic Coconut Oil',
        },
      ],
    }
  },
}
</script>

<style></style>
