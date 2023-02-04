let img_varients = document.querySelectorAll('.img-varients');
let img = document.querySelector('.img');

img_varients.forEach( (ele) => {
    ele.addEventListener('click', () => {
        img.src = ele.src;
    })
})