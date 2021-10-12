import db from '../services/db.js'

export const state = () => ({
  currentLanguageData: {},
  activeLanguage: 'en',
})

export const mutations = {
  SET_LANGUAGE_DATA(state, languageData) {
    state.currentLanguageData = {
      data: languageData,
    }
  },
  SET_ACTIVE_LANGUAGE(state, language) {
    state.activeLanguage = language
  },
}

export const actions = {
  fetchLanguageAndSet(context, language) {
    try {
      // if language detected, set to state
      if (language !== undefined || language !== 'undefined') {
        context.commit('SET_ACTIVE_LANGUAGE', language)
        const languageData = db[language]
        return context.commit('SET_LANGUAGE_DATA', languageData)
      } else {
        // Set default
        context.commit('SET_ACTIVE_LANGUAGE', 'en')
        const languageData = db.en
        return context.commit('SET_LANGUAGE_DATA', languageData)
      }
    } catch (error) {
      return error.message
    }
  },
}
