function convertFToC(fahrenheit) {
  return ((fahrenheit - 32) * (5/9));
}
const fahrenheit = parseInt(prompt("Enter a temperature in Fahrenheit:"));
const resultFToC = convertFToC(fahrenheit);
alert(resultFToC);

function convertCToF(celsius) {
  return ((celsius * (9/5)) + 32);
}
const celsius = parseInt(prompt("Enter a temperature in celsius:"));
const resultCToF = convertCToF(celsius);
alert(resultCToF);