let ButtonGl1 = document.querySelector('.StyleReferenceButtonNum1')
let DisplayNone1 = document.querySelector('.divDisplayNone1')
const media1068 = window.matchMedia('(max-width: 1068px)')
let ft = false



ButtonGl1.addEventListener('click',function(){
    console.log('Func Start')
    if (ft == false && media1068.matches) {
        anime({
            targets: '.StyleReferenceDivGlNum1',
            height: '600px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl1.innerHTML = '-'

        ft = true
    }
    else if (ft == true && media1068.matches) {
        anime({
            targets: '.StyleReferenceDivGlNum1',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl1.innerHTML = '+'

        ft = false
    }
    else if(ft == false){
        anime({
            targets: '.StyleReferenceDivGlNum1',
            height: '550px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl1.innerHTML = '-'

        ft = true
    }
    else if(ft == true){
        anime({
            targets: '.StyleReferenceDivGlNum1',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl1.innerHTML = '+'

        ft = false
    }
})

let ButtonGl2 = document.querySelector('.StyleReferenceButtonNum2')
let DisplayNone2 = document.querySelector('.divDisplayNone2')
let ft2 = false
ButtonGl2.addEventListener('click',function(){
    console.log('Func Start')
    if(ft2 == false){
        anime({
            targets: '.StyleReferenceDivGlNum2',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl2.innerHTML = '-'

        ft2 = true
    }
    else if(ft2 == true){
        anime({
            targets: '.StyleReferenceDivGlNum2',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl2.innerHTML = '+'
        

        ft2 = false
    }
})

let ButtonGl3 = document.querySelector('.StyleReferenceButtonNum3')
let DisplayNone3 = document.querySelector('.divDisplayNone3')
const media761 = window.matchMedia('(max-width: 761px)')
let ft3 = false
ButtonGl3.addEventListener('click',function(){
    console.log('Func Start')
    if (ft3 == false && media761.matches) {
        anime({
            targets: '.StyleReferenceDivGlNum3',
            height: '1150px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl3.innerHTML = '-'

        ft3 = true
    }
    else if (ft3 == true && media761.matches) {
        anime({
            targets: '.StyleReferenceDivGlNum3',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl3.innerHTML = '+'

        ft3 = false
    }
    else if(ft3 == false){
        anime({
            targets: '.StyleReferenceDivGlNum3',
            height: '1100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl3.innerHTML = '-'

        ft3 = true
    }
    else if(ft3 == true){
        anime({
            targets: '.StyleReferenceDivGlNum3',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl3.innerHTML = '+'
        

        ft3 = false
    }
})

let ButtonGl4 = document.querySelector('.StyleReferenceButtonNum4')
let DisplayNone4 = document.querySelector('.divDisplayNone4')
let ft4 = false
ButtonGl4.addEventListener('click',function(){
    console.log('Func Start')
    if(ft4 == false){
        anime({
            targets: '.StyleReferenceDivGlNum4',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl4.innerHTML = '-'

        ft4 = true
    }
    else if(ft4 == true){
        anime({
            targets: '.StyleReferenceDivGlNum4',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl4.innerHTML = '+'
        

        ft4 = false
    }
})

let ButtonGl5 = document.querySelector('.StyleReferenceButtonNum5')
let DisplayNone5 = document.querySelector('.divDisplayNone5')
let ft5 = false
ButtonGl5.addEventListener('click',function(){
    console.log('Func Start')
    if(ft5 == false){
        anime({
            targets: '.StyleReferenceDivGlNum5',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl5.innerHTML = '-'

        ft5 = true
    }
    else if(ft5 == true){
        anime({
            targets: '.StyleReferenceDivGlNum5',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl5.innerHTML = '+'
        

        ft5 = false
    }
})

let ButtonGl6 = document.querySelector('.StyleReferenceButtonNum6')
let DisplayNone6 = document.querySelector('.divDisplayNone6')
let ft6 = false
ButtonGl6.addEventListener('click',function(){
    console.log('Func Start')
    if(ft6 == false){
        anime({
            targets: '.StyleReferenceDivGlNum6',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl6.innerHTML = '-'

        ft6 = true
    }
    else if(ft6 == true){
        anime({
            targets: '.StyleReferenceDivGlNum6',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl6.innerHTML = '+'
        

        ft6 = false
    }
})

let ButtonGl7 = document.querySelector('.StyleReferenceButtonNum7')
let DisplayNone7 = document.querySelector('.divDisplayNone7')
let ft7 = false
ButtonGl7.addEventListener('click',function(){
    console.log('Func Start')
    if(ft7 == false){
        anime({
            targets: '.StyleReferenceDivGlNum7',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl7.innerHTML = '-'

        ft7 = true
    }
    else if(ft7 == true){
        anime({
            targets: '.StyleReferenceDivGlNum7',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl7.innerHTML = '+'

        ft7 = false
    }
})


let ButtonGl8 = document.querySelector('.StyleReferenceButtonNum8')
let DisplayNone8 = document.querySelector('.divDisplayNone8')
let ft8 = false
ButtonGl8.addEventListener('click',function(){
    console.log('Func Start')
    if(ft8 == false){
        anime({
            targets: '.StyleReferenceDivGlNum8',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl8.innerHTML = '-'

        ft8 = true
    }
    else if(ft8 == true){
        anime({
            targets: '.StyleReferenceDivGlNum8',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl8.innerHTML = '+'

        ft8 = false
    }
})

let ButtonGl9 = document.querySelector('.StyleReferenceButtonNum9')
let DisplayNone9 = document.querySelector('.divDisplayNone9')
let ft9 = false
ButtonGl9.addEventListener('click',function(){
    console.log('Func Start')
    if(ft9 == false){
        anime({
            targets: '.StyleReferenceDivGlNum9',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl9.innerHTML = '-'

        ft9 = true
    }
    else if(ft9 == true){
        anime({
            targets: '.StyleReferenceDivGlNum9',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl9.innerHTML = '+'
        

        ft9 = false
    }
})

let ButtonGl10 = document.querySelector('.StyleReferenceButtonNum10')
let DisplayNone10 = document.querySelector('.divDisplayNone10')
let ft10 = false
ButtonGl10.addEventListener('click',function(){
    console.log('Func Start')
    if(ft10 == false){
        anime({
            targets: '.StyleReferenceDivGlNum10',
            height: '500px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl10.innerHTML = '-'

        ft10 = true
    }
    else if(ft10 == true){
        anime({
            targets: '.StyleReferenceDivGlNum10',
            height: '100px',
            duration: 300,
            easing: 'easeOutQuad'
        })
        ButtonGl10.innerHTML = '+'

        ft10 = false
    }
})