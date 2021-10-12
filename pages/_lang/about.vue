<template>
  <div>
    <!-- Parallax card -->
    <v-card>
      <v-parallax dark :src="parallaxImage" class="aboutParallax">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <p class="text-h4 font-italic parallaxHeading">A little</p>
            <p class="text-h2 font-weight-black mb-4 parallaxHeading">
              About Us
            </p>
          </v-col>
        </v-row>
      </v-parallax>
    </v-card>
    <!-- Team information -->
    <v-card class="white mb-5">
      <v-row>
        <v-col cols="12">
          <v-card-title class="text-decoration-underline">Team</v-card-title>
        </v-col>
      </v-row>
      <v-row class="mb-4">
        <!-- Iterate through team members -->
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
          <!-- Text -->
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
      <!-- About the company section -->
      <v-row>
        <v-col cols="12">
          <v-card-title class="text-decoration-underline mt-3"
            >About</v-card-title
          >
        </v-col>
      </v-row>
      <!-- Company image -->
      <v-row>
        <v-col cols="12" md="6" class="d-flex align-center mb-3">
          <v-img
            class="ma-auto"
            min-height="100px"
            :max-height="mobile ? '200px' : '450px'"
            max-width="500px"
            src="/OfficeFront.jpg"
          ></v-img>
        </v-col>
        <!-- Text section -->
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
      <vision-mission />
      <!-- Location section -->
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
              <!-- Address container -->
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
        <!-- Map image -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="440"
                height="280"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Danoya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><style>
                .gmap_canvas {
                  overflow: hidden;
                  background: none !important;
                  height: 300px;
                  width: 440px;
                }
              </style>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VisionMission from '@/components/VisionMission.vue'

export default {
  components: {
    VisionMission,
  },
  data() {
    return {
      parallaxImage: require('@/static/AboutParallax.jpg'),
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
          background: 'Accounting/Finance, Data Science, & Web Programming',
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
  head() {
    return {
      // title for this page
      title: 'About',
      meta: [
        {
          // defines decription for this page
          hid: 'description',
          name: 'description',
          content:
            'Established in late-2021, the vision of TBK was to build brands that catered to a premium niche market.  We build brands that have purpose and strive for community.',
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

<style scoped>
p.addressDetail {
  margin-bottom: 0;
}
.aboutParallax {
  margin-top: 48px;
}
.parallaxHeading {
  color: black;
}
</style>
