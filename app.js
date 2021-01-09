/*
// acessing elements by querySelector (Input Part)

var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#txt-output");

//server url 

var serverURL = "https://api.funtranslations.com/translate/minion.json"

//translation function : whenever i want to convert the text i would take the server URL add query params ie.. ? to it add key ie.. text= and add a value ie.. input to it 
function getTranslationURL(input) {
   return serverURL+ "?" + "text=" + input
}

// writing function (Processing part)



//calling function (Output Part)
btnTranslate.addEventListener("click", function clickEventHandler() {
   // reading input text value
   var inputText = txtInput.value;

   // calling server for processing

   //go and fetch the 
   fetch(getTranslationURL(inputText)) // go and fetch that URL
      .then(response => response.json()) //convert that response into response.json
      .then(json => {
         var translatedText = json.contents.translated;
         txtOutput.innerText = translatedText;
      })
   // take translated text

});


*/
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)
