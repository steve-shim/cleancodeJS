// /**
//  * Object Lookup Table
//  */
// function getUserType(type) {
//   if (type === "ADMIN") {
//     return "관리자";
//   } else if (type === "INSTRUCTOR") {
//     return "강사";
//   } else if (type === "STUDENT") {
//     return "수강생";
//   } else {
//     return "해당 없음";
//   }
// }

// console.log(getUserType("ADMIN"));
// console.log(getUserType("zz"));

// /**
//  * Object Lookup Table
//  */
// function getUserType(type) {
//   switch (type) {
//     case "ADMIN":
//       return "관리자";
//     case "INSTRUCTOR":
//       return "강사";
//     case "STUDENT":
//       return "수강생";
//     default:
//       return "해당 없음";
//   }
// }

// console.log(getUserType("ADMIN"));
// console.log(getUserType("zz"));

/**
 * Object Lookup Table
 */
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "수강생",
    [0]: "Zero",
    UNDEFINED: "해당 없음",
  };

  return USER_TYPE[type] || USER_TYPE.UNDEFINED;
}

console.log(getUserType("INSTRUCTOR"));
console.log(getUserType("0"));
console.log(getUserType("zz"));
