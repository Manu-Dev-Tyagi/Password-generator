const inputSlider =document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copybtn=document.querySelector("[data-copy]");
const copymsg=document.querySelector("[data-copyMsg]");
const uppercasecheck=document.querySelector("#uppercase");
const lowercasecheck=document.querySelector("#lowercase");
const symbolscheck=document.querySelector("#symbols");
const numberscheck=document.querySelector("#numbers");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generate-button");
const allcheckBox=document.querySelector("input[type=checkbox]");
let password="";
let passwordlength=15;
let checkcount=1;
handleSlider();
//set strength circle color to grey

function handleSlider(){
     inputSlider.value= passwordlength;
     lengthDisplay.innerText= passwordlength;
}
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    
    
}