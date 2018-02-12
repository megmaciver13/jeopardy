var categories = ["World Geography", "Food", "Movies", "Games", "Potent Potables"];
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

function getQuestion () {
    var a = prompt('During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?')
    if(a === 'bacardi'){
        console.log(typeof a);
        alert('Well Done. Correct answer')
        console.log(parseInt(category1Button1.value));
    }
    else{
        alert('Sorry, incorrect, it is Bacardi')
    }

}
