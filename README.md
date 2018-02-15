# Jeopardy

Hello and welcome to the game of Jeopardy.  Naturally, I mimicked the styling of the gameshow where the user chooses the category and value of the category to illicit a specific question.  Rules of the game are very simple, the user selects the value in a specific question and has one chance to say the correct answer.  If the user is correct, the value of the selection is added to their score, if they are incorrect, nothing happens and the box is disabled for both.  

Using some basic html/css I created the initial style and look and then used Javascript to make the actual board.  From there, I created a global event listener to the new div elements in the board and attached each to a corresponding data location in the object.  Using prompt so that the user can respond with an answer and attaching that to a variable, I was able to use a quick comparison that would verify it was the correct answer or if not, display the correct answer in an alert.

