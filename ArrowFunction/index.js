const introObject = {
  name: "상준",
  nickname: "ray",
  getIntro: function () {
    introFunction = function () {
      return `${this.username}님의 닉네임은 ${this.nickname}입니다.`;
    };
    console.log(introFunction());
  },
};
introObject.getIntro();

const introObject2 = {
  name: "상준",
  nickname: "ray",
  getIntro: function () {
    innerFunc = () => `${this.name}님의 닉네임은 ${this.nickname}입니다.`;
    console.log(innerFunc());
  },
};
introObject2.getIntro();

// function dummy() {
//   const name = "hokeys";
//   return {
//     say: () => {
//       console.log(this.name);
//     },
//     anotherSay: function () {
//       console.log(this.name);
//     },
//   };
// }

// let dum = dummy();
// dum.say(); //결과는 윈도우 객체
// dum.anotherSay(); //결과는 상위 객체인 dummy.
