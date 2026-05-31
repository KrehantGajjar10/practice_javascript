/*

// What will happen if coordinates is missing? How can you prevent errors?

// Through optional chaining

const locations = {
  city: "Bhopal",
  coordinate: {
    lat: 23.2,
    lng: 77.4,
  },
};
console.log(locations?.coordinates?.lat);

// Destructure the city and lat from the location object above.

let {city} = locations;
let {lat} = locations.coordinate;
console.log(city);
console.log(lat);

*/