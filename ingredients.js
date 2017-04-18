var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat =0;

console.log ("While Loop");
// Write a while loop that prints out the contents of ingredients:
while (repeat < 8){
  console.log (ingredients[repeat]);
  repeat++;
}

console.log ("For Loop");
// Write a for loop that prints out the contents of ingredients:
for (repeat = 0; repeat < 8; repeat++){
  console.log (ingredients[repeat]);
}

console.log ("For Loop- Backwards Ingredients List");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (repeat = 7; repeat >= 0; repeat-- ){
  console.log(ingredients[repeat]);
}