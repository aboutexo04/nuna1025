const WeatherBox = ({weather, showLocationMessage}) => {
    console.log("weather?:",weather)
    
    if (showLocationMessage) {
        return (
            <div className="weather-box">
                <div className="location-message">
                    📍 위치 권한이 필요합니다!
                    <br />
                    <small>브라우저에서 위치 권한을 허용해주세요.</small>
                </div>
            </div>
        )
    }
    
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}°C / {Math.round((weather?.main.temp * 9/5) + 32)}°F</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox