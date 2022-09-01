let displayText = "";

function writeToDisplay() {

}

let numpad = document.querySelectorAll(".numpad > .num-operator");
let display = document.querySelector(".display > div")
numpad.forEach((key) =>{

    key.addEventListener("click", () =>{
        displayText += key.innerHTML;
        display.textContent = `${displayText}`
    })
})


