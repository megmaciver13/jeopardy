function makeButtons(category){
    for(var i = 1; i <= 5; i++){
        var button = document.createElement("BUTTON");
        button.style.order = i;
        button.style.question;
        button.classList = "question";
        button.classList.add("category"+ category.questionId);
        button.classList.add("button");
        button.classList.add("button"+i);
        document.querySelector(".game-board").appendChild(button);
        var text = 200 * (i);
        button.innerHTML = text;
    }
}
document.querySelector(".game-board").addEventListener("click", function(evt){
    var a = parseInt(evt.srcElement.classList[1].slice(8,9))
    var b = parseInt(evt.srcElement.classList[3].slice(6,7))
    var source = evt.srcElement;
    var currentCategory = allQuestions[a-1]
    var currentQuestions = allQuestions[b-1];
    var currentAnswer = allQuestions[b-1];
    var currentScore = allQuestions[b-1];
    var question = prompt(currentCategory.question[b-1]);
    if (question.toLowerCase() == currentCategory.answer[b-1]){
        alert("Congratulations you're correct")
        score += currentScore.questionValue[b-1];
        scoreHtml.innerHTML = `Your score is ${score}`;
    } else {
        alert(`Sorry, the correct answer is ${currentAnswer.answer[b-1]}`);
    }
    evt.srcElement.setAttribute("disabled", "disabled"); 
    evt.srcElement.classList.add("disabled");
})
var button = document.querySelectorAll(".button");
var scoreHtml = document.querySelector(".score");
var score = 0;

var allQuestions = [
    {
    questionId: 1,
    title: "potent-potables",
    question: ["During prohibition this family of rum makers invited Americans to Cuba for weekend-long parties?", 
                     "This Italian liqueur is made from tonda gentile hazelnuts grown in the Piedmont region?",
                     "In a play on a book title, its the liquor that precedes mockingbird in the name of a cocktail?",
                     "In its basic form, this cocktail is just rum, lime juice & sugar shaken over ice?",
                     "This type of whisky made in the U.K. may be blended or single-malt?"],
    answer: ["bacardi", "frangelico", "tequila", "daquiri", "scotch"],
    questionValue: [200, 400, 600, 800, 1000],
    },
    {
    questionId: 2,
    title: "Geography",
    question: ["How many U.S. states border the Gulf of Mexico?", 
                         "Which scientist sailed the HMS Beagle to South America, inlcuding a stop in the Galapagos Islands?",
                         "Which is the only U.S. state's capital city with not a single McDonald's fast food joint?",
                         "With over 35 million residents, what is the most populous city in the world?",
                         "Which fast-disappearing island nation receives 10% of its income from royalties from the use of its national internet domain suffix?"],
    answer: ["5", "charles darwin", "montpelier", "tokyo", "tuvalu"],
    questionValue: [200, 400, 600, 800, 1000],
    },
    {
    questionId: 3,
    title: "Music",
    question: ["Which inventor developed the solid-body electric guitar that made rock 'n roll possible?", 
                             `Which member of an acting family dated Taylor Swift, and is rumored to be the ex in her song, "We Are Never Getting Back Together"?`,
                             "Which one of Prince's songs reached highest on the music charts?",
                             `Who was the lead singer of the band "Queen"?`,
                             `Which band released the song, "Hey There Delilah"?`],
    answer: ["les paul", "jake gyllenhaal", "when doves cry", "freddie mercury", "plain white t's"],
    questionValue: [200, 400, 600, 800, 1000],
    },
    {
    questionId: 4,
    title: "Games",
    question: ["What was the first console video game that allowed the game to be saved?", 
                                 "In what year did Nintendo release its first game console in North America?",
                                 "In the world of video games, what does NES stand for?",
                                 "This popular blue character could run fast and collected gold rings?",
                                 "This popular character was Ash Ketchums sidekick?"],
    answer: ["legend of zelda", "1985", "nintendo entertainment system", "sonic the hedgehog", "pikachu"],
    questionValue: [200, 400, 600, 800, 1000],
    },
    {
    questionId: 5,
    title: "Animals",
    question: ["What is the collective name for a group of lions?", 
                                     "Which bird has the largest wingspan of any living bird?",
                                     "How many legs does a lobster have?",
                                     "Which large mammal's tail is so strong it can stand on it and lift its hind legs off the ground?",
                                     "Which ape gets its name from the Malay word meaning man of the forest?"],
    answer: ["pride", "albatross", "10", "kangaroo", "orangutan"],
    questionValue: [200, 400, 600, 800, 1000],
    },
    {
    questionId: 6,
    title: "potent-potables",
    question: ["Who was the narrator for English language version of the movie March of the Penguins?", 
                                        "In Meet The Parents, what is the name given to Robert de Niro's cat?",
                                        "Who played Irish gang lord Frank Costello in the film The Departed?",
                                        "In the 1994 movie The Shawshank Redemption one of the lead male roles was played by who?",
                                        "In the 1994 movie Pulp Fiction the lead female actress was who?"],
    answer: ["morgan freeman", "jinxie", "jack nicholson", "tim robbins", "uma thurman"],
    questionValue: [200, 400, 600, 800, 1000],
    }
]

makeButtons(allQuestions[0]);
makeButtons(allQuestions[1]);
makeButtons(allQuestions[2]);
makeButtons(allQuestions[3]);
makeButtons(allQuestions[4]);
makeButtons(allQuestions[5]);
