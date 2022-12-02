// @How to structure a dynamic website in regards to state, data fetching and rendering

// state(snapshot of the program/data that changes throughout the js code): (Object-Oriented Method) focuses on updating the states,like time, city, temperature, wind,...

// state diagram: query the elements --> fetch data --> rendering the page
// JS is abstraction, function else well, can use function to execute the different behavior without caring about how to every-time.


"use strict";
let timeEl = document.querySelector('.time')

function getTime(){
  timeEl.innerHTML = new Date().toDateString()
}
getTime()
    
let form = document.querySelector('.form');  //input the city
let city;

// Fetch is asynchronous,running in the background

async function getData() {          // fetch data from an open API
  let res = await fetch(                     
    `https://goweather.herokuapp.com/weather/${city}`   
  );                                         
  const data = await res.json();             //switch to json

  const temp = document.querySelector('.temperature');
  const wind = document.querySelector('.wind');
  const description = document.querySelector('.description');
  const name = document.querySelector('.name')

  temp.innerHTML = data.temperature;        
  wind.innerHTML = data.wind;            //use DOM rendering the web page
  description.innerHTML = data.description;
  name.innerHTML = city
  
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  city = this.elements.name.value;
  getData();
});
