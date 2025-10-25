import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['**/node_modules/**', '**/.nuxt/**', '**/dist/**', '**/.output/**'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        navigateTo: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useNuxtApp: 'readonly',
        useFetch: 'readonly',
        useAsyncData: 'readonly',
        useHead: 'readonly',
        useState: 'readonly',
        useCookie: 'readonly',
        useRuntimeConfig: 'readonly',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
    },
  },
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        navigateTo: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  prettier,
]
