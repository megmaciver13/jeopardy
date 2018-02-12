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
var scoreHtml = document.querySelector(".score");
var score = 0;

//creates the event listeners for all the events
category1Button1.addEventListener("click", getQuestion);
category1Button2.addEventListener("click", getQuestion2);
category1Button3.addEventListener("click", getQuestion3);
category1Button4.addEventListener("click", getQuestion4);
category1Button5.addEventListener("click", getQuestion5);

category2Button1.addEventListener("click", cat2GetQuestion);
category2Button2.addEventListener("click", cat2GetQuestion2);
category2Button3.addEventListener("click", cat2GetQuestion3);
category2Button4.addEventListener("click", cat2GetQuestion4);
category2Button5.addEventListener("click", cat2GetQuestion5);

category3Button1.addEventListener("click", cat3GetQuestion);
category3Button2.addEventListener("click", cat3GetQuestion2);
category3Button3.addEventListener("click", cat3GetQuestion3);
category3Button4.addEventListener("click", cat3GetQuestion4);
category3Button5.addEventListener("click", cat3GetQuestion5);

category4Button1.addEventListener("click", cat4GetQuestion);
category4Button2.addEventListener("click", cat4GetQuestion2);
category4Button3.addEventListener("click", cat4GetQuestion3);
category4Button4.addEventListener("click", cat4GetQuestion4);
category4Button5.addEventListener("click", cat4GetQuestion5);

category5Button1.addEventListener("click", cat5GetQuestion);
category5Button2.addEventListener("click", cat5GetQuestion2);
category5Button3.addEventListener("click", cat5GetQuestion3);
category5Button4.addEventListener("click", cat5GetQuestion4);
category5Button5.addEventListener("click", cat5GetQuestion5);


// Once the first button is clicked, obtains the question, and prompts the user to answer
// If correct, says well done, if not incorrect and ultimately disables the button.
function getQuestion() {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if (a.toLowerCase() === 'bacardi') {
        alert('Well Done. Correct answer')
        score += 200;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Bacardi')
    }
    category1Button1.classList.add("disabled");
    category1Button1.disabled = true;
}
function getQuestion2() {
    var a = prompt('This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?')
    if (a.toLowerCase() === 'frangelico') {
        alert('Well Done. Correct answer')
        score += 400;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Frangelico')
    }
    category1Button2.classList.add("disabled");
    category1Button2.disabled = true;
}
function getQuestion3() {
    var a = prompt('In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?')
    if (a.toLowerCase() === 'tequila') {
        alert('Well Done. Correct answer')
        score += 600;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Tequila')
    }
    category1Button3.classList.add("disabled");
    category1Button3.disabled = true;
}
function getQuestion4() {
    var a = prompt('In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?')
    if (a.toLowerCase() === 'daquiri') {
        alert('Well Done. Correct answer')
        score += 800;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is daquiri')
    }
    category1Button4.classList.add("disabled");
    category1Button4.disabled = true;
}
function getQuestion5() {
    var a = prompt('This type of whisky made in the U.K. may be blended or single-malt?')
    if (a.toLowerCase() === 'scotch') {
        alert('Well Done. Correct answer')
        score += 1000;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Scotch')
    }
    category1Button5.classList.add("disabled");
    category1Button5.disabled = true;
}
//grabs the category 2 questions and answers
function cat2GetQuestion() {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if (a.toLowerCase() === 'bacardi') {
        alert('Well Done. Correct answer')
        score += 200;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Bacardi')
    }
    category2Button1.classList.add("disabled");
    category2Button1.disabled = true;
}
function cat2GetQuestion2() {
    var a = prompt('This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?')
    if (a.toLowerCase() === 'frangelico') {
        alert('Well Done. Correct answer')
        score += 400;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Frangelico')
    }
    category2Button2.classList.add("disabled");
    category2Button2.disabled = true;
}
function cat2GetQuestion3() {
    var a = prompt('In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?')
    if (a.toLowerCase() === 'tequila') {
        alert('Well Done. Correct answer')
        score += 600;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Tequila')
    }
    category2Button3.classList.add("disabled");
    category2Button3.disabled = true;
}
function cat2GetQuestion4() {
    var a = prompt('In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?')
    if (a.toLowerCase() === 'daquiri') {
        alert('Well Done. Correct answer')
        score += 800;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is daquiri')
    }
    category2Button4.classList.add("disabled");
    category2Button4.disabled = true;
}
function cat2GetQuestion5() {
    var a = prompt('This type of whisky made in the U.K. may be blended or single-malt?')
    if (a.toLowerCase() === 'scotch') {
        alert('Well Done. Correct answer')
        score += 1000;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Scotch')
    }
    category2Button5.classList.add("disabled");
    category2Button5.disabled = true;
}
//grabs the category 3 questions and answers for button clicks
function cat3GetQuestion() {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if (a.toLowerCase() === 'bacardi') {
        alert('Well Done. Correct answer')
        score += 200;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Bacardi')
    }
    category3Button1.classList.add("disabled");
    category3Button1.disabled = true;
}
function cat3GetQuestion2() {
    var a = prompt('This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?')
    if (a.toLowerCase() === 'frangelico') {
        alert('Well Done. Correct answer')
        score += 400;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Frangelico')
    }
    category3Button2.classList.add("disabled");
    category3Button2.disabled = true;
}
function cat3GetQuestion3() {
    var a = prompt('In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?')
    if (a.toLowerCase() === 'tequila') {
        alert('Well Done. Correct answer')
        score += 600;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Tequila')
    }
    category3Button3.classList.add("disabled");
    category3Button3.disabled = true;
}
function cat3GetQuestion4() {
    var a = prompt('In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?')
    if (a.toLowerCase() === 'daquiri') {
        alert('Well Done. Correct answer')
        score += 800;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is daquiri')
    }
    category3Button4.classList.add("disabled");
    category3Button4.disabled = true;
}
function cat3GetQuestion5() {
    var a = prompt('This type of whisky made in the U.K. may be blended or single-malt?')
    if (a.toLowerCase() === 'scotch') {
        alert('Well Done. Correct answer')
        score += 1000;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Scotch')
    }
    category3Button5.classList.add("disabled");
    category3Button5.disabled = true;
}
//grabs the category 4 questions and answers for button clicks
function cat4GetQuestion() {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if (a.toLowerCase() === 'bacardi') {
        alert('Well Done. Correct answer')
        score += 200;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Bacardi')
    }
    category4Button1.classList.add("disabled");
    category4Button1.disabled = true;
}
function cat4GetQuestion2() {
    var a = prompt('This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?')
    if (a.toLowerCase() === 'frangelico') {
        alert('Well Done. Correct answer')
        score += 400;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Frangelico')
    }
    category4Button2.classList.add("disabled");
    category4Button2.disabled = true;
}
function cat4GetQuestion3() {
    var a = prompt('In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?')
    if (a.toLowerCase() === 'tequila') {
        alert('Well Done. Correct answer')
        score += 600;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Tequila')
    }
    category4Button3.classList.add("disabled");
    category4Button3.disabled = true;
}
function cat4GetQuestion4() {
    var a = prompt('In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?')
    if (a.toLowerCase() === 'daquiri') {
        alert('Well Done. Correct answer')
        score += 800;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is daquiri')
    }
    category4Button4.classList.add("disabled");
    category4Button4.disabled = true;
}
function cat4GetQuestion5() {
    var a = prompt('This type of whisky made in the U.K. may be blended or single-malt?')
    if (a.toLowerCase() === 'scotch') {
        alert('Well Done. Correct answer')
        score += 1000;
        scoreHtml.innerHTML = `Your score is ${score}`;

    }
    else {
        alert('Sorry, incorrect, it is Scotch')
    }
    category4Button5.classList.add("disabled");
    category4Button5.disabled = true;
}
//grabs the category 5 questions and answers for button clicks
function cat5GetQuestion() {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if (a.toLowerCase() === 'bacardi') {
        alert('Well Done. Correct answer')
        score += 200;
        scoreHtml.innerHTML = `Your score is ${score}`; //adds score to html

    }
    else {
        alert('Sorry, incorrect, it is Bacardi')
    }
    category5Button1.classList.add("disabled");
    category5Button1.disabled = true;
}
function cat5GetQuestion2() {
    var a = prompt('This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?')
    if (a.toLowerCase() === 'frangelico') {
        alert('Well Done. Correct answer')
        score += 400;
        scoreHtml.innerHTML = `Your score is ${score}`; //adds score to html

    }
    else {
        alert('Sorry, incorrect, it is Frangelico')
    }
    category5Button2.classList.add("disabled");
    category5Button2.disabled = true;
}
function cat5GetQuestion3() {
    var a = prompt('In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?')
    if (a.toLowerCase() === 'tequila') {
        alert('Well Done. Correct answer')
        score += 600;
        scoreHtml.innerHTML = `Your score is ${score}`;   //adds score and displays in html

    }
    else {
        alert('Sorry, incorrect, it is Tequila')
    }
    category5Button3.classList.add("disabled");
    category5Button3.disabled = true;
}
function cat5GetQuestion4() {
    var a = prompt('In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?')
    if (a.toLowerCase() === 'daquiri') {
        alert('Well Done. Correct answer')
        score += 800;
        scoreHtml.innerHTML = `Your score is ${score}`;  //adds score and displays in html

    }
    else {
        alert('Sorry, incorrect, it is daquiri')
    }
    category5Button4.classList.add("disabled");
    category5Button4.disabled = true;
}
function cat5GetQuestion5() {
    var a = prompt('This type of whisky made in the U.K. may be blended or single-malt?')
    if (a.toLowerCase() === 'scotch') {
        alert('Well Done. Correct answer')
        score += 1000;
        scoreHtml.innerHTML = `Your score is ${score}`; //adds score and displays in html

    }
    else {
        alert('Sorry, incorrect, it is Scotch')
    }
    category5Button5.classList.add("disabled");
    category5Button5.disabled = true;
}
