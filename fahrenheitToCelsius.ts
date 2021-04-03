function fahrenheitToCelsius(fahrenheit: number): string {
  const celsius: number = (fahrenheit - 32) * (5 / 9);

  return `${fahrenheit}F = ${celsius}C`;
}

const currentTempF = 32;
const FahrenheitToCelsiusMessage = fahrenheitToCelsius(currentTempF);

// eslint-disable-next-line no-console
console.log(FahrenheitToCelsiusMessage);
