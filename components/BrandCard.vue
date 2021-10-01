<template>
  <v-col cols="12" md="6">
    <v-card class="ma-4">
      <v-row>
        <v-col cols="12" sm="5" class="">
          <v-container class="ma-2 mt-5">
            <v-row>
              <v-img
                class="ma-1"
                height="150"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="caption text-center">
                  Infused Organic Coconut Oil
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" sm="7">
          <v-card-title class="text-center">{{ brand.brandName }}</v-card-title>
          <v-card-text>{{ brand.subtext }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ma-2">More</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'BrandCard',
  props: ['brand'],
}
</script>
<style scoped></style>
