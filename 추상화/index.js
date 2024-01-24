// function getElements() {
//   const result = {
//     title: document.querySelector(".title"),
//     text: document.querySelector(".text"),
//     value: document.querySelector(".value"),
//   };

//   return result;
// }

// 내부의 임시변수를 변경하려는 유혹을 받지 못하도록
// 단 하나의 역할만 할 수 있는 함수로 만드는 것이 좋다
function getElements() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

// function getDateTime(targetDate) {
// 	let month = targetDate.getMonth();
// 	let day = targetDate.getDate();
// 	let hour = targetDate.Hours();

// 	month = month >= 10 ? month : '0' + month;
// 	day = day >= 10 ? day : '0' + day;
// 	hour = hour >= 10 ? hour : '0' + hour;

// 	return;
// }

function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);
}

// function getDateTime(targetDate) {
//   const month = targetDate.getMonth() + 1;
//   const day = targetDate.getDate();

//   return {
//     month: month >= 10 ? month : "0" + month,
//     day: day >= 10 ? day : "0" + day,
//   };
// }

// 함수의 기능을 추가하고자 할 때는 기존 함수의 기능은 유지하면서
// 해당함수를 하나 더 wrapping하여서 사용한다
function getDateTimeAB() {
  function getDateTime(targetDate) {
    const month = targetDate.getMonth() + 1;
    const day = targetDate.getDate();

    return {
      month: month >= 10 ? month : "0" + month,
      day: day >= 10 ? day : "0" + day,
    };
  }

  const currentDateTime = getDateTime(new Date());
  console.log("currentDateTime", currentDateTime);
  return {
    month: `${currentDateTime.month} 분 전`,
    day: `${currentDateTime.day} 분 전`,
  };
}

console.log("test result", getDateTimeAB());
//console.log("b", getDateTime(new Date()));
