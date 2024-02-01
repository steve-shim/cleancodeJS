const object = {
  name: "홍길동",
  main: function () {
    console.log(this);
  },
  mainArrow: () => {
    console.log(this);
  },
};

const object2 = {
  name: "다른 객체",
  main: object.main,
  mainArrow: object.mainArrow,
};

object.main();
object2.main();

object.mainArrow();
object2.mainArrow();
