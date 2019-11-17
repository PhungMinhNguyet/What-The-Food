const sample = document.getElementById("main-supporting");
const search = document.getElementById('search');
const p = document.createElement('p');
const input = document.getElementById("input");
const img = document.createElement('img')

search.addEventListener('click', data);
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        data();
    }
})
async function data() {
    if (input.value == "") {
        sample.textContent = "";
        input.value = "";
        sample.insertAdjacentHTML('beforeend', '<h2>No Meals found</h2>')
    } else {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + input.value;
        const conn = await fetch(url);
        const data = await conn.json();
        console.log("data: ", data);
        sample.textContent = "";
        input.value = "";
        if (data.meals == null) {
            sample.insertAdjacentHTML('beforeend', `<h2>No Meals Found</h2>`)
        }
        showData(data);
    }
}

function showData(data) {
    console.log(data.meals.length);
    for (let i = 0; i < data.meals.length; i++) {
        let id = data.meals[i].idMeal
        sample.insertAdjacentHTML('beforeend', `<div class="result" id="${id}""><a href="../detail/detail.html?id=${id}" class="text">
            <img class="image" src="${data.meals[i].strMealThumb}" alt='food.pic'><div id="strMeal">${data.meals[i].strMeal}</a></div>`)
    }
}


