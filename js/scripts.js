$(document).ready(function () {
    var owlCarousel = $('.owl-carousel');
    if (owlCarousel.length == 0) {
        return;
    }
    owlCarousel.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });

});

const loadBtn = document.querySelector('.load-btn');
loadBtn.addEventListener('click', () => {
    if (loadBtn.innerHTML === 'See more') {
        loadBtn.innerHTML = 'See less'
    } else if (loadBtn.innerHTML === 'See less') {
        loadBtn.innerHTML = 'See more'
    }
})