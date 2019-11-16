const input_name = document.getElementById('input-name');
const input_cmt = document.getElementById('input-cmt');
const contact_form = document.getElementById('contact-form');
const comment = document.getElementById('comment');
let btn = document.getElementById('btn');
const time = document.getElementById('timeCmt');
let date = new Date();

btn.addEventListener('click', () => {
    event.preventDefault()
    let userKey = localStorage.getItem('user');
    let valueName = input_name.value;
    let valueCmt = input_cmt.value;
    const valueTime = date.toDateString();
    if (valueName == null) {
        alert('You must type name');
    } else if (valueCmt == null) {
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
        <div class='comment-line' style="display: flex;">
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