import { useState } from "react"
import Image from "next/image"
import Navbar from "../components/Navbar"

export default function Home() {
	const [weather, setWeather] = useState()
	console.log(weather)
	const dateBuilder = d => {
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		]
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		]

		let day = days[d.getDay()]
		let date = d.getDate()
		let month = months[d.getMonth()]
		let year = d.getFullYear()

		return `${day}, ${date} ${month} ${year}`
	}
	function getCurrentStatus(status) {
		if (status === "Clouds") {
			const cloudIntensity =
				weather.clouds.all > 75 ? "Very Cloudy" : "Cloudy"
			return cloudIntensity
		} else if (status === "Clear") {
			return "Sunny"
		} else {
			return status
		}
	}
	function getWeatherIcon(status) {
		const atmosphere = [
			"Mist",
			"Smoke",
			"Haze",
			"Dust",
			"Fog",
			"Sand",
			"Dust",
			"Ash",
			"Squall",
			"Tornado",
		]
		return atmosphere.includes(status) ? "Atmosphere" : status
	}
	function getDescription(status) {
		if (status === "Clear") {
			return "Its sunny today, go outside and enjoy the weather."
		} else if (status === "Clouds") {
			return "Don't forget to bring your umbrella today."
		} else if (status === "Rain") {
			return "Careful when go out today, it might rain"
		} else if (status === "Thunderstorm") {
			return "Better stay inside, the lightning could come today"
		} else if (status === "Snow") {
			return "Bring your coat if you dont want to get the cold"
		} else if (status === "Drizzle") {
			return "Don't let a little rain ruin your day"
		} else {
			return "Beware of unpredictable weather"
		}
	}
	return (
		<>
			<Navbar setWeather={setWeather} />
			<div
				className={
					weather
						? `${getWeatherIcon(
								weather.weather[0].main
						  )} bg-cover bg-no-repeat h-screen`
						: "bg-[url('https://img.freepik.com/free-vector/multicolored-abstract-background_23-2148463672.jpg?w=2000')] bg-cover bg-no-repeat h-screen"
				}
			>
				<div className="myContainer h-full relative">
					<div className="flex p-4 sm:p-10 rounded shadow-xl bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:max-w-md max-h-fit">
						{weather ? (
							<>
								<div className=" w-1/2">
									<h1 className="text-high text-2xl">
										{weather.name},{weather.sys.country}
									</h1>
									<p className="text-medium">
										{dateBuilder(new Date())}
									</p>
									<p className="text-medium text-xl">
										{getCurrentStatus(weather.weather[0].main)}
									</p>
									<p className="text-low">
										{getDescription(weather.weather[0].main)}
									</p>
								</div>
								<div className="flex flex-col items-end w-1/2 text-sm text-medium">
									<div className="mb-1 flex items-center">
										<Image
											src={`/assets/icons/${getWeatherIcon(
												weather.weather[0].main
											)}.png`}
											width="70px"
											height="70px"
										></Image>
										<span className="text-4xl flex text-high ml-2">
											{Math.round(weather.main.temp)}
											<span className="text-base">°C</span>
										</span>
									</div>
									<p>
										Feels Like: {Math.round(weather.main.feels_like)}
										°C
									</p>
									<p>Humidity: {weather.main.humidity}%</p>
									<p>Wind: {weather.wind.speed} m/s</p>
								</div>
							</>
						) : (
							<h1 className="text-4xl font-bold text-gray-200 m-auto drop-shadow-xl">
								Where Are You?
							</h1>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
