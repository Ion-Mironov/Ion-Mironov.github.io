/** @type {import('tailwindcss').Config} */

export const content = [
	"./src/input.css",
	"./index.html",
	"./script.js"
]

export const theme = {
	screens: {
		'lg': '1024px'
	},
	extend: {},
}

export const plugins = [
	require('@tailwindcss/typography')
]
