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

// gameLogic[0].ques
// function show(){

//     let num = gameLogic[0]
//     document.querySelector('#question').innerHTML = num.ques;

//     presentedAns.innerHTML = num1.opts['a'];
//         presentedAns2.innerHTML = num1.opts['b'];
//         presentedAns3.innerHTML = num1.opts['c'];
//         presentedAns4.innerHTML = num1.opts['d'];
    
// }
// for(let i = 0; i < gameLogic.length; i++) {
    
//     if(presentedQues == gameLogic[i].answer) {
//         score++;
//         counter.innerHTML = "2"
//         alert('correct');
//     }else {
//         alert('wrong')
//     }
// }

//     presentedAns.addEventListener('click', next);
//     presentedAns2.addEventListener('click', next);
//     presentedAns3.addEventListener('click', next);
//     presentedAns4.addEventListener('click', next);

//     function next () {
//         if(presentedQues ) {
//             alert('correct')
//             counter.innerHTML = '2'
//             return show2()
//             // next.target.getAttribute('btnA', 'disabled', 'disabled')
            
//         } else {
//             alert('incorrect') 
//             return show2()
//         }
//     }
    
//     // presentedAns =document.getElementById('response') ;
    
//         // } else {
//         //     alert ('incorrect')
//         //     counter.innerHTML = '2 '
//         //     return show2()
        
 

// // function result () {
// //     for(let i=0; i == gameLogic[0] && 'Bucky Barnes';)
// //     // if(gameLogic[0] == 'Bucky Barnes')
// //      {
// //         alert('correct')
//         // counter.innerHTML = '2 '
//         // return show2()
//     }
// // function result() {
// //     alert('correct')
// //     counter.innerHTML = '2 '
// //     return show2()
// // }
//     // for(let gameLogic = 0; )
// //     if(gameLogic[0] === 'a') {
// //         alert('correct');
// //     } else {
// //         alert('incorrect');
// //     }
    
// //     } 
// // ;

/*

code the previous tutor was showing me. I do need more practice in fetch but believe 
I know enough to be able to present it and answer basic questions on it


fetch('fetch.json').then(function (response){
    return response.json();
}).then(function (obj){
    if(presentedAns == (obj[0].answer)) {
        document.getElementById("btnA").style.color = 'green';
        counter.innerHTML = '2'
        show2()
    } else if (presentedAns !== 'a') {
        document.getElementById("btnA").style.color = 'red';
        counter.innerHTML = '2'
        show2()
    }
    document.getElementById('response').innerHTML = '<div>' + obj.opts + '</div>'

console.log(obj[1].ques)
*/

/*
To have the questions and selections render on screen, I did a 
    <body onload="show()"></body>.

This allowed for all questions to be rendered and show in proper order.

The output is once the fetch is commented back in and line168-172 is commmented out, no ques/ans are rendered

from here on down, the code is very similar. the differnce is farther down the alerts are still written in.
After a few questions are answered, you should see how the alerts compound.
I did attempt a disable but it disabled the whole button vs just the alert on any given function



the functions showX() changes the 'X' from 2-10

 the let numX = gameLogic[x] changes the 'X' from 0-9 as it is calling the index of objects in the array.

 I can change the showX to align with the numbering on the 
 let numX=gameLogic[X] if I have time
*/