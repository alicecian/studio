const body = document.querySelector("body");
console.log(body);

// match
function Match(item, array) {
    let index;
    let id = item.id
    let active = null

    for (var i = 0; i < array.length; i++) {
        let match = array[i].getAttribute('data-index-number')
        if (id === match) {
            active = array[i]
            index = i;
        }
        array[i].classList.remove('active')
    }

    if (active) {
        active.classList.add('active')
    }
}

const sidenotes = document.querySelectorAll(".sidenote");
console.log(sidenotes);

$(sidenotes).mouseover(function() {
    let index = $(this).attr("data-index-number");
    console.log(index);

    $('.list li').each(function() {
        let sidenoteNum = $(this).attr("data-index-number");
        if (sidenoteNum == index) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        } 
    });
   
});