$('.btn-tab').on('click', function () {
    // let index = $(this).index();
    $(this).next().toggle()
})

$('.box1').click(function () {
    $('.box2').toggle()

})