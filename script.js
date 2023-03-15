let ButSend = document.querySelector('.ButSert');
let Input = document.querySelector('.inp1');
let background = document.querySelector('.sertConteinerGl')
function InputYes(){
    anime({
        targets: background,
        background: 
        [
            {value: 'rgb(255, 255, 255)'},
            {value: 'rgb(255, 0, 0)'},
            {value: 'rgb(0, 255, 0)'},
            {value: 'rgb(255, 255, 0)'},
            {value: 'rgb(0, 0, 255)'},
            {value: 'rgb(255, 255, 255)'},
            {value: 'rgb(255, 255, 255)'}
        ],
        duration: 10000,
        loop: true
    })
}

setInterval(function(){
    if(Input.value == 'RGB'){
        InputYes()
    }
},100)
ButSend.addEventListener('mouseenter',function(){
    anime({
        targets: ButSend,
        scale: 1.1
    })
})

ButSend.addEventListener('mouseleave',function(){
    anime({
        targets: ButSend,
        scale: 1
    })
})
