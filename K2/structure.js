// @How to structure files and functions in a JS project,
// create .js file to link to the html file, "use strict",
// use js to query and modify the element of DOM, and render the webpage. 
// use suitable variable name and function name,
// notice the variable scope and avoid side effect,
// use comments to explain or remind where needed,
// use 'console.log' or 'return' to check the function and code is valid or not,
// Split codes out to smaller files to make the code more explicit and readable,
// game codes be separates into:index.js/attackBox.js/player.js/sprite.js


"use strict";
let timeEl = document.querySelector('.time')

function getTime(){
  timeEl.innerHTML = new Date().toDateString()
}
getTime()
    
let form = document.querySelector('.form');  //which city 
let city;


async function getData() {                   // where have the weather data
  let res = await fetch(
    `https://goweather.herokuapp.com/weather/${city}`  
  );
  const data = await res.json();     

  const temp = document.querySelector('.temperature');
  const wind = document.querySelector('.wind');
  const description = document.querySelector('.description');
  const name = document.querySelector('.name')

  temp.innerHTML = data.temperature;        //rendering:update the DOM
  wind.innerHTML = data.wind;
  description.innerHTML = data.description;
  name.innerHTML = city
  
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  city = this.elements.name.value;
  getData();
});
