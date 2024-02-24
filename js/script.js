$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1100,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/The_left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/The_right_arrow.png"></button>',
        responsive: [
            { breakpoint: 992,
                settings: {
                slidesToShow: 1,      
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
});

// number
// string - "", '', ``
// true/false 
// null
// undefined
// let obj = {
//    name: 'apple',
//    color: 'green',
//    weight: 200
//}
// Symbol

//  alert(2345);
//  console.log(name)
//  confirm("Вам есть 18?");
//  let answer = prompt("Вам есть 18?", "");
//  console.log(answer);

//  console.log(4 + 'fdd');
// let isCheced = true, 
//    isClose = false;

// console.log(isCheced && isClose);

// console.log(isCheced || isClose);

// if (2*5 == 8*1) {
//     console.log('Вірно')
// } else {
//     console.log('Ошибка')
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Уходитеє')
// }

// const num = 50;
// 
// if (num < 49) {
//     console.log('НЕпривильно')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Верно')
// }

// for(let i = 1; i < 8; i++) {
//     console.log(i);
// }

// function logging (a, b) {
//     console.log( a + b )
// }
// 
// logging (6, 8)

