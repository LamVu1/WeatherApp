

const Card = ({data, day, max, min, imperial})=>{

  let dayofweek= new Date(day*1000).toLocaleString("en-us", {weekday: "long"})
  
  return (
    <div className="card-container">
      
      <p className="day">{dayofweek}</p>
      <img src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"} alt={data.weather[0].description}/>
    
      { 

        <div>
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

export default Card;