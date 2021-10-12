<template>
  <contact-form />
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContactForm,
  },
  head() {
    return {
      // title for this page
      title: 'Contact Us',
      meta: [
        {
          // defines decription for this page
          hid: 'description',
          name: 'description',
          content:
            'Feel free to contact us with any business related enquiries',
        },
      ],
    }
  },
}
</script>
