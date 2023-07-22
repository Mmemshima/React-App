import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
}

if (ready) {
    return (
        
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="Search" placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                />
                </div>
                <div className="col-3">
                <input type="Submit" value="Search"
                 className="btn
                btn-primary w-100"
                 />
                </div>
                </div>
            </form>
            <h1>Nigeria</h1>
            <ul>
                <li>
                    Wednesday 07:00
                </li>
                <li>
                    Mostly Cloudy
                </li>
            </ul>
        <div className="row mt-3">
            <div className="row-6">
        
         <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Mostly Cloudy" 
          
          />
         
         <span className="temperature">{temperature}</span>
         <span className="unit">℃</span>
            
            
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 16%</li>
                    <li>Humidity: 64% </li>
                    <li>Wind: 13 km/h</li>
                </ul>
            </div>
        </div>
        </div>
        );
} else {
    const apiKey = "e880475b479a67cde91401ae062d7da1";
    let city = "Nigeria";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}$units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}  
}