let nameUser = 'Igor Anjos'

function celsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return fahrenheit;
  }
  
  alert('Olá' + nameUser + '! A conversão de ' + 25 +  '°C ' + 'para a medida fahrenheit é: '+ celsiusParaFahrenheit(25) + '°F'); // Saída: 77 graus farenheit

function celsiusParakelvin(celsius) {
  let kelvin = celsius + 273.15
  kelvin = kelvin.toFixed(2);
  return kelvin; 
}

alert('Olá' + nameUser + '! A conversão de ' + 30 +  '°C ' + 'para a medida kelvin é: '+ celsiusParakelvin(30) + 'K'); // Saída: 303,15 kelvin

function farenheitParaCelsius(farenheit) {
  let celsius = (farenheit - 32) / 1.8
  celsius = celsius.toFixed(2);
  return celsius;
}

alert('Olá' + nameUser + '! A conversão de ' + 35 + '°F ' + 'para a medida celsius é: ' + farenheitParaCelsius(35) + '°C'); //  Saída: 1,67 graus celsius

function farenheitParaKelvin(farenheit) {
  let kelvin = (farenheit + 459.67) / 1.8;
  kelvin = kelvin.toFixed(2);
  return kelvin;
}

alert('Olá' + nameUser + '! A conversão de ' + 40 + '°F ' + 'para a medida kelvin é: ' + farenheitParaKelvin(40) + 'K'); //  Saída: 277,59 kelvin

function kelvinParaCelsius(kelvin) {
  let celsius = (kelvin - 273.15)
  celsius = celsius.toFixed(2);
  return celsius;
}

alert('Olá' + nameUser + '! A conversão de ' + 45 + 'K ' + 'para a medida celsius é: ' + kelvinParaCelsius(45) + '°C'); //  Saída: -228,15 graus celsius

function kelvinParaFarenheit(kelvin) {
  let fahrenheit = (kelvin * 1.8) - 459.67
  fahrenheit = fahrenheit.toFixed(2);
  return fahrenheit;
}

alert('Olá' + nameUser + '! A conversão de ' + 50 + 'K ' + 'para a medida fahrenheit é: ' + kelvinParaFarenheit(50) + '°F'); // Saída: -369,67 graus farenheit

  