import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export default ts.config(js.configs.recommended, ...ts.configs.recommended, ...eslintPluginVue.configs['flat/recommended'], {
	files: ['*.vue', '**/*.vue'],
	languageOptions: {
		parserOptions: {
			parser: '@typescript-eslint/parser',
		},
	},
	rules: {
		'@stylistic/indent': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'arrow-parens': 'off',
		'no-case-declarations': 'off',
		'no-console': 'warn',
		'no-duplicate-imports': [
			'error',
			{
				includeExports: true,
			},
		],
		'no-unsafe-optional-chaining': 'off',
		'no-unused-vars': 'warn',
		'quote-props': 'off',
		'vue/attributes-order': [
			'error',
			{
				alphabetical: false,
				order: [
					'EVENTS',
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'CONTENT',
					'OTHER_ATTR',
				],
			},
		],
		'vue/html-indent': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
				},
				math: 'always',
				svg: 'always',
			},
		],
		'vue/max-attributes-per-line': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-unused-refs': 'error',
		'vue/no-v-for-template-key': 'warn',
		'vue/require-v-for-key': 'off',
		'vue/require-default-prop': 'off',
		'vue/valid-v-for': 'off',
		'vue/valid-v-slot': 'off',
	},
})
