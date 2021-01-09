
// acessing elements by querySelector (Input Part)

var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");

// writing function (Processing part)

function clickEventHandler() 
{
    
   txtOutput.innerText = txtInput.value; 

}

//calling function (Output Part)
btnTranslate.addEventListener("click" , clickEventHandler);