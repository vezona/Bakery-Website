$('.drop-title').on('click', function () {
    let index = $(this).index()
    // console.log('hi')
    $(this).next().toggle()

})