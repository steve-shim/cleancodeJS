const button = document.getElementById("btn");

button.addEventListener("click", function (e) {
  console.log(this);
  console.log(e.target);
});
