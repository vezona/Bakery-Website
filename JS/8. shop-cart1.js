//偵測scroll Top 高度
// $(window).scroll(function () {
//     console.log('scroll top:', $(this).scrollTop());

// })

const minus = document.getElementById('minus')

const add = document.getElementById('add')

const number = document.getElementById('product-quantity')

const total = document.getElementById('total')

const money = document.getElementById('money')


minus.addEventListener('click',function(){

    // console.log(number.value)

    if (number.value>0){
        number.value=number.value-1
        total.innerHTML=number.value*money.innerHTML
    }
})

add.addEventListener('click',function(){

    // console.log(number.value)

    number.value=+number.value+1

    total.innerHTML=number.value*money.innerHTML
})

