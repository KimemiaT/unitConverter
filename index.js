/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meter
let feet
let liter
let gallon
let kilogram
let pound
let ans

let inputEl = document.getElementById("input-el")
let lengthEl= document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let convertBtn = document.getElementById("btn-el")
    let value = inputEl.value

//length
function meterToFeet(value){
      return (parseFloat(inputEl.value) * 3.281).toFixed(3)
      
}

function feetToMeter(value){
      return (parseFloat(inputEl.value) / 3.281) .toFixed(3)
     
}
//volume

function literToGallon(value){
      return (parseFloat(inputEl.value) * 0.264) .toFixed(3)
     
}
function gallonToLiter(value){
      return (parseFloat(inputEl.value) / 0.264) .toFixed(3)
     
}

//mass
function kgToPound(value){
      return (parseFloat(inputEl.value) * 2.204) .toFixed(3)
     
}
function poundToKg(value){
      return (parseFloat(inputEl.value) / 2.204) .toFixed(3)
     
}


convertBtn.addEventListener("click",function (){
    let ans1 = meterToFeet(value)
let ans2 = feetToMeter(value)
let ans3 = literToGallon(value)
let ans4 = gallonToLiter(value)
let ans5 = kgToPound(value)
let ans6 = poundToKg(value)

lengthEl.innerText= `\n ${inputEl.value} meters = ${ans1} feet | ${inputEl.value} feet = ${ans2} meters`
volumeEl.innerText =`\n ${inputEl.value} liters = ${ans3} gallons | ${inputEl.value} gallons = ${ans4} liters`
massEl.innerText = `\n ${inputEl.value} kilos = ${ans5} pounds | ${inputEl.value} pounds = ${ans6} kilos`
    
})

