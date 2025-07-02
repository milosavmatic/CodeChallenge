import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: { perfectionist, '@stylistic': stylistic } },
  {
    ignores: [
      'external/**',
      'src/generated/**',
      'node_modules/**',
      'src/shared/graphql/urql-plugin.js',
      'next.config.js',
    ],
  },
  {
    settings: {
      react: {
        version: 'detect', // Add this line to specify the React version
      },
    },
    rules: {
      // Customize your rules here
      'arrow-spacing': ['warn', { before: true, after: true }],
      'array-bracket-spacing': ['warn', 'never'],
      'block-spacing': ['warn', 'always'],
      'comma-spacing': ['warn', { before: false, after: true }],
      'computed-property-spacing': ['warn', 'never'],
      'func-call-spacing': ['warn', 'never'],
      'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
      'keyword-spacing': ['warn', { before: true, after: true }],
      'no-multi-spaces': ['warn'],
      'no-trailing-spaces': ['warn', { skipBlankLines: true }],
      'object-curly-spacing': ['warn', 'always'],
      'semi-spacing': ['warn', { before: false, after: true }],
      'space-before-blocks': ['warn', 'always'],
      'space-before-function-paren': ['warn', 'never'],
      'space-in-parens': ['warn', 'never'],
      'space-infix-ops': ['warn'],
      'space-unary-ops': ['warn', { words: true, nonwords: false }],
      'template-tag-spacing': ['warn', 'never'],
      'keyword-spacing': ['warn', { before: true, after: true }],
      'spaced-comment': ['warn', 'always', { exceptions: ['-', '+'] }],
      'object-curly-spacing': [
        'warn',
        'always',
        { arraysInObjects: false, objectsInObjects: false },
      ],
      indent: [1, 2, { SwitchCase: 1 }],
      semi: [1, 'never'],
      quotes: [1, 'single'],
      'no-multiple-empty-lines': [1, { max: 1, maxEOF: 1 }],
      'no-fallthrough': [0],
      eqeqeq: [0],
      'max-len': [
        1,
        {
          code: 300,
          comments: 300,
          ignoreStrings: true,
        },
      ],
      'space-infix-ops': ['error', { int32Hint: false }],
      'no-unused-vars': ['off', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
      // 'arrow-body-style': 'error',
      // 'brace-style': [
      //   'error',
      //   '1tbs'
      // ],

      // JSx
      'jsx-quotes': [1, 'prefer-double'],

      // Typescript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
        },
      ],
      '@typescript-eslint/no-empty-object-type': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/ban-ts-comment': ['off'],
      '@typescript-eslint/unified-signatures': 'error',
      // '@typescript-eslint/type-annotation-spacing': ['warn', { before: false, after: true }],

      '@stylistic/type-annotation-spacing': [
        'error',
        {
          before: true,
          after: true,
          overrides: {
            colon: {
              before: false,
              after: true,
            },
          },
        },
      ],
      '@stylistic/type-named-tuple-spacing': ['error'],
      '@stylistic/type-generic-spacing': ['error'],

      'react-hooks/exhaustive-deps': [0, 0],
      // react
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/prop-types': ['off'],
      'react/no-unescaped-entities': ['off'],
      'react/jsx-curly-spacing': ['warn', { when: 'never', children: true }],
      'react/react-in-jsx-scope': [0],

      // Enforce no vertical space in imports
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
          internalPattern: ['^~/'],
          newlinesBetween: 'never',
          maxLineLength: undefined,
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
            'side-effect',
          ],
          customGroups: { type: {}, value: {} },
          environment: 'node',
        },
      ],
    },
  },
]
