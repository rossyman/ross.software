import {config, configs as tsConfigs} from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import next from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'
import eslint from '@eslint/js'
import globals from 'globals'

export default config({
  files: ['**/*.{ts,tsx}'],
  plugins: {
    '@next/next': next,
    'react-hooks': reactHooks
  },
  languageOptions: {
    globals: {
      ...globals.browser
    }
  },
  extends: [
    ...tsConfigs.stylistic,
    ...tsConfigs.strict
  ],
  rules: {
    ...next.configs['core-web-vitals'].rules,
    ...next.configs['recommended'].rules,
    ...reactHooks.configs.recommended.rules,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error'
  }
}, {
  files: ['**/*.{ts,tsx,mjs,js}'],
  plugins: {
    '@stylistic': stylistic
  },
  languageOptions: {
    globals: {
      ...globals.node
    }
  },
  rules: {
    ...eslint.configs.recommended.rules,
    '@stylistic/object-curly-spacing': 'error',
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/eol-last': ['error', 'always']
  }
})
