<template>
  <div>
    <v-card>
      <v-parallax dark :src="parallaxImage" class="aboutParallax">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <p class="text-h3 font-italic parallaxHeading">A little</p>
            <p class="text-h2 font-weight-black mb-4 parallaxHeading">
              About Us
            </p>
          </v-col>
        </v-row>
      </v-parallax>
    </v-card>
    <v-card class="white mb-5">
      <v-row>
        <v-col cols="12">
          <v-card-title class="text-decoration-underline">Team</v-card-title>
        </v-col>
      </v-row>
      <v-row class="mb-4">
        <v-col
          v-for="member in team"
          :key="`${member.name}-card`"
          cols="12"
          sm="4"
        >
          <v-card-title class="justify-center">
            <p class="text-uppercase text-subtitle-2">
              {{ member.name }}
            </p>
          </v-card-title>

          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <v-avatar color="teal" size="200"
                ><img :src="member.imageSrc" :alt="member.name" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-card-text>
            <p class="text-caption text-justify">
              <strong> Background: </strong>
              {{ member.background }}
            </p>
            <p class="text-caption text-center">
              <strong> Email: </strong>
              {{ member.mail }}
            </p>
          </v-card-text>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12">
          <v-card-title class="text-decoration-underline mt-3"
            >About</v-card-title
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="d-flex align-center">
          <v-img
            class="ma-auto"
            min-height="100px"
            :max-height="mobile ? '200px' : '450px'"
            min-width="80px"
            max-width="400px"
            src="https://picsum.photos/seed/picsum/400/300"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="ma-4 pa-1 elevate" outlined shaped elevation="9">
            <v-card-title>
              <p class="text-uppercase text-subtitle-1">Philosophy</p>
            </v-card-title>
            <v-card-text>
              <p class="text-subtitle-1 text-justify">
                {{ this.currentLanguageData.data.about.aboutSubtitle }}
              </p>
              <br />
              <p class="text-caption text-justify">
                {{ this.currentLanguageData.data.about.aboutText }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12">
          <v-card-title class="text-decoration-underline"
            >Location</v-card-title
          >
        </v-col>
      </v-row>
      <v-row class="mb-4">
        <v-col cols="12" md="6">
          <v-card class="ma-4 pa-1 elevate" outlined shaped elevation="9">
            <v-card-title>
              <p class="text-uppercase text-subtitle-1">Home Base</p>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row
                  v-for="(detail, index) in address"
                  :key="`${index}-address`"
                >
                  <v-col cols="4">
                    <p class="text-caption addressDetail">
                      <strong>{{ detail.detailName }}</strong>
                    </p>
                  </v-col>
                  <v-col cols="8">
                    <p class="text-caption addressDetail">
                      {{ detail.detail }}
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="mapouter ma-4">
            <div class="gmap_canvas">
              <iframe
                width="500"
                height="280"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Danoya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><a href="https://putlocker-is.org">putlocker</a><br /><style>
                .mapouter {
                  position: relative;
                  text-align: right;
                  height: 300px;
                  width: 500px;
                }</style
              ><a href="https://www.embedgooglemap.net">google maps api html</a
              ><style>
                .gmap_canvas {
                  overflow: hidden;
                  background: none !important;
                  height: 300px;
                  width: 500px;
                }
              </style>
            </div>
          </div>
          <!-- <v-img
            class="ml-auto mr-auto"
            min-height="100px"
            :max-height="mobile ? '200px' : '300px'"
            min-width="100px"
            :max-width="mobile ? '250px' : '400px'"
            src="https://picsum.photos/seed/picsum/400/300"
          ></v-img> -->
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {
      parallaxImage: require('@/static/AboutParallax.png'),
      team: [
        {
          name: 'Calvin Santoso',
          role: 'Founder/Primary Director',
          mail: 'cSantoso@telukbirukarya.com',
          initials: 'CS',
          imageSrc: require('@/static/CS Profile.png'),

          background:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam, sapien finibus ultrices tristique.',
        },
        {
          name: 'Danar Mawardi',
          role: 'Founder/Strategy Director',
          mail: 'dMawardi@telukbirukarya.com',
          initials: 'DM',
          imageSrc: require('@/static/DM Profile.png'),
          background:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam, sapien finibus ultrices tristique.',
        },
      ],
      address: [
        {
          detailName: 'Street Address',
          detail: 'Jl. BatueBelig 559, Seminyak, Kerobokan Kelod.',
        },
        {
          detailName: 'City',
          detail: 'Kec. Kuta Utara, Kabupaten Badung',
        },
        {
          detailName: 'State',
          detail: 'Bali',
        },
        {
          detailName: 'Postcode',
          detail: '80361',
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
      // if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
      //   return true
      // } else {
      //   return false
      // }
    },
    smallScreen() {
      return this.$vuetify.breakpoint.sm
      // if (this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
      //   return true
      // } else {
      //   return false
      // }
    },
  },
}
</script>

<style scoped>
p.addressDetail {
  margin-bottom: 0;
}
.aboutParallax {
  margin-top: 48px;
}
.parallaxHeading {
  color: #285cff;
}
</style>
