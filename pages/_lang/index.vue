<template>
  <div>
    <h1>Home</h1>
    <div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // fetch is similar to asyncdata, however, works in both universal and ssr mode
  async fetch({ store, error }) {
    try {
      await store.dispatch('web-text/fetchLanguageAndSet', 'en')
    } catch (e) {
      return error({
        statusCode: 503,
        message: 'Unable to detect language.',
      })
    }
  },

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
  computed: mapState({
    events: (state) => state.events.events,
  }),
}
</script>

<style></style>
