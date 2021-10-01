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
  fetchLanguageAndSet({ commit }, language) {
    try {
      console.log('State language request to:', language)

      if (language !== undefined) {
        commit('SET_ACTIVE_LANGUAGE', language)
        console.log('set active complete')
        const languageData = db[language]
        return commit('SET_LANGUAGE_DATA', languageData)
      }
    } catch (error) {
      return error.message
    }
  },
}
