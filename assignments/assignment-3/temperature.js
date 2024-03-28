var Fahrenheit = 100;

// celsius = C = (F - 32) * (5/9) => C= (100-32) * (5/9) => 68 * 0.5 => 37.77777
console.log((celsius = (Fahrenheit - 32) * (5 / 9)));
console.log(celsius); // 37.777777...

var celsius = 100;

// ((Fahrenheit = celsius * (9 / 5) + 32)) => Fahrenheit = 100 * 1.8 + 32 => 180 + 32 => 212
console.log((Fahrenheit = celsius * (9 / 5) + 32));
console.log(Fahrenheit); // 212
