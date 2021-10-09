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
                v-for="(item, index) in companyFacets"
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
export default {
  data() {
    return {
      companyFacets: [
        {
          aspectTitle: 'Aspect 1',
          icon: 'mdi-bullseye-arrow',
          aspectCaption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          color: 'red',
        },
        {
          aspectTitle: 'Aspect 2',
          icon: 'mdi-mouse',
          aspectCaption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          color: 'grey',
        },
        {
          aspectTitle: 'Aspect 3',
          icon: 'mdi-chart-areaspline',
          aspectCaption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          color: 'black',
        },
      ],
    }
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
