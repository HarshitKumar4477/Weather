"use strict";

const apiKey = "206a9f2144776674277ec4a29a33bcb4";

/**
 * Fetch data from server 
 * @param {string} URL APL url
 * @param {Function} callback callback
 */



export const fetchData = (URL , callback)=>{
    fetch(`${URL}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => callback(data));

}

export const url = {
    currentWeather(lat,lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    }
    ,
    forecast(lat,lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    }
    ,
    airPollution(lat , lon){
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}$&units=metric`
    }
    ,
    reverseGeo(lat , lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    /**
     * 
     * @param {string} query Search query e.g:"London";
     */

    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}