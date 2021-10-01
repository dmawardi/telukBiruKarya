<template>
  <v-card>
    <v-card-title>Brands</v-card-title>
    <v-row>
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
        },
      ],
    }
  },
}
</script>

<style></style>
