module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended', //实际上使用的是 eslint-plugin-vue 插件，recommended 是配置名
    'eslint:recommended', //eslint 官方的扩展 ESLint 内置的推荐规则 eslint:all ESLint 内置的所有规则
    //避免与 prettier 冲突
    'plugin:prettier/recommended'
  ],
  globals: {
    winning: true,
    FastReportDesign: true,
    pangoBootstrap: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2], //使用 2 个空格缩进
    semi: ['error', 'never'], // 禁止分号
    'prefer-const': 1, //首选const
    'comma-dangle': ['error', 'never'], //句尾逗号
    quotes: ['error', 'single'], //单引号
    'comma-style': [2, 'last'], //逗号风格，换行时在行尾
    'nonblock-statement-body-position': [2, 'beside'], //单行代码
    'brace-style': [2, '1tbs'], //大括号风格
    'space-before-blocks': [2, 'always'], //块的左大括号 { 前有一个空格
    'space-in-parens': [0, 'never'], //()内部两侧无空格
    'array-bracket-spacing': [2, 'never'], //[]内部两侧无空格
    'keyword-spacing': ['error', { before: true }], //控制语句（if、while 等）的左小括号 ( 前有一个空格
    'object-curly-spacing': [2, 'always'], //{}内部两侧有空格
    'key-spacing': [2, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    'space-infix-ops': ['error', { int32Hint: false }], //运算符两侧有空格，除了一元运算符
    'eol-last': ['warn', 'always'], //在文件末尾保留一行空行
    'padded-blocks': ['error', 'never'], //块的开始和结束不能是空行
    'no-undef': 2, //不能有未定义的变量
    'no-use-before-define': 2, //未定义前不能使用
    'no-shadow': 2, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-redeclare': 2, //禁止重复声明变量
    'array-callback-return': 1 //某些数组方法的回调函数中必须包含 return 语句一个常见的误用是，本该用 forEach 的场景却用了 map
  }
}
