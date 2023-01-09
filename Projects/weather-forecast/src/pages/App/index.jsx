import {useState, useEffect} from "react"
import { GoSearch } from 'react-icons/go'
import { BsThermometerHigh } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'
import { ClimateCard } from "../../components/ClimateCard"
import "./style.css"
import { ForecastCard } from "../../components/ForecastCard"

export function App() {  
  const [inputCity, setInputCity] = useState('')
  const [searchedCity, setSearchedCity] = useState('jucas')
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=4&lang=pt`

  async function getCityWeather() {
    setIsLoading(true)
    try {
      const response = await fetch(API)
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      alert(error);  
    } finally {
      setIsLoading(false)
    }
  }

  function searchCity(event) {
    event.preventDefault()
    setSearchedCity(inputCity)
  }

  useEffect(() => {
    getCityWeather()
  }, [searchedCity])

  return (
    <div className="container">
      <header>
        <h1>Previsão do tempo</h1>
        <form action="">
          <input 
            type="text" 
            onChange={(event) => setInputCity(event.target.value)}
            placeholder='Nome da cidade'
            />
          <GoSearch className='searchButton'/>
          <button onClick={searchCity}>Buscar</button>
        </form>
      </header>

      <main>
        { isLoading ? <ImSpinner2 className="spinner"/> 
        :searchedCity && weatherData && (
          <article>
            <section className="blockCityName">
              <h2>{weatherData.location.name}, {weatherData.location.region}</h2>
              <p>{weatherData.location.country}</p>
            </section>

            <section className="blockCurrentTime">
              <div className="currentTime">
                <div className="blockDegree">
                  <BsThermometerHigh className='iconThermometer'/>
                  <p className="degreeCurrent">{weatherData.current.temp_c}°</p>
                  <p>
                    <span className="degreeMax">{weatherData.forecast.forecastday[0].day.maxtemp_c}°</span>
                    <span className="degreeMin">{weatherData.forecast.forecastday[0].day.mintemp_c}°</span>
                  </p>
                </div>
                <div className="blockSituation">
                  <img src={weatherData.current.condition.icon} alt="icon-weather" className="iconCurrentWeather"/>
                  <div>
                    <p>{weatherData.current.condition.text}</p>
                    <p>Sensação térmica de {weatherData.current.feelslike_c}°</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="containerWeatherCondition">
              <ClimateCard climate='Vento' condition={`${weatherData.current.wind_kph}km/h`}/>
              <ClimateCard climate='Umidade' condition={`${weatherData.current.humidity}%`}/>
              <ClimateCard climate='Chuva' condition={`${weatherData.current.precip_mm}mm`}/>
            </section>

            <section className="containerWeatherForecast">
              <ol>
                {
                  weatherData.forecast.forecastday.map((forecastday, index) => {
                    return (
                      <li  key={index}>
                        <ForecastCard 
                          day={index == 0 ? 'Hoje' 
                          :Intl.DateTimeFormat('pt-BR', { weekday: 'short'})
                          .format(new Date(forecastday.date))
                          } 
                          icon={forecastday.day.condition.icon} 
                          tempMax={forecastday.day.maxtemp_c} 
                          tempMin={forecastday.day.mintemp_c}
                        />
                      </li>
                    )
                  })
                }
              </ol>
            </section>
          </article>
        )}
      </main>
    </div>
    )   
}