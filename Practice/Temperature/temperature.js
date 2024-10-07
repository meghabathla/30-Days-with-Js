/*
Build a simple temperature converter widget that contains two text inputs temperatures in Celsius and Fahrenheit respectively, allowing for conversion between the temperature scales.
*/

function temperature() {
  const celsius = document.getElementById("celsius");
  const fehrenheit = document.getElementById("fehrenheit");
  const showText = document.getElementById("show");

  const celsiusOutput = celsius.addEventListener("input", (e) => {
    const celsius = e.target.value;

    if (celsius) {
      const result = (celsius * 9) / 5 + 32;
      fehrenheit.value = result;
    }
  });

  const fehrenheitOutput = fehrenheit.addEventListener("input", (e) => {
    const fehrenheit = e.target.value;
    console.log(fehrenheit);
    if (fehrenheit) {
      const result = ((fehrenheit - 32) * 5) / 9;

      celsius.value = result;
    }
  });
}

temperature();
