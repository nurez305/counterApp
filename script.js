const header = document.querySelector('h1')
const button = document.querySelector('button')
let counter = 0;

let interval;

document.querySelector('button').addEventListener('click', ()=>{
    counter++
    
    header.textContent = counter
    clearTimeout(interval)
})


button.addEventListener('mouseleave', ()=>{
   interval = setTimeout(()=>{
        counter = 0
        header.textContent = counter

    }, 5000)

})
    
