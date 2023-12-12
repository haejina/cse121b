const foodTypeElement = document.getElementById('foodtype');
let koreanFoodsData = [];

const displayFoods = (foods) => {
    foods.forEach((food) => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');

        const foodHTML = `
            <div class="food-image">
                <img src="${food.image}" alt="${food.name}">
            </div>
        `;

        foodItem.innerHTML = foodHTML;
        foodTypeElement.appendChild(foodItem);
    });
};

const getFoods = async () => {
    let response;
    let foodData;

    do {
        response = await fetch('https://raw.githubusercontent.com/haejina/cse121b/main/Fianlproject/koreanFood.JSON');

        if (!response.ok) {
            console.error('Network response was not ok. Retrying...');
        } else {
            foodData = await response.json();
            koreanFoodsData = foodData.koreanFoods.map(food => ({
                ...food,
                spicy: food.spicy === 'true', 
                vegetarian: food.vegetarian === 'true', 
                seafood: food.seafood === 'true' 
            }));
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

    if (selectedProperty === 'seafood') {
        const seafoodList = list.filter(item => item.seafood); 
        foodTypeElement.innerHTML = '';
        displayFoods(seafoodList);
    } else {
        list.sort((a, b) => {
            if (selectedProperty === 'spicy') {
                return b.spicy - a.spicy;
            } else if (selectedProperty === 'vegetarian') {
                return b.vegetarian - a.vegetarian;
            } else {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }
        });

        foodTypeElement.innerHTML = '';
        displayFoods(list); 
    }
};


document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(koreanFoodsData);
});
