import { Button } from 'react-bootstrap';


function WeatherButton({cities, setCity}) {
  return (
    <div className="weather-button">
      <Button variant="warning" onClick={() => setCity("current")}>현재위치</Button>
      {cities.map((item, index) => (
        <Button 
          key={index} 
          variant="warning" 
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton