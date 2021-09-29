<template>
  <div>
    <h1>Events</h1>
    <div>
      <event-card
        v-for="(event, index) in events"
        :key="`${index}-container`"
        :event="event"
        :data-index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'
// import EventService from '@/services/EventService.js'
export default {
  components: {
    EventCard,
  },
  // fetch is similar to asyncdata, however, works in both universal and ssr mode
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      return context.error({
        //       statusCode: 503,
        //       message: 'Unable to fetch eventss at this time. Please try again.',
        //     })
      })
    }
  },
  // async asyncData(context) {
  //   try {
  //     const response = await EventService.getEvents()

  //     return {
  //       events: response.data,
  //     }
  //   } catch (e) {
  //     return context.error({
  //       statusCode: 503,
  //       message: 'Unable to fetch eventss at this time. Please try again.',
  //     })
  //   }
  // },
  // property used by vue meta
  head() {
    return {
      // title for this page
      title: 'Event Listing',
      meta: [
        {
          // defines decription for this page
          hid: 'description',
          name: 'description',
          content:
            'Where you can find all the events taking place in your neighborhood',
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
