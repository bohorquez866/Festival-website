const submitBtn = document.querySelector('#search-submit');
const form = document.querySelector('.hero__form');

let submit = form.addEventListener('submit', e => {
    console.log('funciona');
});


submitBtn.addEventListener('click', submit);