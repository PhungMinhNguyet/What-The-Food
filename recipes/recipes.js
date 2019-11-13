var url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
async function getFood() {
    const connect = await fetch(url);
    const data = await connect.json;
    document.getElementById
} 


var listfood = `
<article class='product' >
<div class="img-container">
    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class='product-img' alt="">
    <button class='detail-btn'>Chi tiết</button>
    <h3>Food 1</h3>
</div>             
</article>
`

var detail = document.getElementById('list-food');
detail.insertAdjacentHTML('beforeend',listfood);

