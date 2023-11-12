/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Haeji Na";

const currentYear = new Date().getFullYear();
console.log(currentYear);

/* Step 3 - Element Variables */
const profilePicture = "images/personal2.jpg";
console.log(profilePicture);

/* Step 4 - Adding Content */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('img[src="images/personal2.jpg"]');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;


imageElement.setAttribute('alt', `Profile image of ${fullName}`);

const favoriteFoods = ["Poke", "kimchi fried rice", "chocolate cake", "soda"];
foodElement.textContent = favoriteFoods.join(', ');

const newFavoriteFood = "Sweet pork Burrito";
favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;
