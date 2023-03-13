console.log(document);
const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".rating-display");
console.log(value);

const button = document.querySelector("button");
console.log(button);



// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");
// Iterate over the list and print each one
// for (let element of heading3List.values()) {
//   console.log(element);
// }
//or 
for(let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
}


const divRatingsList = document.querySelectorAll(".rating-display");
for (let element of divRatingsList.values()) {
   console.log(element);
}

for(let i = 0; i < divRatingsList.length; i++) {
    const element = divRatingsList[i];
    console.log(element);
}

//module 20.4
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
  }

  const ratings = document.querySelectorAll(".rating-display .value");
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

  const parks = document.querySelectorAll(".park-display");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");
  const header = document.querySelector("header");
  header.appendChild(newElement);
