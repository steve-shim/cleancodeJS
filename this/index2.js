// "use strict";

// function main() {
//   console.log("this2", this);
// }
// const main = () => {
//   console.log("this2", this);
// };

// main();

// const object = {
//   name: "홍길동",
//   main: function () {
//     console.log(this);
//   },
// };

// object.main();
// const main2 = object.main;
// main2();

function main() {
  console.log("this", this);
}

const object = {
  name: "홍길동",
  smallObject: {
    name: "작은 홍길동",
    main,
  },
};

object.smallObject.main();
