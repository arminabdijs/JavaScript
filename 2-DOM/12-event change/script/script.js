let DOC = document;

function changeHandler() {
  console.log("Changed")
}

//-------------------------------------------------

let countriesSelectBox=DOC.getElementById("select-box")

countriesSelectBox.addEventListener("change",()=>{
  console.log(`Changed to ${countriesSelectBox.value}`)
})
