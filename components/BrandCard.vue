<template>
  <v-col cols="12" md="6">
    <!-- Creates hover effect using elevation -->
    <v-hover v-slot="{ hover }">
      <v-card :elevation="hover ? 8 : 4">
        <v-row>
          <v-col cols="12" sm="5" class="">
            <!-- Image container -->
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-img
                    class="ml-auto mr-auto"
                    src="/WildCoko web.PNG"
                  ></v-img>
                </v-col>
              </v-row>
              <v-row>
                <!-- Caption -->
                <v-col cols="12">
                  <div class="caption text-center">
                    {{ brand.caption }}
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <!-- Brand text -->
          <v-col cols="12" sm="7">
            <v-card-title class="text-center">{{
              brand.brandName
            }}</v-card-title>
            <v-card-text>{{ brand.subtext }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :href="brand.to" class="ma-2">More</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: 'BrandCard',
  props: ['brand'],
}
</script>
<style scoped></style>
