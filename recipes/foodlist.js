var url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
var api_search = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
let href_search = window.location.href;
let search = href_search.split("=");
let api = api_search + search[1];



function openDetail() {
    var food_div = document.getElementsByClassName('product');
    for (i = 0 ; i < food_div.length ; i++) {
        var food = food_div[i];
        food.addEventListener('click', function(e) {
            var div_clicked = e.target.parentNode
            var id = div_clicked.id           
            window.open(`../detail/detail.html?id=${id}`,"_self")        
        })
    }
}


async function getFood() {
    const connect = await fetch(api);
    console.log(connect);
    
    const data = await connect.json();
    let list_food = data.meals;
    for(let i = 0; i < list_food.length; i ++){
        food = list_food[i]
        strMeal = food.strMeal
        strMealThumb = food.strMealThumb;
        id = food.idMeal;
        product = document.getElementById('list-food')
        product.insertAdjacentHTML("beforeend", 
        `
            <article class='product'>
                <div class="img-container" id=${id}>
                    <img src=${strMealThumb} class='product-img' alt="">
                    <button class='detail-btn'>Chi tiết</button>
                    <h3 >${strMeal}</h3>
                </div>
            </article>
        `)
        }
        openDetail();
    }
getFood();

