// Navbar header scroll disappear

// 先設定最後scroll的紀錄是0, 因為剛切進來畫面，還沒開始滑
let scrollLast = 0;

// 接下來每一次是因為scroll而觸發,所以把每一次滑完後結束前的scroll，套給scrollLast

$(window).scroll(function () {
    // 先找到目前的scroll位置
    let scrollNow = $(this).scrollTop()
    if (scrollLast < scrollNow) {
        $('.nav-bar-wrap, .navbar-mob-wrap').addClass('hide')

    } else {
        $('.nav-bar-wrap, .navbar-mob-wrap').removeClass('hide')
    }
    scrollLast = scrollNow;

})

$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 240) {
        $('.nav-bar-wrap, .navbar-mob-wrap').addClass('nav-bg')
    } else {
        $('.nav-bar-wrap').removeClass('nav-bg')
    }

})

//偵測scroll Top 高度
// $(window).scroll(function () {
//     console.log('scroll top:', $(this).scrollTop());

// })




// 右下角fixed button 
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


///彈出購物車視窗

$('.button-white-wrap').on('click', function () {
    console.log('hi')
    $('#cartWrap').css('display', 'block')
})

$('.btn-close').on('click', function () {
    $('#cartWrap').css('display', 'none')
})


// 按鈕時增加減少數量，並計算金額

// 寫不出來～～～
// $('.add').on('click', function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $(this).closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value < 20) {
//         value = value + 1
//     } else {
//         value = 20
//     }

//     $input.val(value);

// })

let productQuantity = +$('#product-quantity').val();
let cost = $('.cost').text()
$('#total-cost').val(cost * productQuantity)

$('.add').on('click', function () {
    productQuantity += 1;
    cost = $('.cost').text()


    $('#product-quantity').val(productQuantity)
    $('#total-cost').val(cost * productQuantity)
})

// 按鈕減少數量
$('.minus').on('click', function () {
    productQuantity -= 1;
    cost = $('.cost').text()


    $('#product-quantity').val(productQuantity)
    $('#total-cost').val(cost * productQuantity)
})




// 購物車小窗彈出
$('.fa-shopping-cart').on('click', function () {
    $('.shop-box-wrap').toggle()

})

// 按下刪除按鈕 (刪除後再加會跑不回來)
$('.delete').on('click', function () {
    $(this).parent().toggle()

})


// 按下結帳鈕
$('.left-info .btn-wrap').on('click', function () {
    $('#cartWrap').css('display', 'none');
    $('.shop-box-wrap').css('display', 'block');

    $('.shop-box-item').css('display', 'flex');

})