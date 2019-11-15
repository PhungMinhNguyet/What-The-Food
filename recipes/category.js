var url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function openDetail() {
    var food_div = document.getElementsByClassName('product');
    for (i = 0 ; i < food_div.length ; i++) {
        var food = food_div[i];
        food.addEventListener('click', function(e) {
            var div_clicked = e.target.parentNode
            var id = div_clicked.id 
            let list_strCategory = document.getElementsByClassName('strCategory')
            let strCategory = list_strCategory[id-1].textContent
            window.open(`foodlist.html?search=${strCategory}`,"_self")        
        })
    }
}


async function getFood() {
    const connect = await fetch(url);
    console.log(connect);
    
    const data = await connect.json();
    let list_categories = data.categories
    for(let i = 0; i < list_categories.length; i ++){
        categories = list_categories[i]
        strCategory = categories.strCategory
        strCategoryThumb = categories.strCategoryThumb;
        id = categories.idCategory
        console.log(id);
        
        product = document.getElementById('list-category')
        product.insertAdjacentHTML("beforeend", 
        `
            <article class='product'>
                <div class="img-container" id=${id}>
                    <img src=${strCategoryThumb} class='product-img' alt="">
                    <button class='detail-btn'>Chi tiết</button>
                    <h3 class="strCategory">${strCategory}</h3>
                </div>
            </article>
        `)
        }
        openDetail();
    }
        
getFood();

