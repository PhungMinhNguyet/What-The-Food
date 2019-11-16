let id = window.location.search.substring(4, 9)
const container = document.getElementById('container');
const main = document.getElementById('main');
const foodDetail = document.getElementById('foodDetail')
const randomMeal = document.getElementById('randomMeal')
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
const randomUrl = `https://www.themealdb.com/api/json/v1/1/random.php`

async function randomData() {
    const connect = await fetch(randomUrl);
    const randomData = await connect.json();
    console.log("data: ", randomData);
    showRandomData(randomData);
}

async function randomData1() {
    const connect = await fetch(randomUrl);
    const randomData = await connect.json();
    console.log("data: ", randomData);
    showRandomData1(randomData);
}

function showRandomData(randomData) {
    randomMeal.insertAdjacentHTML('beforeend', `<div id="side-bar"><a href="../detail/detail.html?id=${randomData.meals[0].idMeal}">
    <a href="../detail/detail.html?id=${randomData.meals[0].idMeal}" id="hix">${randomData.meals[0].strMeal}</a><img style="padding-top:20px" src="${randomData.meals[0].strMealThumb}"
    alt="">
<div id="intro-food"><a>${(randomData.meals[0].strInstructions).substring(0, 100)}[..]</a></div></a><div><hr>`)
}

function showRandomData1(randomData) {
    randomMeal.insertAdjacentHTML('beforeend', `<div id="side-bar"><a href="../detail/detail.html?id=${randomData.meals[0].idMeal}">
    <a href="../detail/detail.html?id=${randomData.meals[0].idMeal}" id="hix">${randomData.meals[0].strMeal}</a><img style="padding-top:20px" src="${randomData.meals[0].strMealThumb}"
    alt="">
<div id="intro-food"><a>${(randomData.meals[0].strInstructions).substring(0, 100)}[..]</a></div></a><div><hr>`)
}

async function data() {
    const conn = await fetch(url);
    const data = await conn.json();
    console.log("data: ", data);
    showData(data);
}

function showData(data) {
    var material = '';
    for (i = 1; i <= 20; i++) {
        foodIngredient = data.meals[0][`strIngredient${i}`];
        foodMeasure = data.meals[0][`strMeasure${i}`];
        if (foodIngredient && foodMeasure) {
            x = `${foodIngredient}: ${foodMeasure}`;
            material += `<li>${x}</li>`;
        }
    }
    console.log(data.meals[0].strYoutube);
    let idVideo = (data.meals[0].strYoutube).substring(32, 42)
    console.log(idVideo);

    foodDetail.insertAdjacentHTML('beforeend', `<div id="foody">
    <div id="img-container-main">
    <h2>I. ${data.meals[0].strMeal}</h2>
        <img src="${data.meals[0].strMealThumb}"
            class='recipe-img'>
    </div>
    <div id = "detailIngredient"> 
    <h2>II. Ingredients</h2>
        <ol style="list-style-type:disc;">
            ${material}
        </ol>
    </div>
    
        </div> 
    <div class='ingredient-list'>
    <hr>
        <h2>III. Method</h2>
        <div id="instruction"><p>${(data.meals[0].strInstructions)}</p>
        
        </div>
    </div>`);
}
randomData()
randomData1()
data()