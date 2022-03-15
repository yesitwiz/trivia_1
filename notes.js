/*
Whiteboarding

Start button.addEventListener

A marker showing what question your on and the total of questions in a corner  '3/10'. 
However this will populate only after the start button has been selected

Question fades in first. Multiple choice fades in after. I’m thinking for the answer options to be laid out horizontally. If possible would like to make each question look like a flash card
Keeping with that flash card desire, once an answer is chosen, I want an image to populate.

If they got it correct, happy mcu character. If incorrect, random fictional sad character. The design would be to answer and the card flips over showing image.

Once trivia is complete, show screen asking if they want to try again or see results

The results page should be a simple listed sheet showcase 1-10. The wrong selected answer highlighted in red and the correct answer highlighted in green

At the bottom, add reset button
*/

/*
Pseudocoding - 3/7/22

HTML inital layout - 
game title - "trivia - Assemble"

<h2> So you think you know marvel?
<h3> come test your MCU knowledge!
<h3> Select your answers and stay until the end for your score!
<br>
<button> start

start btn :
HTML - <button id="start">Start</button>
JS- let startBtn = document.querySelector("#start")

function begin() {
startBtn.addEventListener('click', ) {

}
}
brush up on event listeners

<br>

reset btn :
HTML - <button id="reset">Reset</button>
JS - let resetBtn = document.querySelector("#start")
resetBtn.addEventListener('click, )


*/

/*
Tricks I picked up along the way
JS - create P/Div/Img/Button/Canvas -
for all other html you want to create, createElement('tag name', 'content')
*/

/*
3/8/22

What was accomplished from 3/7/22 goals? 
- initial HTML layout

what is left to accomplish from previous goal? 
- reset button

Today's goals?
- linking different html doc's to buttons

in js,
 function ques2() { 
     createP('hello')
     if(answer === i[3]){
         alert('correct!')
     }else {
         return ('incorrect!')
     }

}

on the counter, i could make the <span> into a let in js to change the num

questions - 

we have all html linked. how can we get all html files to work with the one file
do we make everything occourance a function so they all have their own scope?
let's try a couple. will js try to run functions that have nothing to do with their assigned scope?


*/