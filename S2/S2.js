// ● Using built-in features for DOM manipulation: createElement(), append(), innerHTML(), add() , remove()…
// Add event listener events, toDateString() on dates

// ● Using an API (Application Programmable Interface) to fetch data, extract relevant data and visualize it


// There are different ways to modify the DOM: can query any CSS selector
document.querySelector('#myId'；
document.getElementById('myId')；

// ● different ways of dealing with asynchronicity and data fetching(show two files- attackBox+weather)

fetch('https://api.openweathermap.org/...')           //return a promise
.then(function(res) {
console.log(res);                                 
// });

// EXPLICITLY WAITING : Using async/await

async function getData() {
const res = await fetch('...');
const data = await res.json();
console.log(data);
}
getData();

// ● Using browser storage to persist data (show todo-list)


// ● Using branches and pull requests in GitHub (show github)


// ● different API designs and their pros and cons
// open APIs(free, Public), partner APIs(greater control), internal APIs(private), and composite APIs(combine 2 or more).
// ● different Git branching strategies
// •	GitFlow. (Master, Develop, Feature, Release)
// •	GitHub Flow.(smaller group, no release)
// •	GitLab Flow.
// •	Trunk-based development.
