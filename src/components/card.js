

const Weather = ({data,temp,feels_like, day, max, min, imperial, border})=>{

  let dayofweek= new Date(day*1000).toLocaleString("en-us", {weekday: "long"})
  
  return (
    <div className="card-container">
      
      <p className="day">{dayofweek}</p>
      <img src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"} alt={data.weather[0].description}/>
    
      { 
        temp!==undefined
        
        ? <div>
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

        : <div>
            {
              imperial
               
              ?<>
                <p className="temperature">{Math.round(max)}° F</p>
                <p className="temperature">{Math.round(min)}° F</p>
              </>
            
              :<>
                <p className="temperature">{Math.round((max- 32) * (5/9))}° C</p>
                <p className="temperature">{Math.round((min- 32) * (5/9))}° C</p>
              </>
            }
          </div>
      }
      
      <p className="description">{data.weather[0].description}</p> 

  </div>
  )
}

export default Weather;