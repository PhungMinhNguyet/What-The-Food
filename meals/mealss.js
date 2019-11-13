/// catch event mealsPage

//Breakfast button

const btnBre = document.getElementById('breakfast');
btnBre.addEventListener('click', urlBre);


async function urlBre() {
    const urlBre = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
    const dataBre = await urlBre.json();
    console.log(dataBre);

    showBreakfast(dataBre);

}

function showBreakfast(dataBre) {
    let num = Math.floor(Math.random() * dataBre.meals.length);
    // re-eddit show detail
    p.insertAdjacentHTML('beforeend', `<p> ${dataBre.meals[num].strMeal} </p><img src='${dataBre.meals[num].strMealThumb}'alt="breakfast">`);
    console.log(dataBre.meals[num].strMeal);

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
    p.insertAdjacentHTML('beforeend', `<p> ${dataBrunch.meals[num].strMeal} </p><img src='${dataBrunch.meals[num].strMealThumb}' alt="brunchPic">`);
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

    console.log("rrrr", categogyMeal1, categogyMeal2, categogyMeal3, categogyMeal4);
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
    console.log(dataLunch1, dataLunch2, dataLunch3);

    showLunch(dataLunch1, dataLunch2, dataLunch3);

}

function showLunch(dataLunch1, dataLunch2, dataLunch3) {
    let num1 = Math.floor(Math.random() * dataLunch1.meals.length);
    let num2 = Math.floor(Math.random() * dataLunch2.meals.length);
    let num3 = Math.floor(Math.random() * dataLunch3.meals.length);
    // re-eddit show detail
    // p.insertAdjacentHTML('beforeend', `<p> ${dataLunch1.meals[num1].strMeal} </p><img src='${dataLunch1.meals[num1].strMealThumb}' alt="lunchPic1">`);
    // p.insertAdjacentHTML('beforeend', `<p> ${dataLunch2.meals[num2].strMeal} </p><img src='${dataLunch2.meals[num2].strMealThumb}' alt="lunchPic2">`);
    // p.insertAdjacentHTML('beforeend', `<p> ${dataLunch3.meals[num3].strMeal} </p><img src='${dataLunch3.meals[num3].strMealThumb}' alt="lunchPic3">`);

    console.log(dataLunch1.meals[num1].strMeal);
    console.log(dataLunch2.meals[num2].strMeal);
    console.log(dataLunch3.meals[num3].strMeal);
}

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
    // p.insertAdjacentHTML('beforeend', `<p> ${dataDinner1.meals[num1].strMeal} </p><img src='${dataDinner1.meals[num1].strMealThumb}' alt="lunchPic1">`);
    // p.insertAdjacentHTML('beforeend', `<p> ${dataDinner2.meals[num2].strMeal} </p><img src='${dataDinner2.meals[num2].strMealThumb}' alt="lunchPic2">`);
    // p.insertAdjacentHTML('beforeend', `<p> ${dataDinner3.meals[num3].strMeal} </p><img src='${dataDinner3.meals[num3].strMealThumb}' alt="lunchPic3">`);

    console.log(dataDinner1.meals[num1].strMeal);
    console.log(dataDinner2.meals[num2].strMeal);
    console.log(dataDinner3.meals[num3].strMeal);


}