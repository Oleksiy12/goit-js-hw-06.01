const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstItem = document.getElementById("ingredients");
const replace = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList = "item";
  return list;
})
firstItem.append(...replace)