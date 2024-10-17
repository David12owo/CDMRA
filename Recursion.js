// POWER FUNCTION

function power(base, exponents) {
  if (exponents === 0) {
    return 1;
  } else {
    return base * power(base, exponents - 1);
  }
}

//? FIBONACCI

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
