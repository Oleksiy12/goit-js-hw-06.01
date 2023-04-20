const span = document.getElementById("name-output");
const input = document.getElementById("name-input");

input.addEventListener("input", (event) => {
  const result = event.currentTarget.value.trim();
  if (result.length === 0) {
    span.textContent = "Anonymous";
  } else {
    span.textContent = result;
  }
});