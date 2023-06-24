
//document.getElementById("count-el").innerText = 5;

let count = 0;

// console.log(count);


// 1. Create a variable, myAge, and set its value to your age

// 2. Log the myAge variable to the console

let myAge = 19;
// console.log(19);

// // cmd+k+c
// // let firstBatch = 5
// // let secondBatch = 7
// // let count = firstBatch + secondBatch
// // console.log(count)

// let myAge2 = 19;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70


// let bonusPoints = 50;

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

function trying (){

console.log("hello");

}



let count2 = 0;
const myIncLabel = document.getElementById("count-el");
let passangers = document.getElementById("passsangers");
function increment()
{
    count2++;
    
    myIncLabel.innerText = count2;


}

function save (){

    const mySaveLabel = document.getElementById("save-lbl");

    passangers.textContent += count2 + "-";  
    mySaveLabel.innerText = myIncLabel.textContent ;
    myIncLabel.innerText = 0;
    count2=0;
        
  
    


}




