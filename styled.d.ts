// This is the types declerations file for the theme

import "styled-components"

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			background: string
			main: string
			secondary: string
			link: string
			text: {
				main: string
			}
		}
		font: {
			main: string
			secondary: string
		}
		spacing: {
			desktopContainer: {
				max: string
				min: string
			}
			small: string
			medium: string
			large: string
			xl: string
			xxl: string
		}
	}
}
