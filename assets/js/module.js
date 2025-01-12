


'use strict';

export const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemeber",
    "October",
    "Novemeber",
    "Decemeber"
] ;


/**
 * 
 * @param {number} dateUnix 
 * @param {number} timeZone 
 * @returns {string} Date String formate:"Sunday 10,jan"
 */
export const getDate = (dateUnix,timeZone)=>{
    const date = new Date((dateUnix + timeZone)*1000);
    const weekDay = weekDays[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDay} ${date.getUTCDate()} , ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix 
 * @param {number} TimeZone 
 * @returns {string} 
 */
export const getTime = (timeUnix,timeZone)=>{
    const date = new Date((timeUnix + timeZone)*1000);
    const hours = date.getUTCHours();
    const mins = date.getUTCMinutes();
    const sec = date.getUTCSeconds();
    const period = hours >= 12 ? "PM" : "AM"

    return `${hours % 12 || 12}:${mins} ${period}`;
}

/**
 * 
 * @param {number} timeUnix 
 * @param {number} timeZone 
 * @returns {string}
 */
export const getHours = (timeUnix,timeZone)=>{
    const date = new Date((timeUnix + timeZone)*1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM"

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps 
 * @returns {number}
 */
export const mps_to_kmh = mps =>{
    const mph = mps * 3600;
    return mph/1000;
}


export const aqiText = {
    1:{
        level:"Good",
        message:"Air quality is considered satisfactory , and air pollution pose little or no risk"
    
    },
    2:{
        level:"Fair",
        message:"Air quality is acceptable;however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3:{
        level:"Moderate",
        message:"Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4:{
        level:"Poor",
        message:"Everyone may begin to experience health effects; members of senitve groups may experience more serious health effects."
    },
    5:{
        level:"Very Poor",
        message:"Health warnings of emergency conditions. The enire population is more likely to be affected."   
     }
}


