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
          <v-card-text>{{
            this.currentLanguageData.data.contact.text
          }}</v-card-text>
        </v-col>
      </v-row>
      <v-card class="contact-form elevation-5">
        <v-row>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
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
          <v-col cols="12" sm="6">
            <v-textarea
              name="message"
              label="Message"
              value="Message"
              counter="250"
              hint="Why are you reaching out today?"
              full-width
            ></v-textarea>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="submit-button">Submit</v-btn>
            </v-card-actions>
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
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: mapState({
    currentLanguageData: (state) => state.webText.currentLanguageData,
    activeLanguage: (state) => state.webText.activeLanguage,
  }),
}
</script>

<style>
.v-text-field {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.contact-form {
  margin-bottom: 40px;
  /* border: black;
  border-style: solid;
  border-radius: 5px; */
}
.submit-button {
  margin-right: 8%;
}
</style>
