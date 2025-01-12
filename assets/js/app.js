
"use strict";

import { fetchData, url } from "./api.js";
import * as module from "./module.js";

/**
 * 
 * @param {NodeList} elements 
 * @param {string} evenType 
 * @param {Function} callback 
 */

const addEventOnElements = function (elements, evenType, callback) {
    for (const element of elements) element.addEventListener(evenType, callback);

}

/**
 * 
 * Toggel search in mobile devices
*/

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => {
    searchView.classList.toggle("active");
}
addEventOnElements(searchTogglers, "click", toggleSearch);


/**
 * Search Integration
 */

const searchField = document.querySelector("[data-search-field]");
const searchResult = document.querySelector("[data-search-result]");

let searchTimeout = null;
const searchTimeoutDuration = 500;

searchField.addEventListener("input", function () {
    searchTimeout ?? clearTimeout(searchTimeout);

    if (!searchField.value) {
        searchResult.classList.remove("active");
        searchResult.innerHTML = "";
        searchField.classList.remove("searching");
    } else {
        searchField.classList.add("searching");
    }

    if (searchField.value) {
        searchTimeout = setTimeout(() => {
            fetchData(url.geo(searchField.value), function (locations) {
                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML = `
                <ul class="view-list" data-search-list></ul>
                `;


                const items = [];/**nodelist */

                for (const { name, lat, lon, country, state } of locations) {
                    const searchItem = document.createElement("li");
                    searchItem.classList.add("view-item");

                    searchItem.innerHTML = `
                    <img src="./assets/weather/location_on_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt=""
                                srcset="">
                            <div>
                                <p class="item-title">${name}</p>
                                <p class="label-2 item-subtitle">${state || ""} ${country}</p>
                            </div>

                            <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" data-search-toggler aria-label="${name} weather"></a>
                    `;

                    searchResult.querySelector("[data-search-list]").appendChild(searchItem);
                    items.push(searchItem.querySelector("[data-search-toggler]"));
                }
            });
        }, searchTimeoutDuration);
    }
});

const container = document.querySelector("[data-container]");
const loading = document.querySelector("[data-loading]");

const currentLocationBtn = document.querySelector("[data-current-location-btn]");
const errorContent = document.querySelector("[data-error-content]")

/**
 * render all weather data in html page
 * 
 * @param {number} lat 
 * @param {number} lon 
 */

export const updateWeather = function (lat,lon) {
    loading.style.display = "grid";
    container.style.overflowY = "hidden";
    container.classList.contains("fade-in") ?? container.classList.remove("fade-in");
    errorContent.style.display="none";

    const currentWeatherSection = document.querySelector("[data-current-weather]");
    const highlightSection = document.querySelector("[data-highlights]");
    const hourlySection = document.querySelector("[data-hourly-forecast]");
    const forecastSection = document.querySelector("[data-5-day-forecast]");

    currentWeatherSection.innerHTML="";
    highlightSection.innerHTML="";
    hourlySection.innerHTML="";
    forecastSection.innerHTML="";
}