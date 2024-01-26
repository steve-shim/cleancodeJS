/**
 * 배열 요소에 접근하기 [bad]
 */
function operateTime(inputs, operators, is) {
  inputs[0].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });

  inputs[1].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

/**
 * 배열 요소에 접근하기 [good]
 */
function operateTime(input, operators, is) {
  const [firstInput, secondInput] = inputs;

  firstInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });

  secondInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

/**
 * 배열 요소에 접근하기 [bad]
 */
function formatDate(targetDate) {
  const date = targetDate.toISOString().split("T")[0];
  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}

/**
 * 배열 요소에 접근하기 [good]
 */
function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split("T");
  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}

/**
 * 배열 요소에 접근하기 [good]
 */
function head(arr) {
  return arr[0] ?? "";
}

function formatDate(targetDate) {
  const date = head(targetDate.toISOString().split("T"));
  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}
