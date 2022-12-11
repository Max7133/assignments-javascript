/*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

const printNum = () => {
  for (let i = 0; i <= 100; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

printNum();

/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

let myArr = [
  "12-24-2014",
  "09-2022-23",
  "12-30-2021",
  "08-02-2021",
  "07-15-2018",
  "2019-12-14",
  "2022-14-12",
];

const fixDate = (array) => {
  return array.map((date) => {
    const fixArr = date.split("-").sort((a, b) => a - b);
    const finalArr = [fixArr[1], fixArr[0], fixArr[2]].join("-");
    return finalArr;
  });
};

let newArr = fixDate(myArr);
console.log(newArr); // ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022']
/*
3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/
const dateFrom = new Date(500000);
const dateTo = new Date(1000000000);
const counter = (from, to) => {
  /* provide your code here */
  from = dateTo;
  to = dateFrom;
  const difference = Math.abs(from - to) / 1000;
  const days = Math.floor(difference / 86400);
  const hours = Math.floor(difference / 3600) % 24;
  const minutes = Math.floor(difference / 60) % 60;
  const seconds = difference % 60;
  return `${days} days - ${hours} hours - ${minutes} minutes - ${seconds} seconds`;
};
const timer = counter();
console.log(timer); // 11 days - 13 hours - 38 minutes - 20 seconds

/* 
4. Check the url and read documentation: https://restcountries.com
- Write a function to get all countries, sorted in alphabetical order
- Write a function to find one country based on the search input
The data fetched from url should be displayed in index.html.
*/
const searchBtn = document.getElementById("search-btn");
const countryInp = document.getElementById("input");

const getAllCountries = () => {
  searchBtn.addEventListener("click", async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) throw new Error("Problem getting country");
    const data = await res.json();
    data.forEach((country) => {
      data.sort(function (a, b) {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${country.flags.png}" class="flag-img">
        <h2>${country.name.common}</h2>
        <div>
            <h4>Capital:</h4>
            <span>${country.capital}</span>
         </div>
         <div>
            <h4>Continent:</h4>
            <span>${country.continents[0]}</span>
         </div>
         <div>
            <h4>Population:</h4>
            <span>${country.population}</span>
         </div>
         <hr>
        `;
      result.appendChild(div);
    });
  });
};

const getSingleCountry = () => {
  searchBtn.addEventListener("click", async () => {
    let countryName = countryInp.value;
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    if (countryName.length == 0) {
      result.innerHTML = `<h3>Input field can't be empty!</h3>`;
    } else {
      result.innerHTML = `<h3>Please enter a valid country name!</h3>`;
    }
    const data = await res.json();
    result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
         <div>
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
         </div>
         <div>
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
         </div>
         <div>
            <h4>Population:</h4>
            <span>${data[0].population}</span>
         </div>
         <div>
            <h4>Currency:</h4>
            <span>${
              data[0].currencies[Object.keys(data[0].currencies)].name
            } - ${Object.keys(data[0].currencies)[0]}</span>
         </div>
         <div>
            <h4>Languages:</h4>
            <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span>
         </div>
       `;
  });
};

getSingleCountry();
//getAllCountries();

/*
5. Provide logic for function generateNewFolderName, which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

const generateNewFolderName = (existingFolders) => {
  /*  provide your code here */
  // First way
  if (existingFolders.length != 0) {
    existingFolders = folder.push(`New Folder (${[folder.length]})`);
    return;
  }
  folder.push("New Folder");
  // Second way
  /*   existingFolders = folder.push(`New Folder (${[folder.length]})`);
  folder.splice(folder.indexOf[0], 1, "New Folder"); */
};

let folder = [];
generateNewFolderName(folder);
generateNewFolderName(folder);
generateNewFolderName(folder);
generateNewFolderName(folder);
console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']
