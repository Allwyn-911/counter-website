let val = 0;
document.querySelector(".plus").addEventListener("click", function () {
  val++;
  if (val >= 0 && val <= 99) {
    document.querySelector(".bx").value = val;
  } else {
    document.querySelector(".bx").value = "error";
  }
});
document.querySelector(".minus").addEventListener("click", function () {
  val--;
  if (val >= 0 && val <= 99) {
    document.querySelector(".bx").value = val;
  } else {
    document.querySelector(".bx").value = "error";
  }
});
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".bx").value = "START";
  val = 0;
});
