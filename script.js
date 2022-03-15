console.log('I\'m working!')

//index.html
/*
seems it's not needed as we linked game.html to the button directly
function begin(){
let startBtn = document.querySelector("#start")

startBtn.addEventListener("click", startGame )

function startGame () {
    alert('game has begun!')
}
}
*/

//game.html

//should change 1/10 to 2/10
// let flashCards = document.querySelector(".num")
// let answer = document.querySelector("#bucky")

// answer.addEventListener('click', answerCourse)


// function answerCourse() {
//     alert('firing!')
// }

const respA = document.querySelector("#a")
const respB = document.querySelector("#b")
const respC = document.querySelector("#c")
const respD = document.querySelector("#d")



//array of obj? questions
let gameLogic = [
    {
        ques: "Who is Captain America's original best friend?",
        opts: {
            a: 'bucky',
            b: 'grogu',
            c: 'banner',
            d: 'sam'
        },
        answer: 'a'
    },
    {
        ques: "Where is Gamora from?",
        opts: {
            a: 'earth',
            b: 'ragnorok',
            c: 'xandar',
            d: 'titan'
        },
        answer: 'earth'
    }
    
];

// let lastQues = gameLogic.length - 1;
let baseQuest = 0;
let counter = document.querySelector(".num");
// let counter = document.querySelector("#num");

// gameLogic[0].ques
function show(){
    
    let z = gameLogic[0];

    let presentedQues = document.getElementById("question");
    let presentedAns = document.getElementById("btnA");
    let presentedAns2 = document.getElementById("btnB");
    let presentedAns3 = document.getElementById("btnC");
    let presentedAns4 = document.getElementById("btnD");


    presentedQues.innerHTML = z.ques;
    document.body.appendChild(presentedQues);


    presentedAns.innerHTML = z.opts['a'];
    presentedAns2.innerHTML = z.opts['b'];
    presentedAns3.innerHTML = z.opts['c'];
    presentedAns4.innerHTML = z.opts['d'];

    presentedAns.addEventListener('click', result);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);
//div id=questions    

    // let presentedQues = document.createElement("button");
    // presentedQues.innerHTML = z.ques;
    // presentedQues.ques.innerHTML = z.ques;
    // presentedQues.respA.innerHTML = z.respA;
    

    // '<p> ${presentedQues.gameLogic} </p>'
}

function wrongResult() {
    alert('incorrect')
}
function result() {
    alert('correct')
    counter.innerHTML = '2 '
    return show2()
}

function show2() {

    let z = gameLogic[1];

    let presentedQues = document.getElementById("question");
    let presentedAns = document.getElementById("btnA");
    let presentedAns2 = document.getElementById("btnB");
    let presentedAns3 = document.getElementById("btnC");
    let presentedAns4 = document.getElementById("btnD");

    presentedQues.innerHTML = z.ques;

    presentedAns.innerHTML = z.opts['a'];
    presentedAns2.innerHTML = z.opts['b'];
    presentedAns3.innerHTML = z.opts['c'];
    presentedAns4.innerHTML = z.opts['d'];

    document.body.appendChild(presentedQues);

    presentedAns.addEventListener('click', result);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);
}

// function quesArr() {
//     for(let gameLogic = 0; gameLogic == a; ) {
//         console.log('bucky')
//     }
// }
    
    // let flashCards = document.querySelector(".num")
     
//     ques1: function() {
//         let answer1 = document.querySelector(".a")
//         answer1.addEventListener('click', true)
//         // result1 = () => {
//         //     if(answer1 === 'click') {
//         //         console.log('correct')
//         //     }
//         // }
//         if(answer1 == true) {
//             console.log('correct')
//         } else {
//             console.log('incorrect')
//         }
//     } 
// }
