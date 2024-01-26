// if (!isNaN(3)) {
//   console.log("숫자");
// }

// 숫자일떄만
function isNumber(num) {
  return !Number.isNaN(num) && typeof num === "number";
}

if (isNumber(3)) {
  console.log("숫자");
}

/**
 * 부정 조건 예외
    1. Early Return
    2. Form Validation 유효성 검증
    3. 보안 혹은 검사로직
 */
