let $ = document

const container = $.querySelector('.container')
const range = $.getElementById('range')

range.addEventListener('mousemove', (e) => {
    container.style.filter = `brightness(${e.target.value}%)`
})

/*
range.addEventListener('change', (e) => {
    container.style.filter = `brightness(${e.target.value}%)`
})*/
