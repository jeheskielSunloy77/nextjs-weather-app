export class weatherTypes {
  base: string = ""
  clouds: clouds = { all: 0 }
  cod: number = 0
  coord: coord = { lat: 0, lon: 0 }
  dt: number = 0
  id: number = 0
  main: main = {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  }
  name: string = ""
  sys: sys = { type: 0, id: 0, country: "", sunrise: 0, sunset: 0 }
  timezone: number = 0
  visibility: number = 0
  weather: weather[] = [{ id: 0, main: "", description: "", icon: "" }]
  wind: wind = { speed: 0, deg: 0, gust: 0 }
}

interface clouds {
  all: number
}
interface coord {
  lat: number
  lon: number
}
interface main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}
interface sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
interface weather {
  id: number
  main: string
  description: string
  icon: string
}
interface wind {
  speed: number
  deg: number
  gust: number
}
