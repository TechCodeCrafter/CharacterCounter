const display = document.querySelector(".result");
const input = document.querySelector(".text-input");

input.addEventListener("keyup", (e) => {
  e.preventDefault();
  display.textContent = input.value.length;
});
