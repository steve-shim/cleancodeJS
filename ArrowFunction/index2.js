// Bad
const person_bad = {
  name: "Lee",
  sayHi: () => console.log(`Hi ${this.name}`),
};

person_bad.sayHi(); // Hi undefined

// Good
const person_good = {
  name: "Lee",
  sayHi() {
    // === sayHi: function() {  -> ES6의 축약 메소드 표현
    console.log(`Hi ${this.name}`);
  },
  sayHii: function () {
    console.log(`Hi ${this.name}`);
  },
};

person_good.sayHi(); // Hi Lee
person_good.sayHii(); // Hi Lee
