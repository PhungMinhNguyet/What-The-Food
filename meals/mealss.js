/// catch event mealsPage
let item = document.getElementById("myDIV");


//Breakfast button
const btnBre = document.getElementById('breakfast');
btnBre.addEventListener('click', urlBre);


async function urlBre() {
    const urlBre = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
    const dataBre = await urlBre.json();
    console.log(dataBre);

    showBreakfast(dataBre);
    //     item.textContent = " ";
}

function showBreakfast(dataBre) {

    let num = Math.floor(Math.random() * dataBre.meals.length);
    // re-eddit show detail
    let itemM = item.getElementsByClassName('product');
    console.log(itemM);

    if (itemM.length >= 1) {
        item.innerHTML = ' ';
    }
    let id = dataBre.meals[num].idMeal;
    item.insertAdjacentHTML('beforeend',
        `
    <article class='product'>
    
        <div class="img-container" id="${id}">
        <img src="${ dataBre.meals[num].strMealThumb}" class='product-img' alt="">
             <button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id}" class="text"></button>
        <h3>${dataBre.meals[num].strMeal}</h3>
        </div>
    
    </article>
    `);



}

// Brunch button

const btnBrunch = document.getElementById('brunch');
btnBrunch.addEventListener('click', urlBrunch);


async function urlBrunch() {
    const urlBrunch = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
    const dataBrunch = await urlBrunch.json();
    console.log(dataBrunch);

    showBrunch(dataBrunch);

}

function showBrunch(dataBrunch) {
    let num = Math.floor(Math.random() * dataBrunch.meals.length);
    // re-eddit show detail

    let itemM = item.getElementsByClassName('product');
    console.log(itemM);

    if (itemM.length >= 1) {
        item.innerHTML = ' ';
    }
    let id = dataBrunch.meals[num].idMeal;
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="img-container">
    <img src="${ dataBrunch.meals[num].strMealThumb}" class='product-img' alt="">
    <button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id}" class="text"></button>
    <h3>${dataBrunch.meals[num].strMeal}</h3>
</div>
</article>`);

}

const btnLunch = document.getElementById('lunch');
btnLunch.addEventListener('click', urlListMealCategoryL);

async function urlListMealCategoryL() {
    let urlListMealCategoryL = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    let dataCategory = await urlListMealCategoryL.json();
    randomCategoryLunch(dataCategory);
}

function randomCategoryLunch(dataCategory) {
    let position1 = Math.floor(Math.random() * dataCategory.meals.length);
    let position2 = Math.floor(Math.random() * dataCategory.meals.length);

    // CHECK DUPPLICATE POSITION IN CATEGORY
    if (position1 == position2) {
        position2 = Math.floor(Math.random() * dataCategory.meals.length);
    }

    // GET CATEGORY NAME
    let categogyMeal1 = dataCategory.meals[position1].strCategory;
    let categogyMeal2 = dataCategory.meals[position2].strCategory;

    // if it not br and dessert is allowed
    if (categogyMeal1 == "Dessert" || categogyMeal1 == "Breakfast") {
        position1 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal1 = dataCategory.meals[position].strCategory;
    }
    if (categogyMeal2 == "Dessert" || categogyMeal2 == "Breakfast") {
        position2 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal2 = dataCategory.meals[position2].strCategory;
    }


    // console.log("rrrr", categogyMeal1, categogyMeal2, categogyMeal3, categogyMeal4);
    urlLunch(categogyMeal1, categogyMeal2);

}

async function urlLunch(categogyMeal1, categogyMeal2) {
    console.log("eeee", categogyMeal1, categogyMeal2);
    const urlLunch1 = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert");
    const dataLunch1 = await urlLunch1.json();
    const urlLunch2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categogyMeal1}`);
    const dataLunch2 = await urlLunch2.json();
    const urlLunch3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categogyMeal2}`);
    const dataLunch3 = await urlLunch3.json();
    // console.log(dataLunch1, dataLunch2, dataLunch3);

    showLunch(dataLunch1, dataLunch2, dataLunch3);

}

function showLunch(dataLunch1, dataLunch2, dataLunch3) {

    // let itemList = [];
    let num1 = Math.floor(Math.random() * dataLunch1.meals.length);
    let num2 = Math.floor(Math.random() * dataLunch2.meals.length);
    let num3 = Math.floor(Math.random() * dataLunch3.meals.length);

    let itemM = item.getElementsByClassName('product');
    console.log(itemM);

    if (itemM.length >= 3) {
        item.innerHTML = ' ';
    }

    let id1 = dataLunch1.meals[num1].idMeal;
    let id2 = dataLunch2.meals[num2].idMeal;
    let id3 = dataLunch3.meals[num3].idMeal;
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="img-container">
<img src="${ dataLunch1.meals[num1].strMealThumb}" class='product-img' alt="1">
<button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id1}" class="text"></button>
<h3>${dataLunch1.meals[num1].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="img-container">
<img src="${ dataLunch2.meals[num2].strMealThumb}" class='product-img' alt="2">
<button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id2}" class="text"></button>
<h3>${dataLunch2.meals[num2].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="img-container">
<img src="${ dataLunch3.meals[num3].strMealThumb}" class='product-img' alt="3">
<button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id3}" class="text"></button>
<h3>${dataLunch3.meals[num3].strMeal}</h3>
</div>
</article>`);



}

// Dinner
// Dinner button
const btnDinner = document.getElementById('dinner');
btnDinner.addEventListener('click', urlListMealCategoryD);

async function urlListMealCategoryD() {
    let urlListMealCategory = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    let dataCategory = await urlListMealCategory.json();
    randomCategoryDinner(dataCategory);
    console.log("urlList ", dataCategory);
}


function randomCategoryDinner(dataCategory) {
    let position3 = Math.floor(Math.random() * dataCategory.meals.length);
    let position4 = Math.floor(Math.random() * dataCategory.meals.length);

    console.log("randomfunction", position3, position4);

    if (position4 == position3) {
        position4 = Math.floor(Math.random() * dataCategory.meals.length);
    }
    let categogyMeal3 = dataCategory.meals[position3].strCategory;
    let categogyMeal4 = dataCategory.meals[position4].strCategory;

    if (categogyMeal3 == "Dessert" || categogyMeal3 == "Breakfast") {
        position3 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal3 = dataCategory.meals[position3].strCategory;
    }
    if (categogyMeal4 == "Dessert" || categogyMeal4 == "Breakfast") {
        position4 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal4 = dataCategory.meals[position4].strCategory;
    }
    console.log("meals", categogyMeal3, categogyMeal4);
    urlDinner(categogyMeal3, categogyMeal4);
}



async function urlDinner(categogyMeal3, categogyMeal4) {
    console.log("toi", categogyMeal3, categogyMeal4);
    const urlDinner1 = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
    const dataDinner1 = await urlDinner1.json();
    const urlDinner2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categogyMeal3}`)
    const dataDinner2 = await urlDinner2.json();
    const urlDinner3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categogyMeal4}`)
    const dataDinner3 = await urlDinner3.json();
    console.log(dataDinner1, dataDinner2, dataDinner3);

    showDinner(dataDinner1, dataDinner2, dataDinner3);

}

function showDinner(dataDinner1, dataDinner2, dataDinner3) {
    let num1 = Math.floor(Math.random() * dataDinner1.meals.length);
    let num2 = Math.floor(Math.random() * dataDinner2.meals.length);
    let num3 = Math.floor(Math.random() * dataDinner3.meals.length);
    // re-eddit show detail
    let itemM = item.getElementsByClassName('product');
    console.log(itemM.idMeal);

    if (itemM.length >= 3) {
        item.innerHTML = ' ';
    }

    let id1 = dataLunch1.meals[num1].idMeal;
    let id2 = dataLunch2.meals[num2].idMeal;
    let id3 = dataLunch3.meals[num3].idMeal;
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="img-container">
<img src="${ dataDinner1.meals[num1].strMealThumb}" class='product-img' alt="1">
<button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id1}" class="text"></button>
<h3>${dataDinner1.meals[num1].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="img-container">
<img src="${ dataDinner2.meals[num2].strMealThumb}" class='product-img' alt="2">
<button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id2}" class="text"></button>
<h3>${dataDinner2.meals[num2].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="img-container">
<img src="${ dataDinner3.meals[num3].strMealThumb}" class='product-img' alt="3">
<button class='detail-btn'>Detail<a href="../detail/detail.html?id=${id3}" class="text"></button>
<h3>${dataDinner3.meals[num3].strMeal}</h3>i
</div>
</article>`);

    console.log("List ", itemM);

}