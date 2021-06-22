module.exports = {
  presets: [
    require(process.env.APP_ENV === 'production' ? '@groggy-ui/vue/dist/tailwind.preset.js' : '../@groggy-ui-vue/src/tailwind.preset.js')
  ]
}
