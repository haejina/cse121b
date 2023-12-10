/* Declare and initialize global variables */
const foodTypeElement = document.getElementById('foodtype');
let koreanFoodsData = [];

/* async displayFoods Function */
const displayFoods = (foods) => {
    foods.forEach((food) => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        const foodHTML = `
            <div class="food-image">
                <img src="Final project/${food.image}" alt="${food.name}">
            </div>
            <div class="food-details">
                <h3>${food.name}</h3>
                <p>Type: ${food.type}</p>
                <p>Spicy: ${food.spicy ? 'Yes' : 'No'}</p>
                <p>Vegetarian: ${food.vegetarian ? 'Yes' : 'No'}</p>
                <p>Seafood: ${food.seafood ? 'Yes' : 'No'}</p>
            </div>
        `;

        foodItem.innerHTML = foodHTML;
        foodTypeElement.appendChild(foodItem);
    });
};

/* async getFoods Function using fetch()*/
const getFoods = async () => {
    let response;
    let foodData;

    do {
        response = await fetch('https://raw.githubusercontent.com/haejina/cse121b/main/Fianl%20project/koreanFood.JSON');

        if (!response.ok) {
            console.error('Network response was not ok. Retrying...');
        } else {
            foodData = await response.json();
            koreanFoodsData = foodData.koreanFoods;
            displayFoods(koreanFoodsData);
        }
    } while (!response.ok);

    return koreanFoodsData;
};

getFoods().then(() => {
    console.log(koreanFoodsData); 
}).catch((error) => {
    console.error('Error:', error);
});

const sortBy = (list) => {
    const selectedProperty = document.querySelector("#sortBy").value;

    list.sort((a, b) => {
        if (a[selectedProperty] < b[selectedProperty]) {
            return -1;
        }
        if (a[selectedProperty] > b[selectedProperty]) {
            return 1;
        }
        return 0;
    });

    foodTypeElement.innerHTML = '';
    displayFoods(list);
};

document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(koreanFoodsData);
});
