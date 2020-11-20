const addButton = document.getElementById('add');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
const totalSpan = document.querySelector('.total-calories');
const list = document.querySelector('#item-list');
let total = 0;





addButton.addEventListener('click', (event)=> {
    let mealName = foodName.value; //get the food name from the input file
    let mealCalories = parseInt(foodCalories.value); //get the calories from the field
    total = total + mealCalories; //calculates the total caloria intake
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `food: ${mealName}. Calories: ${mealCalories}` ;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);

    //clear the input fields
    foodName.value = '';
    foodCalories.value = '';
    
    
    console.log('Food:', typeof(mealName)); 
    console.log('Calories:', typeof(mealCalories));
    console.log('Total:', total);


    event.preventDefault();
});