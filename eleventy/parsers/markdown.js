const markdownIt = require('markdown-it')
const replaceLink = require('markdown-it-replace-link')
const anchor = require('markdown-it-anchor')

const { isExternalUrl } = require('../utils/urls')
const slugify = require('../filters/slugify')

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})

md.use(anchor, {
  level: [2, 3, 4],
  tabIndex: false,
  slugify,
  permalink: anchor.permalink.headerLink({
    class: 'not-prose anchor',
    style: 'aria-labelledby',
  }),
})

md.use(replaceLink, {
  processHTML: false,
  replaceLink: function (link, _env, token, _htmlToken) {
    // do not transform external, image, or mailto links
    const ignore = [isExternalUrl(link), token.type == 'image', link.startsWith('mailto:')]

    return ignore.some((condition) => condition === true)
      ? link
      : slugify(link)
  },
})

module.exports = md
