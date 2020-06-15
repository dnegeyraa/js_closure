// 1st part- 1
function nonsense(string){
	var blab = function(){
	alert(string);
	}
    };
    
    // 1st part 2

function nonsense(string){
    setTimeout(function blab(){
        alert(string);
    }, 2000);
};

// 1st part 3

// <!-- function nonsense (string){
// 	return blab
// } -->

// 1st part 4

let blabLater = nonsense("rose");
	let blabAgainLater = nonsense("tulip");

	blabLater();
    blabAgainLater();
    

// second

var lastNameTrier = function(firstName){
    var innerFunction = function(lastName) {
        return `${firstName} ${lastName}`
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'

// third


