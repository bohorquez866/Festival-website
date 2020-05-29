const titles = document.querySelectorAll('.show-content'); //element to click on
const blockContent = document.querySelectorAll('.showable-content'); // block to show & hide
arrowToggle = document.querySelectorAll('.toggle-down'); //arrow to be rotated



for (i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function(e) {
        const block = this.nextElementSibling;

        if (block.style.display === 'block') {
            block.style.display = 'none';
        } else {
            block.style.display = 'block';
        }
    });
}