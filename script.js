const realtime = document.querySelector('.realtime')
const realdate = document.querySelector('.realdate')




setInterval(() => {
    const newtime = new Date().toLocaleTimeString()
    realtime.innerHTML = newtime
    const newdate = new Date().toLocaleDateString()
    realdate.innerHTML = newdate
}, 1000);



document.body.addEventListener('contextmenu', function(e){
    e.preventDefault()
})