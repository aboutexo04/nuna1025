const WeatherBox = ({weather, showLocationMessage}) => {
    console.log("weather?:",weather)
    
    if (showLocationMessage) {
        return (
            <div className="weather-box">
                <div style={{color: '#3498db', fontSize: '18px', fontWeight: '600'}}>
                    📍 날씨를 확인하시려면 위치권한이 허용되었는지 확인해주세요!
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