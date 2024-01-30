function pow(x, n, depth = 0) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1, depth + 1);
  }
}

console.log(pow(2, 3, 1)); // 8
