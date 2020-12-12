// Navbar header scroll disappear

// 先設定最後scroll的紀錄是0, 因為剛切進來畫面，還沒開始滑
let scrollLast = 0;

// 接下來每一次是因為scroll而觸發,所以把每一次滑完後結束前的scroll，套給scrollLast

$(window).scroll(function () {
    // 先找到目前的scroll位置
    let scrollNow = $(this).scrollTop()
    if (scrollLast < scrollNow) {
        $('.nav-bar-wrap,.navbar-mob-wrap').addClass('hide')

    } else {
        $('.nav-bar-wrap,.navbar-mob-wrap').removeClass('hide')
    }
    scrollLast = scrollNow;

})

$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 240) {
        $('.nav-bar-wrap,.navbar-mob-wrap').addClass('nav-bg')
    } else {
        $('.nav-bar-wrap,.navbar-mob-wrap').removeClass('nav-bg')
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



// ///////////  食譜區輪播～～～～

// JS宣告，後面自動輪播才能計算
let index = 0

// 輪播ＲＷＤ，先設定一個畫面寬度的變數
let carouselWidth = $('.recipe-wrap').width();

// 在設定這個變數的寬度要能隨著視窗調整
$(window).resize(function () {
    carouselWidth = $('.recipe-wrap').width();
})

// $(window).on('scrollLeft', function () {
//     console.log($('.bigger-wrap').width());
// })


//先設定目前所在的第一個位置是黑色
$('.slider-dots li').first().css('background', '#F3BF0C');

// 在設定滑過時會變顏色
$('.slider-dots li').hover(function () {
    // console.log("hi", $(this).index());
    // 先選擇this,改變顏色，再選擇其他的，然後都要沒有背景


    $(this).css('background', '#F3BF0C').siblings().css('background', 'none');

    $('.recipe-outter-wrap').css('left', carouselWidth * $(this).index() * -1)

})


// ＪＳ讓它自己動
// (()=>是箭頭函式，等於function，但ＪＱ比較舊，是es5之前的產物，所以是用function
// setInterval(() => {
// 現在要設定if條件，以免index一直變大，但我後面又沒有圖片了
// if (index > 4) {
//     index = 0;
// }

// 這邊是我的圖片跟點點跳的距離
// $('.recipe-outter-wrap').css('left', carouselWidth * index * -1);
// $('.slider-dots li').eq(index).css('background', '#F3BF0C').siblings().css('background', 'none');
// index = index + 1;

// }, 1500); //這邊是自動播放的秒數，一千毫秒等於一秒鐘



setInterval(() => {

    $('.recipe-outter-wrap').css('transition', '0.5s').css('left', carouselWidth * index * -1);

    // 三元（xyz） 來表達if
    //這邊是負責讓白點變回第一個的控制

    let dotsIndex = (index >= 5) ? 0 : index

    $('.slider-dots li').eq(dotsIndex).css('background', '#F3BF0C').siblings().css('background', 'none');
    index = index + 1;

}, 2000);


// 現在要看transition 結束的秒，監聽不同瀏覽器webkit 跟o
$('.recipe-outter-wrap').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
    console.log('index:', index);
    // 這邊是把第五張圖的transition換成0，讓圖片沒有transition的換回第一張，做出視覺效果覺得無限循環
    //if是index>5代表已經到假圖時，才會換
    if (index > 5) {
        $('.recipe-outter-wrap').css('transition', 'none').css('left', '0');
        index = 1
    }

})




// QA 彈跳出回答

$('.QA').on('click', function () {
    let index = $(this).index();
    console.log(index)
    $(this).next().toggle();
    $(this).css('color', 'black');


})


// Hover 放大
$('.card-img-wrap').hover(function () {
    $(this).addClass('addhover')
}, function () {
    $(this).removeClass('addhover')

})

// scroll 物品向上移動


$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop)

    if (scrollTop > 100) {
        $('.section2').addClass('moveup')
    } else {
        $('.section2').removeClass('moveup')
    }

    if (scrollTop > 700) {
        $('.section3').addClass('moveup')
    } else {
        $('.section3').removeClass('moveup')
    }

    // 裝飾物搖擺
    if (scrollTop > 2300) {
        $('.dr5').addClass('shake')
    } else {
        $('.dr5').removeClass('shake')
    }

})