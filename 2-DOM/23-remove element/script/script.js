let $ = document;

let btn = $.querySelector("button")
let title = $.getElementById('title')
let h1Text = $.getElementsByClassName('h1Text')[0]

let listItems=$.querySelectorAll('.list__item')
let listItems2=$.querySelectorAll('.list__item2')


/*
btn.addEventListener('click',()=>{
    // title.remove()
    h1Text.remove()
})*/


listItems.forEach((li)=>{
    li.addEventListener('click',()=>{
        li.remove()
    })
})

listItems2.forEach((li)=>{
    li.addEventListener('click',(event)=>{
        console.log(event.target.parentElement)
        event.target.parentElement.remove()
    })
})


