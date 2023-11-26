/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Haeji Na",
    photo: "images/personal2.jpg",
    favoriteFoods: ['Poke','Kimchi fried rice','Basil sandwich','Chocolate cake'],
    hobbies: ["Cooking","Workout","Hiking"],
    placesLived: []
};
myProfile.placesLived.push(
    {
        place: 'Seoul, South Korea',
        length: '19 year'
    },
    {
        place: 'Monterey, CA',
        length: '3 year'
    },
    {
        place: 'Rexburg, ID',
        length: '6 month'
    }
);

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  