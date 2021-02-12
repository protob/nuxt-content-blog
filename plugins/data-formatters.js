export default (context, inject) => {
  const taxonomyFormatter = (articles) => {
    const catsDuplicatesArr = articles
      .map((item) => item.categories)
      // .map((item) => item.split(','))
      // .flat(1)
      // .map((item) => item.trim())
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
  }

  const taxonomyFormatter2 = (articles) => {
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
  }
  // Inject $hello(msg) in Vue, context and store.
  inject('taxonomyFormatter', taxonomyFormatter)
  inject('taxonomyFormatter2', taxonomyFormatter2)
  // For Nuxt <= 2.12, also add 👇
  context.$taxonomyFormatter = taxonomyFormatter
  context.$taxonomyFormatter2 = taxonomyFormatter2
}
