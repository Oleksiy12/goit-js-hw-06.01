const form = document.querySelector(".login-form");

form.addEventListener("submit", totalValue);

function totalValue(event){
  event.preventDefault();
  const {
    elements: {email, password}
} = event.currentTarget;
if (email.value === "" || password.value === "") {
  return alert("Всі поля повинні бути заповнені")
}
const result = {Email: email.value, Password: password.value};
event.currentTarget.reset();
console.log(result)
}
