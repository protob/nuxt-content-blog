export const state = () => ({
  cats: [],
  tags: [],
})

export const mutations = {
  SET_CATS(state, payload) {
    state.cats = payload
  },
  SET_TAGS(state, payload) {
    state.tags = payload
  },
}
export const actions = {
  formatTaxonomies2(vuexContext, articles) {
    const catsDuplicatesArr = articles
      .map((item) => item.categories)

      .filter((item) => item)

    const cats = Object.values(
      catsDuplicatesArr.reduce((accum, currVal) => {
        accum[currVal] = accum[currVal] || [currVal, 0]
        accum[currVal][1]++
        return accum
      }, {})
    )
      .map((item) => {
        return {
          name: item[0],
          count: item[1],
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
    return cats
  },
  formatTaxonomies(vuexContext, articles) {
    const tagsDuplicatesArr = articles
      .map((item) => item.tags)
      .map((item) => item.split(','))
      .flat(1)
      .map((item) => item.trim())
      .filter((item) => item)
    const tags = Object.values(
      tagsDuplicatesArr.reduce((accum, currVal) => {
        accum[currVal] = accum[currVal] || [currVal, 0]
        accum[currVal][1]++
        return accum
      }, {})
    )
      .map((item) => {
        return {
          name: item[0],
          count: item[1],
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
    return tags
  },

  async setTaxonomies(vuexContext) {
    const articles = await this.$content('articles', {}, { deep: true })
      .only([
        'slug',
        'title',
        'date',
        'excerpt',
        'coverImage',
        'image',
        'categories',
        'tags',
        'author',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()

    const tags = await vuexContext.dispatch('formatTaxonomies2', articles)
    const cats = await vuexContext.dispatch('formatTaxonomies', articles)
    vuexContext.commit('SET_TAGS', tags)
    vuexContext.commit('SET_CATS', cats)
  },

  setCats(vuexContext, obj) {
    vuexContext.commit('SET_CATS', obj)
  },
  setTags(vuexContext, obj) {
    vuexContext.commit('SET_TAGS', obj)
  },
}

export const getters = {
  getCats: (state) => {
    return state.cats
  },
  getTags: (state) => {
    return state.tags
  },
}
