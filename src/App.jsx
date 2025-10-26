import { useEffect, useState } from 'react'
import WeatherBox from './component/WeatherBox'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton'
import { ClipLoader } from "react-spinners";
//1.앱이 실행되자마자 현재위치기반의 날씨가 보인다(도시, 섭씨, 화씨)
//2.5개의 버튼(하나는 현재도시, 4개는 전세계 다른 도시)
//3.버튼을 클릭하면 해당 도시의 날씨가 보인다
//4.현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//5.데이터를 들고오는 동안 로딩스피너가 돈다.
function App() {
  const [weather, setWeather] = useState(null)
  const [showLocationMessage, setShowLocationMessage] = useState(true)
  const cities=["fukuoka", "tokyo", "beijing","incheon"]
  const [city, setCity] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [loading, setLoading] = useState(false)
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  
  if (!API_KEY) {
    console.error('API 키가 설정되지 않았습니다. .env 파일에 VITE_WEATHER_API_KEY를 설정해주세요.')
  }
  
  const getCurrentLocation = () => {
    setShowLocationMessage(true)
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setShowLocationMessage(false)
        getWeatherByCurrentLocation(lat, lon)
      },
      (error) => {
        console.log("위치 권한이 거부되었습니다.")
        setShowLocationMessage(true)
      }
    )
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }
  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("")
      setSelectedCity("current")
      getCurrentLocation()
    } else {
      setCity(city)
      setSelectedCity(city)
    }
  }

  useEffect(() => {
    if (city === "") {
      getCurrentLocation()
    } else {
      getWeatherByCity(city)
    }
  }, [city])
  
  return (
    <>
    {loading? (
    <div className="container">
      <ClipLoader
      color="#3498db"
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
    ) : (
      <div className="container">
      
        <h1 className="app-title">Current Weather in Various Cities</h1>
        <WeatherBox weather={weather} showLocationMessage={showLocationMessage} />
         <WeatherButton cities={cities} setCity={handleCityChange} selectedCity={selectedCity} />
      </div>
    )}
    </>
  )
}

export default App
