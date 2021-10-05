<template>
  <div>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-card class="ma-1" elevation="5">
          <v-container>
            <br />
            <v-row>
              <v-col
                v-for="(item, index) in companyFacets"
                :key="`${index}-aspects`"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card-title class="justify-center">{{
                  item.aspectTitle
                }}</v-card-title>
                <v-icon size="100" :color="item.color">
                  {{ item.icon }}
                </v-icon>
                <v-card-text>
                  <p class="text-caption text-justify">
                    {{ item.aspectCaption }}
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-row>
          <v-col cols="12" sm="6"> </v-col>
          <v-col cols="12" sm="6"> </v-col>
        </v-row>
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

<style></style>
