// console.log('I\'m working!')

//game.html
let presentedQues = document.getElementById("question");
let checkAns = document.getElementById("checkID");

let presentedAns = document.getElementById("btnA");
let presentedAns2 = document.getElementById("btnB");
let presentedAns3 = document.getElementById("btnC");
let presentedAns4 = document.getElementById("btnD");

let response = document.getElementById("response");

let counter = document.querySelector(".num");
let score = 0;
// console.log(result)
// let total=document.getElementById('resNum');

function newBtn() {
    //counter is 1 ahead of index for the question. this levels the counter to match with the index
    let quesID = counter.innerHTML - 1
    //targeting the array,index, answer for that ques
    let ans = gameLogic[quesID].answer
    if(ans == selected) {
        alert('correct!')
        score+= 1
        console.log(score)
    } else {
        alert('incorrect!')
    } };

//if we're on x ques and and opt x is selected, check answer
//func called, will pull what ques you're on 
//what ques are we on. for x ques, pull from array


/*
array of objects. I'm unsure if I need this code here as of now. 
In fetch.json, this array of objects is there and it does populate in the browser console.
However, the questions don't populate on screen. More info on why, in the functions below.
*/
let gameLogic = [
    {
        id: 0,
        ques: "Who is Captain America's original best friend?",
        opts: {
            a: 'Bucky Barnes',
            b: 'Grogu',
            c: 'Bruce Banner',
            d: 'Sam Wilson'
        },
        answer: 'a',
    },
    {
        id: 1,
        ques: "Where is Gamora from?",
        opts: {
            a: 'Earth',
            b: 'Zen-Whoberi',
            c: 'Xandar',
            d: 'Titan'
        },
        answer: 'b'
    },
    {
        id: 2,
        ques: "Why was Killmonger angry with Wakanda?",
        opts: {
            a: 'They treated him as an outcast',
            b: 'He didn\'t recieve enough vibranium',
            c: 'They murdered his father',
            d: 'His birthday wasn\'t recognized',
        },
        answer : 'c'
    },
    {
        id: 3,
        ques: "Who says 'I can do this all day'?",
        opts: {
            a: 'Star Lord',
            b: 'Loki',
            c: 'Captain America',
            d: 'Doctor Strange',
        },
        answer: 'c'
    },
    {
        id: 4,
        ques: "Thor's Stormbreaker was made on what planet?",
        opts: {
            a: 'Asgard',
            b: 'Vormir',
            c: 'Knowhere',
            d: 'Nidavellir',
        },
        answer: 'd'
    },
    {
        id: 5,
        ques: "What town did Wanda control?",
        opts: {
            a: 'Columbus, OH',
            b: 'Westview, NJ',
            c: 'Nashville, TN',
            d: 'Milwaukee, WI',
        },
        answer: 'b'
    },
    {
        id: 6,
        ques: "In Infinity War, why did Hulk not come out?",
        opts: {
            a: 'He was tired from fighting on Sakaar',
            b: 'He thought Bruce should learn to protect himself',
            c: 'The aliens did not interest him',
            d: 'He wasn\'t ready to face Thanos after Hulk lost',
        },
        answer: 'd'
    },
    {
        id: 7,
        ques: "Where is Shang-Chi's Mother from?",
        opts: {
            a: 'Tove Lo ',
            b: 'Tahiti',
            c: 'Louisiana',
            d: 'Ta Lo',
        },
        answer: 'd'
    },
    {
        id: 8,
        ques: "How does Doctor Strange injure his hands?",
        opts: {
            'a': 'car crash',
            'b': 'fist fight',
            'c': 'arthritis',
            'd': 'burns',
        },
        answer: 'a'
    },
    {
        id: 9,
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

function loop() {
    show(counter.innerHTML++)
    if(counter.innerHTML > 10) {
        window.location='results.html';
        let showScore = document.getElementsByClassName("recorded");
        showScore.innerHTML=toString(score).padStart('0')
    }
}

let selected = ""

function show(plus) {
    //workaround to not re-write the onclick=show in html
//plus is the num of ques to show
if(plus == undefined) {
    plus = 0
}
if(plus >= gameLogic.length) {
    loop
    // resultsPage
    //put results where ques used to be 
} else {

    let num0 = gameLogic[plus]


    document.querySelector('#question').innerHTML = num0.ques;


    presentedAns.innerHTML = num0.opts['a'];
    presentedAns2.innerHTML = num0.opts['b'];
    presentedAns3.innerHTML = num0.opts['c'];
    presentedAns4.innerHTML = num0.opts['d'];

    presentedAns.addEventListener('click', () => {
        presentedAns.style.backgroundColor = "gold";
    presentedAns2.style.backgroundColor = "purple";
    presentedAns3.style.backgroundColor = "purple";
    presentedAns4.style.backgroundColor = "purple";
    selected = 'a'
    })

presentedAns2.addEventListener('click', () => {
    presentedAns2.style.backgroundColor = "gold";
presentedAns.style.backgroundColor = "purple";
presentedAns3.style.backgroundColor = "purple";
presentedAns4.style.backgroundColor = "puple";
selected = 'b'
})
presentedAns3.addEventListener('click', () => {
    presentedAns3.style.backgroundColor = "gold";
presentedAns2.style.backgroundColor = "purple";
presentedAns.style.backgroundColor = "purple";
presentedAns4.style.backgroundColor = "purple";
selected = 'c'
})
presentedAns4.addEventListener('click', () => {
    presentedAns4.style.backgroundColor = "gold";
presentedAns2.style.backgroundColor = "purple";
presentedAns3.style.backgroundColor = "purple";
presentedAns.style.backgroundColor = "purple";
selected = 'd'
})
    }

}
//     