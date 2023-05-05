const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (let ind = 0; ind < ingredients.length; ind++) {
  const element = ingredients[ind];
  console.log(element);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let index = ingredients.length - 1;
while (index >= 0) {
  console.log(ingredients[index]);
  index--;
}