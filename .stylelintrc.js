module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier' // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.json'],
  rules: {
    indentation: 2, // 用来定义缩进的单位
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['global', 'v-deep', 'deep']
      }
    ]
  }
}
