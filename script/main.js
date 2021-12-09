const openPopUp = document.getElementById('.pen_pop_up');
const closePopUp = document.getElementById('.pop_up_close');
const popUp = document.getElementById('.pop_up');

openPopUp.addEvenLitener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('.active');

})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('.active');
});





// Initialize Swiper

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: false,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }

    // pagination: {
    //     el: ".swiper-pagination",
    // },



});


var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    slidesOffsetAfter: 3,
    coverflowEffect: {
        rotate: 0,
        stretch: false,
        depth: 100,
        modifier: 5,
        slideShadows: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }



});