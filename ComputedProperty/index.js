function func1(a, b) {
  return a + b;
}
function func2() {
  return "hello";
}

let obj = {
  [`key${func1(5, 8)}`]: "result is 13",
  [func2()]: "hi",
};

console.log(obj); // { key13: 'result is 13', hello: 'hi' }
