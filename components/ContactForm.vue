<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title>Contact Us</v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <!-- Text section -->
          <v-card-text>{{
            this.currentLanguageData.data.contact.text
          }}</v-card-text>
        </v-col>
      </v-row>
      <!-- Form -->
      <v-card class="pa-4 mb-5 elevation-5">
        <v-row>
          <v-col cols="12" sm="6">
            <v-row>
              <!-- First name -->
              <v-col cols="12">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="20"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Last name -->
              <v-col cols="12">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="20"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- Email -->
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <!-- Message -->
          <v-col cols="12" sm="6">
            <v-textarea
              v-model="message"
              type="text"
              name="message"
              label="Message"
              counter="250"
              hint="Why are you reaching out today?"
              full-width
            ></v-textarea>
            <br />

            <!-- Actions -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="submitContactForm"
                class="submit-button"
                :disabled="showDialog"
                :loading="this.loading"
                >Submit</v-btn
              >
            </v-card-actions>
            <!-- Dialog shown when submitting -->
            <v-dialog v-model="showDialog" elevation="18">
              <v-card :color="this.dialogColor" dark>
                <v-card-text class="text-center">
                  <v-row>
                    <v-col cols="12">
                      {{ this.alertMessage }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <!-- 3 separate items to show based on dialogColor -->
                      <!-- success -->
                      <v-icon
                        v-show="this.dialogColor == 'secondary'"
                        size="50"
                        color="black"
                        class="ma-3 iconFade"
                      >
                        mdi-check-bold</v-icon
                      >
                      <!-- Failure -->
                      <v-icon
                        v-show="this.dialogColor == 'red'"
                        size="50"
                        color="black"
                        class="ma-3 iconFade"
                      >
                        mdi-alert-circle</v-icon
                      >
                      <!-- Progress -->
                      <v-progress-linear
                        v-show="this.loading"
                        indeterminate
                        color="white"
                        class="mb-9 mt-5"
                      ></v-progress-linear>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    valid: false,
    // form fields
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    // Dialog
    showDialog: false,
    dialogColor: 'primary',
    alertMessage: 'Sending form...',
    responseSuccess: false,
    loading: false,

    // validation options
    nameRules: [
      (v) => !!v || 'All name fields required',
      (v) => v.length <= 20 || 'Name must be less than 20 characters',
    ],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: mapState({
    currentLanguageData: (state) => state.webText.currentLanguageData,
    activeLanguage: (state) => state.webText.activeLanguage,
    mobile() {
      return this.$vuetify.breakpoint.xs
    },
  }),
  methods: {
    async submitContactForm() {
      this.dialogColor = 'primary'
      this.loading = true
      // Set alert
      this.showDialog = true

      // Call api
      const response = await this.$axios.post(
        'https://formspree.io/f/mpzknnzz',
        {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          message: this.message,
          _subject: `${this.message} | Message from TBK website`,
          _replyto: this.email,
          _name: this.firstname,
        }
      )

      if (response.status === 200) {
        // Reset form
        this.firstname = ''
        this.lastname = ''
        this.email = ''
        this.message = ''
        this.valid = false

        // Edit dialog
        this.alertMessage = 'Contact form sent successfully!'
        this.dialogColor = 'secondary'
        this.loading = false
      } else {
        // Edit dialog
        this.alertMessage = 'Failed to send form'
        this.dialogColor = 'red'
        this.loading = false
      }
    },
  },
}
</script>

<style>
.v-text-field {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.submit-button {
  margin-right: 8%;
}
</style>
