console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item){
    basket.push(item);
    return true; 
}

console.log("adding item:", addItem(`apples`));
//console.log(`basket is: ${basket}`);
console.log("adding item:", addItem(`peanuts`));
console.log("adding item:", addItem(`cheese`));

function listItems(basket){
    for(i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
    return basket
}
console.log('items in basket are:', listItems(basket));
function empty(basket){
    for(i=basket.length; i>0; i--){
        console.log('item removed:', basket.pop()); //if I want to display what is removed
        //basket.pop(); //if I don't want to display what is being removed
    }
    return true
}
console.log('Are items removed from basket?', empty(basket));

console.log('basket is', basket);
