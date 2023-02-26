document.querySelector("#myButton").addEventListener("click", submit);

//read in the rating container so that the variable can be used to display later. 
let ratingContainer = document.querySelector(".main-container");
let resultContainer = document.querySelector(".main-container-2");

// select the span that the submitted number will be stored in.
let selectedNumberEl = document.querySelector("#selected-rating"); 


//read in the numbers variables from the html
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

//create a variable to store the selected rating
let userRating = 0;

// get the submitted rating that the user clicks and save it in a the userRating variable
function checkSelectedRating(){
    console.log("checking")
    if (one.checked == true){
        ratingContainer.style.display = "none";
        resultContainer.style.display = "block";  
        userRating = 1;
        selectedNumberEl.textContent = userRating;
    }else if(two.checked == true){
        ratingContainer.style.display = "none";
        resultContainer.style.display = "block"; 
        userRating = 2;
        selectedNumberEl.textContent = userRating;
    }else if(three.checked == true){
        ratingContainer.style.display = "none";
        resultContainer.style.display = "block"; 
        userRating = 3;
        selectedNumberEl.textContent = userRating;
    }else if(four.checked == true){
        ratingContainer.style.display = "none";
        resultContainer.style.display = "block"; 
        userRating = 4;
        selectedNumberEl.textContent = userRating;
    }else if(five.checked == true){
        ratingContainer.style.display = "none";
        resultContainer.style.display = "block"; 
        userRating = 5;
        selectedNumberEl.textContent = userRating;
    }else{
        alert("Please select a rating before you proceed");
    }
}

function submit() {
    alert("Redirecting: Thank you for submitting your form!");

    checkSelectedRating()
    
    ratingContainer.classList.toggle("hide");
    resultContainer.classList.toggle("show");
}