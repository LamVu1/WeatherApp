import './App.css';
import { useState, useEffect } from 'react';

//COMPONENTS
import Weather from './components/weather';

function App() {
  let [city, setCity] = useState('')
  let [searchCity, setSearchCity] = useState('')
  let [weather, setWeather] = useState({})
  let [imperial, setImperial] = useState(true)

  useEffect( () => {
      console.log('onMount')

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.7749&lon=-122.4194&units=imperial&exclude=minutely,hourly&appid=69c8aca93b6b60017893a96205da9c97`)
      .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
      })
      .then((data) =>{
          setWeather(data)
      })
      .catch(err => console.log(err));
  }, [])

  const fetchWeather = async (e) => {
      e.preventDefault();
      console.log('fetch');

      let lon;
      let lat;
      await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=69c8aca93b6b60017893a96205da9c97`)
        .then(resp => resp.json())
        .then(data =>{
            lon=data[0].lon
            lat=data[0].lat
        })
        .catch(err => {
            console.log(err)
            alert('Please enter valid city')
        });

      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=69c8aca93b6b60017893a96205da9c97`)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
            setWeather(data)
        })
        .catch(err => {
            console.log(err)
            alert('Please enter valid city')
        });

      setSearchCity(city)
      setCity('')
  }

  const handleUnit = (e)=>{
    if(e.target.classList[0]==='fahrenheit'){
      e.target.classList.toggle('selected')
      let c = document.getElementsByClassName('celsius')[0]
      c.classList.toggle('selected')
      setImperial(true)
    }else{
       e.target.classList.toggle('selected')
      let f = document.getElementsByClassName('fahrenheit')[0]
      f.classList.toggle('selected')
      setImperial(false)
    }
  }

  return (
    <div className="App">

      <form className="form" onSubmit={fetchWeather}>
      <h1>Simple Weather App</h1>

          <input type="text" 
              onChange={(e)=>setCity(e.target.value)} 
              placeholder="Search for a city" 
              value={city}
              className="form-input"
          />
          <button className='form-button'>Search</button>

      </form>
      <div className='btn-container'>
         <button className='celsius unit-btn' onClick={(e)=>handleUnit(e)}>
         °C
      </button>
     <button className='fahrenheit unit-btn selected' onClick={(e)=>handleUnit(e)}>
         °F
      </button>
      </div>
     
      {

        Object.keys(weather).length !== 0 && 
        <Weather data={weather} city={searchCity} imperial={imperial}/>
      
      }

    </div>
  );
}

export default App;
