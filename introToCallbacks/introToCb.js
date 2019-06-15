

class Clock {
  constructor() {
    this.d = new Date();
    this.p = Date.parse(this.d);
    this.displayDate = this.displayDate.bind(this);
  }
  
  displayDate() {
    this.p = this.p + 1000;
    let newTime = new Date(this.p);
    console.log(newTime.getHours()+":"+ newTime.getMinutes()+":" + newTime.getSeconds());
  }

  tick () { setInterval(this.displayDate, 1000); }

}

// let clock = new Clock();
// clock.tick();



// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function addNumbers(sum, numsLeft, callback) {
//   if (numsLeft === 0) {
//     callback(sum);
//     return 0;
//   }

//   reader.question("Enter a number:", function(userInput) {
//     sum = parseInt(userInput) + sum;
//     console.log(`Current sum: ${sum}`);
//     addNumbers(sum, numsLeft - 1, callback);
//   });
  
// }

// addNumbers(0, 3, sum => {
//   console.log(`Total Sum: ${sum}`) 
//   reader.close();  
//   }
// );


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(
    "Is " + el1 + " > " + el2 + " ?",
    function(answer) {
      if(answer === 'yes') { callback(true);}
      else { callback(false);
    } 
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    // console.log(i);
    if (i < arr.length-1) {
      askIfGreaterThan(arr[i], arr[i+1], (arg) => {
        if (arg) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      });
    }
    else {
      outerBubbleSortLoop(madeAnySwaps);
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  
  // return "yo";
  function outerBubbleSortLoop(madeAnySwaps) {

    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr); 
    }

  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3,2,1], function (arr) { 
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();

});

 