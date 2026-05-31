let $ = document;

let countryElementId = $.getElementById("country")
let cityElementId = $.getElementById("city")

const countrysAndCitys = [
    {id: 1, name: "Iran", citys: ["Tehran", "Rasht", "Tabriz", "Yazd", "Shiraz", "Esfahan"]},
    {id: 2, name: "Canada", citys: ["Toronto", "Quebec", "Montreal", "Vancouver"]},
    {id: 3, name: "United State", citys: ["San Diego", "NewYork", "Los Angles", "Chicago", "Boston"]},
]


countrysAndCitys.forEach((country) => {
    countryElementId.innerHTML += `<option value="${country.name}">${country.name}</option>`


})

countryElementId.addEventListener("change", function () {
    let valueSelectCountry = countryElementId.value

    cityElementId.innerHTML = ''
    cityElementId.innerHTML = `<option value="please select city">please select city</option>`

    if (valueSelectCountry==="please select country"){
        return;
    }else {
        countrysAndCitys.forEach((city) => {

            if (city.name === valueSelectCountry) {

                city.citys.forEach((indexCity) => {

                    cityElementId.innerHTML += `<option value="${indexCity}">${indexCity}</option>`
                })
            }
        })
    }

})

