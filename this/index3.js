// function main() {
//   console.log("this", this);
// }

// const mainBind = main.bind({ name: "hi" });
// mainBind();

// const object = {
//   mainBind,
// };

// object.mainBind();

const object = {
  name: "홍길동",
  main: function () {
    console.log(this);
  },
};

object.main();
