const sample = document.getElementById("main-supporting");
const search = document.getElementById('search');
const p = document.createElement('p');
const input = document.getElementById("input");
const img = document.createElement('img')

search.addEventListener('click', data);
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        data();
    }
})
async function data() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + input.value;
    const conn = await fetch(url);
    const data = await conn.json();
    console.log("data: ", data);
    sample.textContent = "";
    input.value = "";
    showData(data);
}

function showData(data) {
    console.log(data.meals.length);
    for (let i = 0; i < data.meals.length; i++) {
        let id = data.meals[i].idMeal
        sample.insertAdjacentHTML('beforeend', `<div class="result" id="${id}""><a href="../detail/detail.html?id=${id}" class="text"><img class="image" src="${data.meals[i].strMealThumb}" alt='food.pic'><div id="strMeal">${data.meals[i].strMeal}</a></div>`)
    }
}