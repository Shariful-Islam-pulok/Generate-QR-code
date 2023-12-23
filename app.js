const textInput = document.querySelector("#textArea"); 
const widthInput = document.querySelector("#widthArea");
const heightInput = document.querySelector("#heightArea");
function codeGenerate(){
    const valueInputText = textInput.value; 
    const valueWidthInput = widthInput.value;
    const valueHeightInput= heightInput.value;

    valueInputText = "";
    valueWidthInput = "";
    valueHeightInput = "";



    fetchQRapi(valueInputText, valueWidthInput, valueHeightInput);
     
};
function fetchQRapi(inputText,inputWidth,inputHeight){
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${inputWidth}x${inputHeight}&data=${inputText}`)

    // .then((response)=>response.json())

    .then((data) => document.querySelector("#getImage").src = data.url);

    // .then((data) => console.log(data));

    // document.querySelector("#qrImage").src = data.url;
};