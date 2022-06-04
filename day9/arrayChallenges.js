function alwaysHungry(arr) {
    // your code here 
    var counter =0;
    var yummy = "yummy, ";
    var hunger = "I am hungary";
    for(var i = 0; i<arr.length;i++){
        if(arr[i]=='food'){
            counter++
        }
    }
    if(counter == 0){
        return hunger;
    }
    
    return yummy.repeat(counter);
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// *****************************************************//

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result); // we expect back [6, 8, 10, 9]

//****************************************************************/

function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    // calculate the average
    for(var i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    avg = sum/arr.length; 
   
    var count = 0
    // count how many values are greated than the average
    for(var j = 0; j<arr.length; j++){
        if(arr[j]>avg){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result); // we expect back 4

//******************************************************** */

function reverse(arr) {
    // your code here
    newarr = [];
    for(var i = arr.length-1; i>=0; i--){
        newarr.push(arr[i]);
    }
    
    return newarr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
//console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//********************************************************** */

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var sum =0;
    // your code here
    for(var i = 0; i<n-2; i++){
        sum = fibArr[i]+fibArr[i+1]
        fibArr.push(sum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]