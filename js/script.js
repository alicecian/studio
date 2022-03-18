const modal = document.querySelector('.modal');

$("a.toHover").hover(function() {
    modal.classList.toggle('active');
})