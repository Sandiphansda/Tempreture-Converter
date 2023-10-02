let celsius=document.getElementById("cel");
let fahrenheit=document.getElementById("fah");
let kelvin=document.getElementById("kel");
let button=document.getElementById("btn");
function roundNumber(number){
    return Math.round(number*100)/100;
};
celsius.addEventListener('input',function(){
    let cTemp= parseFloat(celsius.value);
    let fTemp = (cTemp * ( 9 / 5 )) + 32;
    let kTemp= cTemp+273.15;

    fahrenheit.value=roundNumber(fTemp);
    kelvin.value=roundNumber(kTemp);
});
fahrenheit.addEventListener('input',function(){
    let fTemp= parseFloat(fahrenheit.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp= (fTemp - 32) * (5/9) + 273.15;

    celsius.value=roundNumber(cTemp);
    kelvin.value=roundNumber(kTemp);
});
kelvin.addEventListener('input',function(){
    let kTemp= parseFloat(kelvin.value);
    let cTemp = kTemp - 273.15;
    let fTemp= (kTemp - 273.15) * (9/5) + 32;

    celsius.value=roundNumber(cTemp);
    fahrenheit.value=roundNumber(fTemp);
});
button.addEventListener('click',() => {
    celsius.value= "";
    fahrenheit.value= "";
    kelvin.value= "";
})