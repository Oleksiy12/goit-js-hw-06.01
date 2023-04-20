
const firstResult = document.querySelectorAll(".item");
console.log("Number of categories :" + firstResult.length)

const secondResult = document.querySelectorAll(".item");
secondResult.forEach((value) => {
    console.log(" ");
    console.log("Category: " + value.firstElementChild.textContent);
    console.log("Elements: " + value.lastElementChild.children.length);
})