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


///