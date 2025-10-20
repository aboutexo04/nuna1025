import { Button } from 'react-bootstrap';


function WeatherButton({cities, setCity, selectedCity}) {
  return (
    <div className="weather-button">
      <Button 
        variant="warning" 
        onClick={() => setCity("current")}
        className={selectedCity === "current" ? "btn-selected" : ""}
      >
        현재위치
      </Button>
      {cities.map((item, index) => (
        <Button 
          key={index} 
          variant="warning" 
          onClick={() => setCity(item)}
          className={selectedCity === item ? "btn-selected" : ""}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton