import { useEffect, useState } from 'react'
import WeatherBox from './component/WeatherBox'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton'
//1.앱이 실행되자마자 현재위치기반의 날씨가 보인다(도시, 섭씨, 화씨)
//2.5개의 버튼(하나는 현재도시, 4개는 전세계 다른 도시)
//3.버튼을 클릭하면 해당 도시의 날씨가 보인다
//4.현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//5.데이터를 들고오는 동안 로딩스피너가 돈다.
function App() {
  const [weather, setWeather] = useState(null)
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }
  const getCityLocation = async (city) => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  
  if (!API_KEY) {
    console.error('API 키가 설정되지 않았습니다. .env 파일에 VITE_WEATHER_API_KEY를 설정해주세요.')
  }
  
  const getWeatherByCurrentLocation = async (lat, lon) => {
     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }
  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }
  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton getCurrentLocation={getCurrentLocation} getWeatherByCity={getWeatherByCity} />
      </div>
    </>
  )
}

export default App
