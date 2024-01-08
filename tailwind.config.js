/** @type {import("tailwindcss").Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
	"./src/input.css",
	"./index.html",
	"./script.js"
]

export const theme = {

	fontFamily: {
		sans: ['"Inter var", sans-serif', _fontFamily.sans],
	},

	screens: {
		"sm": "640px",
		"md": "768px",
		"lg": "1024px"
	},

	extend: {},
}

export const plugins = []
