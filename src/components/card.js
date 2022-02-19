

const Weather = ({data,temp,feels_like, day, max, min, imperial})=>{

  let dayofweek= new Date(day*1000).toLocaleString("en-us", {weekday: "long"})
  
  return (
    <div>
      
      <p>{dayofweek}</p>
      <img src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"} alt={data.weather[0].description}/>
    
      { 
        temp!==undefined
        
        ? <div>
            {
              imperial
              
              ?<>
                <p>{Math.round(temp)}° F</p> 
                <p>Feels like {Math.round(feels_like)}° F</p>
               </>

              :<>
                <p>{Math.round((temp - 32) * (5/9))}° C</p> 
                <p>Feels like {Math.round((feels_like- 32) * (5/9))}° C</p>
               </>
            }
          </div>

        : <div>
            {
              imperial
               
              ?<>
                <p>{Math.round(max)}° F</p>
                <p>{Math.round(min)}° F</p>
              </>
            
              :<>
                <p>{Math.round((max- 32) * (5/9))}° C</p>
                <p>{Math.round((min- 32) * (5/9))}° C</p>
              </>
            }
          </div>
      }
      
      <p>{data.weather[0].description}</p> 

  </div>
  )
}

export default Weather;