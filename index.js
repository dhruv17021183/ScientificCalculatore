let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
var memory=0;

function add(result,character){
    if(result.value==null||result.value==0){
        result.value=character;
    }
    else if(result.value.length<15){
        result.value +=character;
    }
}
result=(text)=>{
    var ans=eval(text.value);
    screen.value=ans;
}
fact=(text)=>{
    var ans=text.value;
    var factvalue=1;
    for(var i=1;i<=ans;i++){
        factvalue *=i;
    }
    screen.value=factvalue;
}
MS=(text)=>{
    var ans=text.value;
    memory +=eval(ans);
    screen.value=memory;
}
MPLUS=(text)=>{
    var ans=text.value;
    memory +=eval(ans);
    screen.value=memory;
}
MMINUS=(text)=>{
    var ans=text.value;
    memory -=eval(ans);
    screen.value=memory;
}
MR=(text)=>{
    var ans=text.value;
    memory =eval(ans);
    screen.value=memory;
}
MC=()=>{
    // var ans=text.value;
    memory = "0";
    screen.value=memory;
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('but text', buttonText);
        // console.log('hello');
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'cos') {
            screen.value = Math.cos(screen.value);
        }
        else if (buttonText == 'sin') {
            screen.value = Math.sin(screen.value);
        }
        else if (buttonText == 'tan') {
            screen.value = Math.tan(screen.value);
        }
        else if(buttonText=='x^2'){
            screen.value=screen.value*screen.value;
        }
        else if (buttonText == 'log') {
            screen.value = Math.log10(screen.value);
        }
        else if (buttonText == 'ln') {
            screen.value = 2.303 * Math.log(screen.value);
        }
        else if (buttonText == 'sqrt') {
            screen.value = Math.sqrt(screen.value);
        }
        else if (buttonText == '1/x') {
            screen.value = 1 / screen.value;
        }
        else if (buttonText == '-->') {
            screen.value = screen.value.substring(0,screen.value.length-1);
            screen.value=screen.value;
        }
        else if (buttonText == 'e') {
            screen.value=eval(screenValue+2.718281828459045)
        }
        else if (buttonText == '|x|') {
            screen.value = Math.abs(screen.value);
        }
        else if(buttonText == '10^x') {
            screen.value=Math.pow(10,screenValue);
        }
        else if(buttonText == 'x^y') {
            // screen.value=Math.pow(screenValue,screenValue1);
            buttonText="**";
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='n!'){
            screen.value=factvalue;
        }
        else if(buttonText=='+/-'){
            if(screen.value>0){
                screen.value=-screen.value;
            }
            else{
                screen.value=Math.abs(screen.value)
            }
        }
        else if (buttonText == 'Pi') {
            screen.value=eval(screenValue+3.14159265359);
            // screen.value = Math.PI(screen.value);
            // screen.value=x;
        }
        else if(buttonText=='DEG'){
            screen.value=(screen.value*3.14159265359)/180;
        }
        else if(buttonText=='MS'){
            screen.value=memory;
        }
        else if(buttonText=='MPLUS'){
            screen.value=memory+eval(ans);
        }
        else if(buttonText=='MMINUS'){
            screen.value=memory-eval(ans);
        }
        else if(buttonText=='MR'){
            screen.value=memory;
        }
        else if(buttonText=='MC'){
            memory=0;
            screen.value=memory;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
