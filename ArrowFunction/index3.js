// /**
//  * Arrow Function
//  */
// const user = {
//   name: "Poco",
//   getName: () => {
//     return this.name;
//   },
//   newFriends: (...rest) => {
//     //const newFriendList = Array.from(arguments);
//     const newFriendList = rest;
//     console.log(newFriendList); // [ 'Jang', '장' ]
//     return `${this.name} ${newFriendList}`; // undefined Jang,장
//   },
// };

// console.log(user.newFriends("Jang", "장")); // // undefined Jang,장

/**
 * Arrow Function
 */
const user = {
  name: "Poco",
  getName: () => {
    return this.name;
  },
  newFriends: function (...rest) {
    //const newFriendList = Array.from(arguments);
    const innerFunction = () => {
      const newFriendList = rest;
      console.log(newFriendList); // [ 'Jang', '장' ]
      return `${this.name} ${newFriendList}`;
    };
    return innerFunction;
  },
};

console.log(user.newFriends("Jang", "장")()); // Poco Jang,장
