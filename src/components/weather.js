//COMPONENTS
import Card from './card';


const Weather = ({ data, city, imperial })=>{

  let { current } = data;

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

  const formattedCity = (city) => city.split(' ').map( word=> capitalize(word)).join(' ')

  return (
    <>
        { 

            city.length===0 
            
              ? <p>San Francisco</p> 

              : <p>{formattedCity(city)}</p>

        }

        <div>
            <h1>Current</h1>
            <Card key={current.dt} 
                  data={current} 
                  day={current.dt} 
                  temp={current.temp} 
                  feels_like={current.feels_like} 
                  imperial={imperial}
            />
        </div>

        <div style={{display: 'flex', }}>
          {
            data.daily.slice(0,-1).map(day=>{
              return <Card  key={day.dt} 
                            day={day.dt} 
                            data={day} 
                            max={day.temp.max} 
                            min={day.temp.min} 
                            imperial={imperial}
                      />
            })
          }
        </div>
    </>
  )
}

export default Weather;