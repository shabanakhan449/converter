// function temperatureConverter(degree){
//     var x;
//     if (degree == "inputFahrenheit"){
//         document.getElementById("inputFahrenheit").value*9/5+32;
//      document.getElementById("outputCelsius").value = Math.round(x);
// } 
// else{
//     x = (document.getElementById("outputCelsius").value-32)*5/9;
//     document.getElementById("inputFahrenheit").value = Math.round(x);
// }
// }



// Fahrenheit
function temperatureConverter(e){
    
    var f = document.getElementById("inputFahrenheit");
     // Fahrenheit to Celsius	° C = 0.56 (° F - 32)
    var f_c = (f.value-32)*0.56
    document.getElementById("outputCelsius").value = Math.round(f_c)
    
    // Fahrenheit to Kelvin	K = 0.56 (° F - 32) + 273
    var f_k = 0.56*(f.value-32)+273
    document.getElementById("outputKelvin").value = Math.round(f_k)
    

}
// Celsius
function tempConverter(e){
    var c = document.getElementById("outputCelsius");
    // Celsius to Fahrenheit	° F = 1.8 ( ° C) + 32
    var c_f = 1.8*(c.value-32)
   document.getElementById("inputFahrenheit").value = Math.round(c_f)
     // Celsius to Kelvin	K = ° C + 273
    var c_k = c.value + 273
    document.getElementById("outputKelvin").value = Math.round(c_k)
   
}
// Kelvin
function temperatureConvert(e){
    var k = document.getElementById("outputKelvin");
    // Kelvin to Fahrenheit	° F = 1.8 (K - 273) + 32
    var k_f = 1.8*(k.value -273)+32;
    document.getElementById("inputFahrenheit").value = Math.round(k_f)
    // Kelvin to Celsius	° C = K - 273
   var k_c = k.value -273;
   document.getElementById("outputCelsius").value = Math.round(k_c)
}












