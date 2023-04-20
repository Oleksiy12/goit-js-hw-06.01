const firstTest = document.getElementById("validation-input");

const length = Number(firstTest.dataset.length);
console.log(length);


firstTest.addEventListener("blur", () => {
  const testLength = firstTest.value.length;
  console.log(testLength)
  if (length === testLength) {
    firstTest.classList.add("valid")
    firstTest.classList.remove("invalid")
  } else {
    firstTest.classList.add("invalid")
    firstTest.classList.remove("valid")
  }
})


