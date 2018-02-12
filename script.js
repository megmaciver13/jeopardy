// var categories = ["World Geography", "Food", "Movies", "Games", "Potent Potables"];
var category1Button1 = document.querySelector(".category1 .button1");
var category1Button2 = document.querySelector(".category1 .button2");
var category1Button3 = document.querySelector(".category1 .button3");
var category1Button4 = document.querySelector(".category1 .button4");
var category1Button5 = document.querySelector(".category1 .button5");
var category2Button1 = document.querySelector(".category2 .button1");
var category2Button2 = document.querySelector(".category2 .button2");
var category2Button3 = document.querySelector(".category2 .button3");
var category2Button4 = document.querySelector(".category2 .button4");
var category2Button5 = document.querySelector(".category2 .button5");
var category3Button1 = document.querySelector(".category3 .button1");
var category3Button2 = document.querySelector(".category3 .button2");
var category3Button3 = document.querySelector(".category3 .button3");
var category3Button4 = document.querySelector(".category3 .button4");
var category3Button5 = document.querySelector(".category3 .button5");
var category4Button1 = document.querySelector(".category4 .button1");
var category4Button2 = document.querySelector(".category4 .button2");
var category4Button3 = document.querySelector(".category4 .button3");
var category4Button4 = document.querySelector(".category4 .button4");
var category4Button5 = document.querySelector(".category4 .button5");
var category5Button1 = document.querySelector(".category5 .button1");
var category5Button2 = document.querySelector(".category5 .button2");
var category5Button3 = document.querySelector(".category5 .button3");
var category5Button4 = document.querySelector(".category5 .button4");
var category5Button5 = document.querySelector(".category5 .button5");
var score = 0;

category1Button1.addEventListener("click", getQuestion);
category1Button2.addEventListener("click", getQuestion2);
category1Button3.addEventListener("click", getQuestion3);
category1Button4.addEventListener("click", getQuestion4);
category1Button5.addEventListener("click", getQuestion5);

category2Button1.addEventListener("click", cat2GetQuestion);
category2Button2.addEventListener("click", cat2getQuestion2);
category2Button3.addEventListener("click", cat2getQuestion3);
category2Button4.addEventListener("click", cat2getQuestion4);
category2Button5.addEventListener("click", cat2getQuestion5);

category3Button1.addEventListener("click", cat3GetQuestion);
category3Button2.addEventListener("click", cat3getQuestion2);
category3Button3.addEventListener("click", cat3getQuestion3);
category3Button4.addEventListener("click", cat3getQuestion4);
category3Button5.addEventListener("click", cat3getQuestion5);


// Once the first button is clicked, obtains the question, and prompts the user to answer
// If correct, says well done, if not incorrect and ultimately disables the button.
function getQuestion () {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if(a.toLowerCase() === 'bacardi'){
        alert('Well Done. Correct answer')
        socre += 200;
    }
    else{
        alert('Sorry, incorrect, it is Bacardi')
    }
    category1Button1.classList.add("disabled");
    category1Button1.disabled = true;
}
function getQuestion2 () {
    var a = prompt('This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?')
    if(a.toLowerCase() === 'frangelico'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is Frangelico')
    }
    category1Button2.classList.add("disabled");
    category1Button2.disabled = true;
}
function getQuestion3 () {
    var a = prompt('In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?')
    if(a.toLowerCase() === 'tequila'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is Tequila')
    }
    category1Button3.classList.add("disabled");
    category1Button3.disabled = true;
}
function getQuestion4 () {
    var a = prompt('In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?')
    if(a.toLowerCase() === 'daquiri'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is daquiri')
    }
    category1Button4.classList.add("disabled");
    category1Button4.disabled = true;
}
function getQuestion5 () {
    var a = prompt('This type of whisky made in the U.K. may be blended or single-malt?')
    if(a.toLowerCase() === 'scotch'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is Scotch')
    }
    category1Button5.classList.add("disabled");
    category1Button5.disabled = true;
}

function cat2GetQuestion () {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if(a.toLowerCase() === 'bacardi'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is Bacardi')
    }
    category1Button1.classList.add("disabled");
    category1Button1.disabled = true;
}
function cat2GetQuestion2 () {
    var a = prompt('This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?')
    if(a.toLowerCase() === 'frangelico'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is Frangelico')
    }
    category1Button2.classList.add("disabled");
    category1Button2.disabled = true;
}
function cat2GetQuestion3 () {
    var a = prompt('In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?')
    if(a.toLowerCase() === 'tequila'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is Tequila')
    }
    category1Button3.classList.add("disabled");
    category1Button3.disabled = true;
}
function cat2GetQuestion4 () {
    var a = prompt('In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?')
    if(a.toLowerCase() === 'daquiri'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is daquiri')
    }
    category1Button4.classList.add("disabled");
    category1Button4.disabled = true;
}
function cat2GetQuestion5 () {
    var a = prompt('This type of whisky made in the U.K. may be blended or single-malt?')
    if(a.toLowerCase() === 'scotch'){
        alert('Well Done. Correct answer')
    }
    else{
        alert('Sorry, incorrect, it is Scotch')
    }
    category1Button5.classList.add("disabled");
    category1Button5.disabled = true;
}