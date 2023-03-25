module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['vue', '@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  settings: {
    'import/resolver': {
      // 项目里的别名
      alias: {
        map: [['@', './client/src']]
      }
    },
		// 运行的扩展名
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs']
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-strongly-recommended',
    // 解决 prettier 冲突
    'prettier'
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
	// 自定义规则，根据组内成员灵活定义，可以覆盖上面 extends 继承的第三方库的规则
  rules: {
    // 禁止使用多余的包
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'vue/multi-word-component-names': 0,
    'vue/attribute-hyphenation': 0,
    'vue/v-on-event-hyphenation': 0,
    'import/newline-after-import': 1,
    'vue/comment-directive': 0
  }
}
