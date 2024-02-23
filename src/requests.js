"use strict";
let planetsArray = [];
let totalPlanets = 0;

async function getPlanets() {
  return new Promise((response, reject) => {
    let req = fetch("https://swapi.dev/api/planets");
    response(req);
  });
}

getPlanets()
  .then((data) => {
    if (data.ok) {
      return data.json();
    } else {
      throw new Error(`Cannot get data request error: ${data.status}`);
    }
  })
  .then((planets) => {
    planetsArray.push(planets.results);
    totalPlanets = planets.count;
    console.log(planetsArray, "total planets:", totalPlanets);
  })
  .catch((error) => {
    console.log(`errorsito: ${error}: `);
  });
