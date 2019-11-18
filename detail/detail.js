const container = document.getElementById('container');
const main = document.getElementById('main');
const foodDetail = document.getElementById('foodDetail')
const randomMeal = document.getElementById('randomMeal')

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
<div id="intro-food"><a>${(randomData.meals[0].strInstructions).substring(0, 100)}[...]</a></div></a><div><hr>`)
}

function showRandomData1(randomData) {
    randomMeal.insertAdjacentHTML('beforeend', `<div id="side-bar"><a href="../detail/detail.html?id=${randomData.meals[0].idMeal}">
    <a href="../detail/detail.html?id=${randomData.meals[0].idMeal}" id="hix">${randomData.meals[0].strMeal}</a><img style="padding-top:20px" src="${randomData.meals[0].strMealThumb}"
    alt="">
<div id="intro-food"><a>${(randomData.meals[0].strInstructions).substring(0, 100)}[...]</a></div></a><div><hr>`)
}

function createMainComment() {
    main.insertAdjacentHTML("beforeend", `
 <div class="contact-form">
     <textarea name="name" type="name" class="form-control form-control-name" id="input-name" placeholder="Your name" required></textarea>
     <form action="contact-form" method="post"></form>
     <textarea name="comment" type="text" class="form-control form-control-cmt" id="input-cmt" placeholder="Your comment"></textarea>
     <br>
     <input type="button" class="form-control button" id="btn" value="SEND">
 </div>
 <div id="comment">

 </div>
     `)
}

async function data() {
    createMainComment();
    let id = window.location.search.substring(4, 9);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const conn = await fetch(url);
    const data = await conn.json();

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
const input_name = document.getElementById('input-name');
const input_cmt = document.getElementById('input-cmt');
const contact_form = document.getElementById('contact-form');
const comment = document.getElementById('comment');
let btn = document.getElementById('btn');
const time = document.getElementById('timeCmt');
let date = new Date();

btn.addEventListener('click', () => {
    event.preventDefault();
    let userKey = localStorage.getItem('user');
    let valueName = input_name.value;
    let valueCmt = input_cmt.value;
    const valueTime = date.toDateString();
    if (valueName == null || valueName == '') {
        alert('You must type name');
    } else if (valueCmt == null || valueCmt == '') {
        alert('You must type comment');
    } else if (valueName != null && valueCmt != null) {
        if (userKey == null) {
            var data = [];
            localStorage.setItem("user", JSON.stringify(data));
        }
        let person = {

            name: valueName,
            comment: valueCmt,
            time: valueTime
        }

        var users = JSON.parse(localStorage.getItem("user"));
        users.push(person)
        localStorage.setItem('user', JSON.stringify(users));
    }
    input_name.value = '';
    input_cmt.value = '';
    window.window.location.reload(true);
})

function RenderComment() {
    var data_users = JSON.parse(localStorage.getItem("user"));
    console.log(data_users);
    for (let i = 0; i < data_users.length; i++) {
        data_user = data_users[i]
        console.log(data_user.time);
        const div_comment = `              
        <div class='comment-line' style="display: inline;">
        <img src="https://petto.vn/wp-content/uploads/2019/07/nhung-hanh-dong-la-lung-ma-loai-cho-thuong-lam.jpg" alt="">
        <div class='comment-area'>
        <div id="timeCmt">${data_user.time}</div>
            <div class="comment-author">${data_user.name}</div>
            <div class = 'comment-text'>
                <p>${data_user.comment}</p>
            </div>
        </div>

        </div>`
        comment.insertAdjacentHTML("beforeend", div_comment);
    }
}
RenderComment();