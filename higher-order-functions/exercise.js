// Challenge 1
function addTwo(num) {
        return num = num + 2 ;
    }; 


// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, addTwo) {
    let newArray = []
    for(i = 0 ; i < array.length; i++){
        newArray.push(addTwo(array[i]))
    }
    return newArray; 
}

function addTwo(input){
    return input + 2 ; 
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {}

// see for yourself if your forEach works!
function forEach(letters , sortLetter) {
    // let alpha = ""
    for(var letter of letters){
      sortLetter(letter)
    }
    
  };
  function sortLetter(char){
    return alphabet += char;
  }
//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, sortLetter) {
    array.forEach(function(e){
        return sortLetter(e)
    });
    return array
}

//Extension 2
function reduce(num, addNum, initialValue) {
    let acc = initialValue;
    for (let numbers of num) {
      acc = addNum(numbers, acc);
    }
    return acc;
  }
  
  function addNum(input, acc) {
    return acc + input;
  }

//Extension 3
function intersection(arrays, ...arr) {
 for(let i = 0; i<arr.length; i++){
   var result = arr[i].reduce((acc, iv){
     if(arrays.includes(iv)){
       acc.push(iv);
     }
     return acc;
   },[])
  arrays = result
 }
 return result; 
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4

function union(arrays, ...arr){
  let newArray = arrays.concat(arr.flat(1));
   newArray.reduce((acc, iv) {
     if(acc.indexOf(iv)=== -1){
       acc.push(iv);
     }
     return acc;
   },[])
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
