const say = function (city) {
  console.log("this", this); // 여기서 this는 뭘까? (기본적으로 this는 window)
  console.log(`Hello, my name is ${this.name}, I live in ${city}`);
};

const obj = { name: "Shim" };

say("seoul"); // Hello, my name is undefined, I live in seoul
say.call(obj, "seoul"); // Hello, my name is Shim, I live in seoul
say.apply(obj, ["seoul"]); // Hello, my name is Shim, I live in seoul

const boundSay = say.bind(obj);
boundSay("SSeoul"); // Hello, my name is Shim, I live in SSeoul
