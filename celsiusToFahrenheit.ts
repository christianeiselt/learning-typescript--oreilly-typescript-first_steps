function celsiusToFahrenheit(celsius: number): string {
  const fahrenheit: number = celsius * (9 / 5) + 32;

  return `${celsius}C = ${fahrenheit}F`;
}

const currentTempC = 30;
const CelsiusToFahrenheitMessage = celsiusToFahrenheit(currentTempC);

// eslint-disable-next-line no-console
console.log(CelsiusToFahrenheitMessage);
