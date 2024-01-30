/**
 * Object.freeze
 *
 * 1. 대중적인 유틸 라이브러리 (lodash)
 * 2. 직접 유틸 함수 생성
 * 3. stackoverflow
 * 4. TypeScript => readonly
 */
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

STATUS.NEW_PROP = "P2";
console.log(STATUS);
console.log(Object.isFrozen(STATUS.FAIL));
console.log(Object.isFrozen(STATUS.OPTIONS));

STATUS.OPTIONS.GREEN = "G";
STATUS.OPTIONS.YELLOW = "Y";
delete STATUS.OPTIONS.RED;
console.log(STATUS);

function checkObject(yourVariable) {
  return (
    typeof yourVariable === "object" &&
    !Array.isArray(yourVariable) &&
    yourVariable !== null
  );
}

function deepFreeze(targetObj) {
  Object.keys(targetObj).forEach((key) => {
    if (checkObject(targetObj[key])) {
      deepFreeze(targetObj[key]);
    }
  });
  return Object.freeze(targetObj);
}

const DEEP_STATUS = deepFreeze(STATUS);
STATUS.OPTIONS.GREEN = "GG";
STATUS.OPTIONS.YELLOW = "YY";
console.log(DEEP_STATUS);
console.log(Object.isFrozen(DEEP_STATUS.FAIL));
console.log(Object.isFrozen(DEEP_STATUS.OPTIONS));
