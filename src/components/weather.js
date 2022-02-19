//COMPONENTS
import Card from './card';


const Weather = ({ data, city, imperial })=>{

  let { current } = data;

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

  const formattedCity = (city) => city.split(' ').map( word=> capitalize(word)).join(' ')

  return (
    <div className='weather-container'>
        

        <div className='current-container'>
            <h1>Current</h1>
            { 

            city.length===0 
            
              ? <p className='city'>San Francisco</p> 

              : <p className='city'>{formattedCity(city)}</p>

        }
            <Card key={current.dt} 
                  data={current} 
                  day={current.dt} 
                  temp={current.temp} 
                  feels_like={current.feels_like} 
                  imperial={imperial}
            />
        </div>

        <div className='week-container'>
          {
            data.daily.slice(0,-1).map(day=>{
              return <Card  key={day.dt} 
                            day={day.dt} 
                            data={day} 
                            max={day.temp.max} 
                            min={day.temp.min} 
                            imperial={imperial}
                            border={true}
                      />
            })
          }
        </div>
    </div>
  )
}

export default Weather;