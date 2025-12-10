const realtime = document.querySelector('.realtime')
const realdate = document.querySelector('.realdate')




setInterval(() => {
    const newtime = new Date().toLocaleTimeString()
    realtime.innerHTML = newtime
    const newdate = new Date().toLocaleDateString()
    realdate.innerHTML = newdate
}, 1000);

const context = document.querySelector('.context')
const overlay = document.querySelector('.overlay')

document.body.addEventListener('contextmenu', function (e) {
    e.preventDefault()
    overlay.style.display = 'block'
    context.style.transform = "translate(0%,0%)"

    context.style.translate = '0'
    context.style.display = 'flex'
    context.style.top = e.clientY + "px"
    context.style.left = e.clientX + "px"

    if (e.clientX > 1700) {
        context.style.translate = '-100%'
    }

    if (e.clientY > 620) {
        context.style.translate = '0%'
            context.style.transform = "translate(-100%,-100%)"

        if (e.clientX < 240) {
            context.style.transform = "translate(-0%,-100%)"

        }
        
        // context.style.translate = '0%'


    }
    console.log(e.clientX, ' ', e.clientY);
})
const bottom_bar = document.querySelector('.bottom_bar')

bottom_bar.addEventListener('click', function () {
    context.style.display = 'none'
    overlay.style.display = 'none'

})


overlay.addEventListener('click', function () {
    context.style.display = 'none'
    overlay.style.display = 'none'

})
