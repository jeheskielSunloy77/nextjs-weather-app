import "../styles/globals.css"
import Head from "next/head"
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
					rel="stylesheet"
				/>
				<title>Weather App</title>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
