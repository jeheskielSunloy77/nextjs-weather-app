import Image from "next/image"
import Navbar from "../components/Navbar"
const api = {
	key: "5dbf603555d90f109af24418ed9a1281",
	base: "https://api.openweathermap.org/data/2.5/",
}
export default function Home() {
	return (
		<>
			<Navbar />
			<div className="bg-[url('https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat h-screen">
				<div className="myContainer h-full relative">
					<div className="flex p-4 sm:p-10 rounded shadow-xl bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:max-w-md max-h-fit">
						<div className=" w-1/2">
							<h1 className="text-high text-2xl">Salatiga,Indonesia</h1>
							<p className="text-medium text-xl capitalize">SUNNY</p>
							<p className="text-low">
								Reprehenderit aliquip labore est proident aliquip sint
							</p>
						</div>
						<div className="flex flex-col items-end w-1/2 text-sm text-medium">
							<div className="mb-1 flex items-center">
								<Image
									src="/assets/icons/sunny.png"
									width="70px"
									height="70px"
								></Image>
								<span className="text-4xl flex text-high ml-2">
									21 <span className="text-base">°C</span>
								</span>
							</div>
							<p>Precipitation: 6% </p>
							<p>Humidity: 61%</p>
							<p>Wind: 11 km/h</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
