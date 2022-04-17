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

function listItems(basket){
    for(i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
    return basket
}
console.log('items in basket are:', listItems(basket));
function empty(basket){

}
