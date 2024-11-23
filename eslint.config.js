import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginTailwind from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,vue}"],
		languageOptions: { globals: globals.browser },
		plugins: {
			tailwindcss: pluginTailwind,
		},
		rules: {
			// General rules
			"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
			"no-console": "warn",
			"no-debugger": "warn",
			"eqeqeq": ["error", "always"],
			"curly": "error",
			"semi": ["error", "always"],
			"quotes": ["error", "double"],
			"no-undef": "error",
			"no-multiple-empty-lines": ["error", { max: 1 }],
			"prefer-const": "error",
			"space-before-function-paren": ["error", "never"],
      
			// Spacing rules
			"space-in-parens": ["error", "never"],
			"space-infix-ops": "error",
			"space-before-blocks": ["error", "always"],
			"keyword-spacing": ["error", { before: true, after: true }],
			"object-curly-spacing": ["error", "always"],
			"array-bracket-spacing": ["error", "never"],
			"key-spacing": ["error", { mode: "strict" }],
			"no-multi-spaces": "error",
      
			// Indentation
			"indent": ["error", "tab"],
			"no-tabs": 0,
      
			// TypeScript-specific rules
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-inferrable-types": "warn",

			// Tailwind CSS plugin rules
			"tailwindcss/classnames-order": "warn", 
			"tailwindcss/no-custom-classname": "off",

			// Tailwind CSS specific at-rules handling
      "tailwindcss/unknownAtRules": ["error", {
        "ignoreAtRules": ["tailwind", "layer", "apply", "variants", "screen"]
      }],
		},
	},
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/essential"],
	{ files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
	{
		files: ["**/*.vue"],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
		rules: {
			// Vue-specific rules
			"vue/require-v-for-key": "off",
			"vue/no-v-html": "off",
			"vue/prop-name-casing": "off",
			"vue/require-default-prop": "off",
			"vue/multi-word-component-names": "off",
			"vue/attribute-hyphenation": "off",
			"vue/no-multiple-template-root": "off",
			"vue/no-mutating-props": "off",
			"vue/no-v-for-template-key": "off",
			"vue/no-v-model-argument": "off",
      
			// Additional rules
			"camelcase": "off",

			"vue/html-indent": ["error", "tab", {
				"attribute": 1, // Align attributes with indentation
				"baseIndent": 1, // Indent starting from the second level
				"closeBracket": 0, // Close bracket on the same level as its tag
				"alignAttributesVertically": true,
				"ignores": [] // You can specify elements to ignore
			}],

			// Vue template spacing rules
			"vue/html-closing-bracket-spacing": ["error", {
				"startTag": "never", // No spaces before `>`
				"endTag": "never", // No spaces before `>`
				"selfClosingTag": "always" // Enforce space before closing `/ >` in self-closing tags
			}],
		},
	},
];