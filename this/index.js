// const object = {
//   name: "홍길동",
//   main: function () {
//     const innerFunction = function () {
//       console.log(this); // window
//     }.bind({ hi: "hi" });
//     innerFunction();
//   },
// };

// object.main();

// const object = {
//   name: "홍길동",
//   main: function () {
//     console.log("this", this); // {name: '홍길동', main: ƒ}
//     const innerFunction = () => {
//       console.log(this); // {name: '홍길동', main: ƒ}
//     };
//     innerFunction();
//   },
// };

// object.main();

// const object = {
//   name: "홍길동",
//   main: function () {
//     setTimeout(function () {
//       console.log(this);
//     }, 1000);
//   },
// };

// object.main();

const object = {
  name: "홍길동",
  main: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};

object.main();
