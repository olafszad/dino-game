const postcss = require('postcss')

module.exports = {
  spacing: function (mixin, prop, min, max) {
    const calcFunction = `clamp(${min} * 1px, calc(${min} * 1px + (${max} - ${min}) * ((100vw - 360px) / 1560)), ${max} * 1px)`
    const rule = postcss.rule({ selector: '&' })

    rule.append({
      prop: `${prop}`,
      value: `${calcFunction}`,
    })

    mixin.replaceWith(rule)
  },
  mq: function (mixin, breakpoint, type = 'min') {
    breakpoint = `bp-${breakpoint}`

    const types = {
      'bp-340': 340,
      'bp-414': 414,
      'bp-576': 576,
      'bp-768': 768,
      'bp-1024': 1024,
      'bp-1280': 1280,
      'bp-1440': 1440,
      'bp-1536': 1536,
    }

    let media

    if (type === 'min') {
      media = postcss.parse(
        `@media (min-width: ${types[breakpoint]}px) {
          ${mixin.nodes.join(';').replaceAll('};', '}')}
        }`,
      )
    } else {
      media = postcss.parse(
        `@media (max-width: ${types[breakpoint] - 0.02}px) {
          ${mixin.nodes.join(';').replaceAll('};', '}')}
        }`,
      )
    }

    mixin.replaceWith(media)
  },
}
