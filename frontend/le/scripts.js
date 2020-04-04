console.log('Hello JavaScript!');

function clickmeFunction() {
  console.log('Calling clickmeFunction()');
  
  const myParagraph = document.getElementById("my-paragraph");
  myParagraph.style.fontSize = "25px";
  myParagraph.style.color = "red";
  myParagraph.textContent = 'Button was clicked!'
}

const clickmeButton = document.getElementById("clickme");

clickmeButton.addEventListener('click', clickmeFunction);

/* ------------- Custom JavaScript starts ---------------- */

// Write your own code here
//const event = new date().getElementById("current-date");

const currentDate = new Date();
const currentDateSpan = document.getElementById("current-date");

    currentDateSpan.textContent = currentDate;
    
    console.log(event.toString());


    function calculate(){
      console.log("calling calculate()");

      //loads the value the user inputed into the javascript variables
      var w = document.getElementById("weight").value;
      var h = document.getElementById("height").value;

      //actually calculates the BMI and converts cm to m
      var BMI = Math.round(w/(h/100*h/100));

      //prints the final result
      document.getElementById("final").innerHTML = "Your BMI IS...  " + BMI;
      }