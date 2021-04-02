function fahrenheit_to_celsius(fahrenheit: number): String {
  const celsius: number = (fahrenheit - 32) * (5 / 9);

  return `${fahrenheit}F = ${celsius}C`;
}

function celsius_to_fahrenheit(celsius: number): String {
  const fahrenheit: number = celsius * (9 / 5) + 32;

  return `${celsius}C = ${fahrenheit}F`;
}

const currentFTemp = 32;
const currentCTemp = 30;
const f_to_c_msg = fahrenheit_to_celsius(currentFTemp);
const c_to_f_msg = celsius_to_fahrenheit(currentCTemp);

console.log(f_to_c_msg);
console.log(c_to_f_msg);
