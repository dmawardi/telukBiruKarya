export default function (context) {
  //   console.log('context: ', context.app.router)
  //   console.log('params', context.params)
  //   context.app.router.push('/en/contact')
  //   try {
  //     if (
  //       this.$route.params.lang === undefined ||
  //       this.$route.params.lang === 'undefined'
  //     ) {
  //       console.log('determined to be undefined')
  //     } else {
  //       console.log('else')
  //       this.$store.dispatch(
  //         'webText/fetchLanguageAndSet',
  //         this.$route.params.lang
  //       )
  //     }
  //   } catch (e) {
  //     context.redirect('/en')
  //     console.log('caught error')
  //     throw new Error('Unable to detect language.')
  //   }
  // // Add the userAgent property to the context
  // context.userAgent = process.server
  //   ? context.req.headers['user-agent']
  //   : navigator.userAgent
}
