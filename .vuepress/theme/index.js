const { path } = require('@vuepress/utils')

module.exports = {
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, './Layout.vue'),
  },
}
