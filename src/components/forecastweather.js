const ForecastWeather = ({daily, imperialUnits})=>{

  return <>
  {/* {
    daily.map((day)=>{
      
    })
  } */}
  <p>{name}</p>
    <p>{Math.round(main.temp)}°{imperialUnits ? 'F' : 'C'}</p>
    <p>Feels like {Math.round(main.feels_like)}°{imperialUnits ? 'F' : 'C'}</p>
    <img src={"http://openweathermap.org/img/w/" + weather[0].icon + ".png"}/>
    <p>{weather[0].description}</p>
  </>
}

export default ForecastWeather;