function registerDay(userInputDay) {
  switch (userInputDay) {
    case "월요일": // some code
    case "화요일": // some code
    case "수요일": // some code
    case "목요일": // some code
    case "금요일": // some code
    case "토요일": // some code
    case "일요일": // some code
    default:
      throw Error("입력값이 유효하지 않습니다.");
  }
}

e.target.value = "월ㄹ요일";
registerDay(e.target.value);

/////////////////////////////////////////////////////////////////

function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = height || 100;
  element.style.width = width || 100;

  return element;
}

createElement();
