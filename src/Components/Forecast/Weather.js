import React, { useState } from "react";
import Input from "./../Common/Input";

const weatherApi = {
     key: "da28305644bb81f082cf15b0cb69a774",
     base: "http://api.openweathermap.org/data/2.5",
};

const Weather = () => {
     const [query, setQuery] = useState("");
     const [weather, setWeather] = useState({});

     // baraye namayesh etelaat ab-o-hava
     const searchWeather = (event) => {
          if (event.key === "Enter") {
               fetch(
                    `${weatherApi.base}/weather?q=${query}&units=metric&appid=${weatherApi.key}`
               ).then((res) =>
                    res.json().then((resData) => {
                         // xxx:
                         setQuery("");
                         setWeather(resData);
                         console.log(resData);
                    })
               );
          }
     };

     // baraye namayeshe tyarikh
     const dateHandler = (today) => {
          const months = [
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul",
               "Aug",
               "Sep",
               "Oct",
               "Nov",
               "Dec",
          ];
          const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

          let date = today.getDate();
          let year = today.getFullYear();
          let month = months[today.getMonth()];
          let day = days[today.getDay()];

          return `${day}. ${date} ${month}. ${year}`;
     };

     const wc = "card cardWeather shadow";
     return (
          <div
               className={
                    typeof weather.main != "undefined"
                         ? weather.main.temp > 25
                              ? `${wc} warm`
                              : `${wc}`
                         : `${wc}`
               }
          >
               <main className='weatherMain'>
                    <h2>Weather!</h2>
                    <Input
                         config={{
                              type: "text",
                              placeholder: "find your city...",
                         }}
                         value={query}
                         onChange={(e) => setQuery(e.target.value)}
                         onKeyPress={searchWeather}
                    />

                    {typeof weather.main != "undefined" ? (
                         <section className='weatherSection'>
                              <div className='location-box'>
                                   <div className='location'>
                                        {weather.name}, {weather.sys.country}
                                   </div>
                                   <div className='date'>
                                        {dateHandler(new Date())}
                                   </div>
                              </div>
                              <div className='weather-box'>
                                   <div className='temp'>
                                        {Math.round(weather.main.feels_like)}°C
                                   </div>
                                   <div className='weather'>
                                        {weather.weather[0].main}
                                   </div>
                              </div>
                         </section>
                    ) : (
                         <h4 className='nullWeather'>
                              {" "}
                              search your city to see the weather and set up
                              your schedule :)
                         </h4>
                    )}
               </main>
          </div>
     );
};

export default Weather;
