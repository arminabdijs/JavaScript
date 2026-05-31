let $ = document;


const titleTagWebSite = $.querySelector('title')
const title = $.getElementById('title')
const inputCelsiusOrFahrenheit = $.getElementById('celsius__fahrenheit')
const output = $.getElementById('output')
const btnConvert = $.getElementById("btn__convert")
const btnChange = $.getElementById("btn__change")
const btnReset = $.getElementById("btn__reset")

let valueTitle
let valueInputCelsiusOrFahrenheit;

function swap() {
    valueTitle = title.innerHTML
    if (valueTitle === 'Convert °F to °C') {
        titleTagWebSite.innerHTML = 'Convert °C to °F'
        title.innerHTML = 'Convert °C to °F'
        inputCelsiusOrFahrenheit.placeholder = '°C'

    } else {
        titleTagWebSite.innerHTML = 'Convert °F to °C'
        title.innerHTML = 'Convert °F to °C'
        inputCelsiusOrFahrenheit.placeholder = '°F'
    }
}

function convert() {
    if (valueInputCelsiusOrFahrenheit === undefined || isNaN(valueInputCelsiusOrFahrenheit) || valueInputCelsiusOrFahrenheit === null || valueInputCelsiusOrFahrenheit === '') {
        output.innerHTML = "Write Correct value!"
        output.style.color = 'red'
    } else {
        if (inputCelsiusOrFahrenheit.placeholder === '°F') {
            output.innerHTML = `${valueInputCelsiusOrFahrenheit} °F to ${((valueInputCelsiusOrFahrenheit - 32) * 5 / 9).toFixed(2)} °C`
            output.style.color = '#314171'
        } else {
            output.innerHTML = `${valueInputCelsiusOrFahrenheit} °C to ${((valueInputCelsiusOrFahrenheit * 1.8) + 32).toFixed(2)} °F`
            output.style.color = '#314171'
        }
    }
}

function reset() {
    title.innerHTML = 'Convert °C to °F'
    output.innerHTML = 'output';
    output.style.color = '#314171'
    titleTagWebSite.innerHTML = 'Convert °C to °F';
}


inputCelsiusOrFahrenheit.addEventListener("change", () => valueInputCelsiusOrFahrenheit = inputCelsiusOrFahrenheit.value)

btnChange.addEventListener("click", swap)

btnConvert.addEventListener("click", convert)

btnReset.addEventListener("click", reset)