import { DefaultTheme } from "styled-components"

const lightTheme: DefaultTheme = {
	colors: {
		background: "#fff",
		main: "#5da2d5",
		secondary: "#90ccf4",
		link: "#314455",
		text: {
			main: "#272727",
		},
	},
	font: {
		main: "Arial, sans-serif",
		secondary: "Times New Roman",
	},
	spacing: {
		desktopContainer: {
			max: "1024px",
			min: "420px",
		},
		small: "8px",
		medium: "16px",
		large: "24px",
		xl: "32px",
		xxl: "40px",
	},
}

export { lightTheme }
