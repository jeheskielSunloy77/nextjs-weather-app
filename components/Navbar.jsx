import { useState } from "react"
const api = {
	key: "5dbf603555d90f109af24418ed9a1281",
	base: "https://api.openweathermap.org/data/2.5/",
}
export default function Navbar({ setWeather }) {
	const [query, setQuery] = useState("")
	function search(e) {
		e.preventDefault()
		fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
			.then(res => res.json())
			.then(result => {
				if (result.cod === "404") {
					setQuery("")
					alert(result.message)
				} else {
					setWeather(result)
					console.log(result)
				}
			})
	}
	return (
		<nav className="fixed top-0 w-full z-20 px-2 sm:px-4 py-2.5">
			<div className="container flex flex-wrap justify-center items-center mx-auto">
				<form onSubmit={e => search(e)} className="w-full sm:w-1/2">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
					>
						Search
					</label>
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-300 dark:text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							className="block p-4 pl-10 w-full text-sm text-white bg-white bg-opacity-10 backdrop-blur-md shadow-2xl drop-shadow-lg rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-300 dark:placeholder-gray-600 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder-gray-100
							placeholder="Search htmlFor location..."
							required=""
							onChange={e => setQuery(e.target.value)}
							value={query}
						/>
						<button
							type="submit"
							className="text-gray-300 absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 bg-opacity-70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</nav>
	)
}
