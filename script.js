const titles = document.querySelectorAll('.footer-responsive__title'); //title to click on
const blockContent = document.querySelectorAll('.showable-content'); // block to show & hide
arrowToggle = document.querySelectorAll('.toggle-down'); //arrow to be rotated



for (i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function(e) {
        const block = this.nextElementSibling;
        console.log(e.target.vale);
        if (block.style.display === 'none') {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}