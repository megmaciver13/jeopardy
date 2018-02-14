class GameBoard {
    constructor (title, button){
        this.title = title;
        this.button = button;
    }
}
 
class Questions(){
    constructor(questionId, question, answer, userInput, questionValue){
        this.questionId = questionId;
        this.question = 
    }

}
var category1 = new Questions();


category1 = {
        questionId: 1,
        title: "potent-potables",
        question: ["During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?", 
                         "This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?",
                         "In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?",
                         "In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?",
                         "This type of whisky made in the U.K. may be blended or single-malt?"],
        answer: ["bacardi", "frangelico", "tequila", "daquiri", "scotch"],
        questionValue: [200, 400, 600, 800, 1000],
        }
var category2 = {
        questionId: 2,
        title: "food",
        question: ["During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?", 
                             "This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?",
                             "In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?",
                             "In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?",
                             "This type of whisky made in the U.K. may be blended or single-malt?"],
        answer: ["bacardi", "frangelico", "tequila", "daquiri", "scotch"],
        questionValue: [200, 400, 600, 800, 1000],
            }
var category3 = {
        questionId: 3,
        title: "potent-potables",
        question: ["During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?", 
                                 "This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?",
                                 "In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?",
                                 "In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?",
                                 "This type of whisky made in the U.K. may be blended or single-malt?"],
        answer: ["bacardi", "frangelico", "tequila", "daquiri", "scotch"],
        questionValue: [200, 400, 600, 800, 1000],
                }
var category4 = {
        questionId: 4,
        title: "potent-potables",
        question: ["During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?", 
                                     "This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?",
                                     "In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?",
                                     "In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?",
                                     "This type of whisky made in the U.K. may be blended or single-malt?"],
        answer: ["bacardi", "frangelico", "tequila", "daquiri", "scotch"],
        questionValue: [200, 400, 600, 800, 1000],
                    }
var category5 = {
        questionId: 5,
        title: "potent-potables",
        question: ["During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?", 
                                         "This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?",
                                         "In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?",
                                         "In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?",
                                         "This type of whisky made in the U.K. may be blended or single-malt?"],
        answer: ["bacardi", "frangelico", "tequila", "daquiri", "scotch"],
        questionValue: [200, 400, 600, 800, 1000],
                        }
    
for (var i = 0; i < this.question.length; i++) {
  document.querySelector(".button" + k).onclick = function (){
    var a = prompt(this.question[k]);
    if (a.toLowerCase() === category1.answer[k].toLowerCase() ){
        alert('Well Done. Correct answer')
        score += category1.questionValue[k];
        scoreHtml.innerHTML = `Your score is ${score}`;
    }   else {
        alert('Sorry, incorrect, it is Frangelico')
        }
        button[k].classList.add("disabled");
        button[k].disabled = true;
    }
    }
