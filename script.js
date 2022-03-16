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

let presentedQues = document.getElementById("question");
let presentedAns = document.getElementById("btnA");
let presentedAns2 = document.getElementById("btnB");
let presentedAns3 = document.getElementById("btnC");
let presentedAns4 = document.getElementById("btnD");



//array of obj? questions
let gameLogic = [
    {
        ques: "Who is Captain America's original best friend?",
        opts: {
            a: 'Bucky Barnes',
            b: 'Grogu',
            c: 'Bruce Banner',
            d: 'Sam Wilson'
        },
        answer: 'a'
    },
    {
        ques: "Where is Gamora from?",
        opts: {
            a: 'Earth',
            b: 'Zen-Whoberi',
            c: 'Xandar',
            d: 'Titan'
        },
        answer: 'Zen-Whoberi'
    },
    {
        ques: "Why was Killmonger angry with Wakanda?",
        opts: {
            a: 'They treated him as an outcast',
            b: 'He didn\'t recieve enough vibranium',
            c: 'They murdered his father',
            d: 'His birthday wasn\'t recognized',
        },
        answer : 'They murdered his father'
    },
    {
        ques: "Who says 'I can do this all day'?",
        opts: {
            a: 'Star Lord',
            b: 'Loki',
            c: 'Captain America',
            d: 'Doctor Strange',
        },
        answer: 'Captain America'
    },
    {
        ques: "Thor's Stormnbreaker was made on what planet?",
        opts: {
            a: 'Asgard',
            b: 'Vormir',
            c: 'Knowhere',
            d: 'Nidavellir',
        },
        answer: 'Nidavellir'
    },
    {
        ques: "What town did Wanda control?",
        opts: {
            a: 'Columbus, OH',
            b: 'Westview, NJ',
            c: 'Nashville, TN',
            d: 'Milwaukee, WI',
        },
        answer: 'Westview, NJ'
    },
    {
        ques: "In Infinity War, why did Hulk not come out?",
        opts: {
            a: 'He was tired from fighting on Sakaar',
            b: 'He thought Bruce should learn to protect himself',
            c: 'The aliens did not interest him',
            d: 'He wasn\'t ready to face Thanos after Hulk lost',
        },
        answer: 'He wasn\'t ready to face Thanos after Hulk lost'
    },
    {
        ques: "Where is Shang-Chi's Mother from?",
        opts: {
            a: 'Tove Lo ',
            b: 'Tahiti',
            c: 'Louisiana',
            d: 'Ta Lo',
        },
        answer: 'Ta Lo'
    },
    {
        ques: "How does Doctor Strange injure his hands?",
        opts: {
            a: 'car crash',
            b: 'fist fight',
            c: 'arthritis',
            d: 'burns',
        },
        answer: 'car crash'
    },
    {
        ques: "Before becoming Sorceror Supreme, what was Wong's position",
        opts: {
            a: 'guard',
            b: 'chef',
            c: 'receptionist',
            d: 'librarian',
        },
        answer: 'd'
    },
    
];

// let lastQues = gameLogic.length - 1;
let baseQuest = 0;
let counter = document.querySelector(".num");
// let counter = document.querySelector("#num");

// gameLogic[0].ques
function show(){
    
    let num0 = gameLogic[0];

    presentedQues.innerHTML = num0.ques;
    document.body.appendChild(presentedQues);

    presentedAns.innerHTML = num0.opts['a'];
    presentedAns2.innerHTML = num0.opts['b'];
    presentedAns3.innerHTML = num0.opts['c'];
    presentedAns4.innerHTML = num0.opts['d'];

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

    let num1 = gameLogic[1];

    presentedQues.innerHTML = num1.ques;

    presentedAns.innerHTML = num1.opts['a'];
    presentedAns2.innerHTML = num1.opts['b'];
    presentedAns3.innerHTML = num1.opts['c'];
    presentedAns4.innerHTML = num1.opts['d'];

    document.body.appendChild(presentedQues);

    presentedAns.addEventListener('click', wrongResult);
    presentedAns2.addEventListener('click', result2);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);
}


function result2() {
    alert('correct')
    counter.innerHTML = '3 '
    return show3()
}

function show3() {

    let num2 = gameLogic[2];

    presentedQues.innerHTML = num2.ques;

    presentedAns.innerHTML = num2.opts['a'];
    presentedAns2.innerHTML = num2.opts['b'];
    presentedAns3.innerHTML = num2.opts['c'];
    presentedAns4.innerHTML = num2.opts['d'];

    document.body.appendChild(presentedQues);

    presentedAns.addEventListener('click', result3);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

}

function result3()
    {
        alert('correct')
        counter.innerHTML = '4'
        return show4()
    }

function show4() {

    let num3 = gameLogic[3];
    
    presentedQues.innerHTML = num3.ques;
    
    presentedAns.innerHTML = num3.opts['a'];
    presentedAns2.innerHTML = num3.opts['b'];
    presentedAns3.innerHTML = num3.opts['c'];
    presentedAns4.innerHTML = num3.opts['d'];
    
    document.body.appendChild(presentedQues);
    
    presentedAns.addEventListener('click', result4);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

function result4() {
    alert('correct')
    counter.innerHTML = '5'
    return show5()
}

function show5() {

    let num4 = gameLogic[4];
    
    presentedQues.innerHTML = num4.ques;
    
    presentedAns.innerHTML = num4.opts['a'];
    presentedAns2.innerHTML = num4.opts['b'];
    presentedAns3.innerHTML = num4.opts['c'];
    presentedAns4.innerHTML = num4.opts['d'];
    
    document.body.appendChild(presentedQues);
    
    presentedAns.addEventListener('click', result5);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

function result5() {
    alert('correct')
    counter.innerHTML = '6'
    return show6()
}

function show6() {

    let num5 = gameLogic[5];
    
    presentedQues.innerHTML = num5.ques;
    
    presentedAns.innerHTML = num5.opts['a'];
    presentedAns2.innerHTML = num5.opts['b'];
    presentedAns3.innerHTML = num5.opts['c'];
    presentedAns4.innerHTML = num5.opts['d'];
    
    document.body.appendChild(presentedQues);
    
    presentedAns.addEventListener('click', result6);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

function result6() {
    alert('correct')
    counter.innerHTML = '7'
    return show7()
}

function show7() {

    let num6 = gameLogic[6];
    
    presentedQues.innerHTML = num6.ques;
    
    presentedAns.innerHTML = num6.opts['a'];
    presentedAns2.innerHTML = num6.opts['b'];
    presentedAns3.innerHTML = num6.opts['c'];
    presentedAns4.innerHTML = num6.opts['d'];
    
    document.body.appendChild(presentedQues);
    
    presentedAns.addEventListener('click', result7);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

function result7() {
    alert('correct')
    counter.innerHTML = '8'
    return show8()
}

function show8() {

    let num7 = gameLogic[7];
    
    presentedQues.innerHTML = num7.ques;
    
    presentedAns.innerHTML = num7.opts['a'];
    presentedAns2.innerHTML = num7.opts['b'];
    presentedAns3.innerHTML = num7.opts['c'];
    presentedAns4.innerHTML = num7.opts['d'];
    
    document.body.appendChild(presentedQues);
    
    presentedAns.addEventListener('click', result8);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

function result8() {
    alert('correct')
    counter.innerHTML = '9'
    return show9()
}
function show9() {

    let num8 = gameLogic[8];
    
    presentedQues.innerHTML = num8.ques;
    
    presentedAns.innerHTML = num8.opts['a'];
    presentedAns2.innerHTML = num8.opts['b'];
    presentedAns3.innerHTML = num8.opts['c'];
    presentedAns4.innerHTML = num8.opts['d'];
    
    document.body.appendChild(presentedQues);
    
    presentedAns.addEventListener('click', result9);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

function result9() {
    alert('correct')
    counter.innerHTML = '10'
    return show10()

function show10() {

    let num9 = gameLogic[9];
    
    presentedQues.innerHTML = num9.ques;
    
    presentedAns.innerHTML = num9.opts['a'];
    presentedAns2.innerHTML = num9.opts['b'];
    presentedAns3.innerHTML = num9.opts['c'];
    presentedAns4.innerHTML = num9.opts['d'];
    
    document.body.appendChild(presentedQues);
    
    presentedAns.addEventListener('click', result10);
    presentedAns2.addEventListener('click', wrongResult);
    presentedAns3.addEventListener('click', wrongResult);
    presentedAns4.addEventListener('click', wrongResult);

function result10() {
    alert('correct')
}
    
    // return show7()
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
