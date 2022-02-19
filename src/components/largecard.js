

const LargeCard = ({data,temp,feels_like, day, imperial, city})=>{

  let dayofweek= new Date(day*1000).toLocaleString("en-us", {weekday: "long"})
  
  return (
    <div className="card-container">
      <p className="city">{city}</p>
      <p className="day">{dayofweek}</p>
      <img src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"} alt={data.weather[0].description}/>
    
      { 
        <div>
            {
              imperial
              
              ?<>
                <p className="temperature">{Math.round(temp)}° F</p> 
                <p className="temperature">Feels like {Math.round(feels_like)}° F</p>
               </>

              :<>
                <p className="temperature">{Math.round((temp - 32) * (5/9))}° C</p> 
                <p className="temperature">Feels like {Math.round((feels_like- 32) * (5/9))}° C</p>
               </>
            }
          </div>
      }
      
      <p className="description">{data.weather[0].description}</p> 

  </div>
  )
}

export default LargeCard;