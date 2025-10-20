import { Button } from 'react-bootstrap';


function WeatherButton({getCurrentLocation, getWeatherByCity}) {
  return (
    <div className="weather-button">
      <Button variant="warning" onClick={getCurrentLocation}>현재위치</Button>
      <Button variant="warning" onClick={()=>getWeatherByCity("fukuoka")}>후쿠오카</Button>
      <Button variant="warning" onClick={()=>getWeatherByCity("tokyo")}>도쿄</Button>
      <Button variant="warning" onClick={()=>getWeatherByCity("Incheon")}>인천공항</Button>

    </div>
  )
}

export default WeatherButton