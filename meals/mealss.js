/// catch event mealsPage

//Breakfast button
let item = document.getElementById("myDIV");

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
        item.innerHTML = '';
    }

    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
<img src="${ dataBre.meals[num].strMealThumb}" class='product-img' alt="">
<button class='detail-btn'>Detail</button>
<h3>${dataBre.meals[num].strMeal}</h3>
</div>
</article>`);


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
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
    <img src="${ dataBrunch.meals[num].strMealThumb}" class='product-img' alt="">
    <button class='detail-btn'>Detail</button>
    <h3>${dataBrunch.meals[num].strMeal}</h3>
</div>
</article>`);
    console.log(dataBrunch.meals[num].strMeal);

}

const btnLunch = document.getElementById('lunch');
btnLunch.addEventListener('click', urlListMealCategory);

async function urlListMealCategory() {
    const urlListMealCategory = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    const dataCategory = await urlListMealCategory.json();
    randomCategory(dataCategory);
}

function randomCategory(dataCategory) {
    let position1 = Math.floor(Math.random() * dataCategory.meals.length);
    let position2 = Math.floor(Math.random() * dataCategory.meals.length);
    let position3 = Math.floor(Math.random() * dataCategory.meals.length);
    let position4 = Math.floor(Math.random() * dataCategory.meals.length);
    // CHECK DUPPLICATE POSITION IN CATEGORY
    if (position1 == position2) {
        position2 = Math.floor(Math.random() * dataCategory.meals.length);
    }
    if (position3 = position1 || position3 == position2) {
        position3 = Math.floor(Math.random() * dataCategory.meals.length);
    }
    if (position4 = position1 || position4 == position2 || position4 == position3) {
        position4 = Math.floor(Math.random() * dataCategory.meals.length);
    }

    console.log(position2, position1, position3, position4);

    // GET CATEGORY NAME
    let categogyMeal1 = dataCategory.meals[position1].strCategory;
    let categogyMeal2 = dataCategory.meals[position2].strCategory;
    let categogyMeal3 = dataCategory.meals[position1].strCategory;
    let categogyMeal4 = dataCategory.meals[position2].strCategory;

    // if it not br and dessert is allowed
    if (categogyMeal1 == "Dessert" || categogyMeal1 == "Breakfast") {
        position1 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal1 = dataCategory.meals[position].strCategory;
    }
    if (categogyMeal2 == "Dessert" || categogyMeal2 == "Breakfast") {
        position2 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal2 = dataCategory.meals[position2].strCategory;
    }
    if (categogyMeal3 == "Dessert" || categogyMeal3 == "Breakfast") {
        position2 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal2 = dataCategory.meals[position2].strCategory;
    }
    if (categogyMeal4 == "Dessert" || categogyMeal4 == "Breakfast") {
        position2 = Math.floor(Math.random() * dataCategory.meals.length);
        categogyMeal2 = dataCategory.meals[position2].strCategory;
    }

    // console.log("rrrr", categogyMeal1, categogyMeal2, categogyMeal3, categogyMeal4);
    urlLunch(categogyMeal1, categogyMeal2);
    urlDinner(categogyMeal3, categogyMeal4)
}

async function urlLunch(categogyMeal1, categogyMeal2) {
    console.log("eeee", categogyMeal1, categogyMeal2);
    const urlLunch1 = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
    const dataLunch1 = await urlLunch1.json();
    const urlLunch2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categogyMeal1}`)
    const dataLunch2 = await urlLunch2.json();
    const urlLunch3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categogyMeal2}`)
    const dataLunch3 = await urlLunch3.json();
    // console.log(dataLunch1, dataLunch2, dataLunch3);

    showLunch(dataLunch1, dataLunch2, dataLunch3);

}

function showLunch(dataLunch1, dataLunch2, dataLunch3) {

    let itemList = [];
    let num1 = Math.floor(Math.random() * dataLunch1.meals.length);
    let num2 = Math.floor(Math.random() * dataLunch2.meals.length);
    let num3 = Math.floor(Math.random() * dataLunch3.meals.length);
    itemList.push(dataLunch1.meals[num1].strMeal);
    itemList.push(dataLunch2.meals[num2].strMeal);
    itemList.push(dataLunch3.meals[num3].strMeal);
    // re-eddit show detail
    //     for (let i = 0; i < itemList.length; i++) {
    //         item.insertAdjacentHTML('beforeend',
    //             `<article class='product'>
    //  <div class="food-img">
    //     <img src="${ dataLunch.meals[i].strMealThumb}" class='product-img' alt="${i+1}">
    //     <button class='detail-btn'>Detail</button>
    //     <h3>${dataLunch.meals[i].strMeal}</h3>
    // </div>
    //       </article>`);
    //     }

    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
<img src="${ dataLunch1.meals[num1].strMealThumb}" class='product-img' alt="1">
<button class='detail-btn'>Detail</button>
<h3>${dataLunch1.meals[num1].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
<img src="${ dataLunch2.meals[num2].strMealThumb}" class='product-img' alt="2">
<button class='detail-btn'>Detail</button>
<h3>${dataLunch2.meals[num2].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
<img src="${ dataLunch3.meals[num3].strMealThumb}" class='product-img' alt="3">
<button class='detail-btn'>Detail</button>
<h3>${dataLunch3.meals[num3].strMeal}</h3>
</div>
</article>`);

    console.log("List ", itemList);

}
showLunch();

// Dinner
// Dinner button

const btnDinner = document.getElementById('dinner');
btnDinner.addEventListener('click', urlListMealCategory);


async function urlDinner() {
    console.log("toi", categogyMeal1, categogyMeal2);
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

    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
<img src="${ dataDinner1.meals[num1].strMealThumb}" class='product-img' alt="1">
<button class='detail-btn'>Detail</button>
<h3>${dataDinner1.meals[num1].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
<img src="${ dataDinner2.meals[num2].strMealThumb}" class='product-img' alt="2">
<button class='detail-btn'>Detail</button>
<h3>${dataDinner2.meals[num2].strMeal}</h3>
</div>
</article>`);
    item.insertAdjacentHTML('beforeend',
        `<article class='product'>
<div class="food-img">
<img src="${ dataDinner3.meals[num3].strMealThumb}" class='product-img' alt="3">
<button class='detail-btn'>Detail</button>
<h3>${dataDinner3.meals[num3].strMeal}</h3>
</div>
</article>`);

    console.log("List ", itemList);



}