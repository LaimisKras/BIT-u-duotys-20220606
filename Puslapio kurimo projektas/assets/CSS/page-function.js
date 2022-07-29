console.log('veikia')
const box1 = document.querySelector('#box1')
console.log(box1)
const box1Element = box1.querySelector('span[data-time="happy"]')
const box2 = document.querySelector('#box2')
const box2Element = box2.querySelector('span[data-time="app"]')
const box3 = document.querySelector('#box3')
const box3Element = box3.querySelector('span[data-time="total"]')
const box4 = document.querySelector('#box4')
const box4Element = box4.querySelector('span[data-time="awards"]')

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;

setInterval(() =>  {

    if (number1 < 2350) {
        number1 += 10
    }

    if (number2 < 2150) {
        number2 += 10
    }

    if (number3 < 2350) {
        number3 += 10
    }

    if (number4 < 2250) {
        number4 += 10
    }

    box1Element.textContent = number1
    box2Element.textContent = number2
    box3Element.textContent = number3
    box4Element.textContent = number4

}, 0.1)



const openIframe = document.querySelectorAll('[data-iframe-target]')
const closeIframe = document.querySelectorAll('[data-close-button]')

const overlay = document.getElementById('overlay')

openIframe.forEach(button =>{
button.addEventListener('video-row', () =>{
const iframe = document.querySelector(button.dataset.iframeTarget)
openIframes(iframe)
})
})

overlay.addEventListener('video-row' , () => {
const iframes = document.querySelectorAll('.iframe.active')
iframes.forEach(iframe=>{
closeIframes(iframe)
})
})


closeIframe.forEach(button =>{
button.addEventListener('video-row', () =>{
 const iframe = button.closest('.iframe')
closeIframes(iframe)
})
})

function openIframes(iframe){
if(iframe == null ) return
iframe.classList.add('active')
overlay.classList.add('active')
}
function closeIframes(iframe){
if(iframe == null ) return
iframe.classList.remove('active')
overlay.classList.remove('active')
}

