function displayValue(val){
    document.getElementById('display').value=document.getElementById('display').value+val
}
function clearDisplay(){
    document.getElementById('display').value="";
}
function calculate(){
    userInput=document.getElementById('display').value;
    document.getElementById('display').value=eval(userInput);
}