/** @type {import('tailwindcss').Config} */

import { black as _black, white as _white, slate, emerald, violet, amber, fuchsia } from 'tailwindcss/colors'

export const content = [
	"./src/input.css",
	"./index.html",
	"./script.js"
]

export const theme = {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		black: _black,
		white: _white,
		gray: slate,
		green: emerald,
		purple: violet,
		yellow: amber,
		pink: fuchsia,
	},

	screens: {
		'lg': '1024px'
	},
	
	extend: {},
}

export const plugins = [
	require('@tailwindcss/typography')
]
