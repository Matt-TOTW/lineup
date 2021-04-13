import { DefaultTheme } from "styled-components"

const darkTheme: DefaultTheme = {
	colors: {
		background: "#000",
		main: "#a8d0e6",
		secondary: "#f76c6c",
		link: "#fff",
		text: {
			main: "#fff",
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

export { darkTheme }
