/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        
        article.appendChild(h3);
        article.appendChild(img);
        
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    let response;
    let templeData;

    do {
        response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        if (!response.ok) {
            console.error('Network response was not ok. Retrying...');
        } else {
            templeData = await response.json();
            templeList = templeData;
            displayTemples(templeList); 
        }
    } while (!response.ok);

    
    return templeList;
};

getTemples().then(() => {
    console.log(templeList); 
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

    templesElement.innerHTML = '';
    displayTemples(list);
};

document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
});
