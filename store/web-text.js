import db from '../services/db.js'

export const state = () => ({
  currentLanguageData: {},
})

export const mutations = {
  SET_LANGUAGE_DATA(state, language) {
    state.currentLanguageData = {
      language,
    }
  },
}

export const actions = {
  fetchLanguageAndSet({ commit }, language) {
    console.log('Switching language to:', language)
    const languageData = db[language]
    return commit('SET_LANGUAGE_DATA', languageData)
  },
}
