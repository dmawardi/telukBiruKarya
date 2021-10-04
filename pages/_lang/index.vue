<template>
  <div>
    <v-parralax src="/Teluk_Biru.PNG">
      <h1>Home</h1>
    </v-parralax>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  // fetch is similar to asyncdata, however, works in both universal and ssr mode

  // property used by vue meta
  head() {
    return {
      // title for this page
      title: 'Teluk Biru Karya',
      meta: [
        {
          // defines decription for this page
          hid: 'description',
          name: 'description',
          content: 'Trading company located in Bali, Indonesia',
        },
      ],
    }
  },
  // maps a computed property with a vuex property
  // computed: mapState({
  //   currentLanguageData: (state) => state.webText.currentLanguageData,
  //   activeLanguage: (state) => state.webText.activeLanguage,
  // }),
}
</script>

<style></style>
