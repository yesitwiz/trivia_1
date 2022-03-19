console.log('I\'m working!')

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

function newBtn() {
    console.log(counter.innerHTML);
    let quesID = counter.innerHTML - 1
    let ans = gameLogic[quesID].answer
    console.log(ans)
    console.log(selected)
    if(ans == selected) {
        alert('correct**')
    } else {
        alert('incorrect**')
    } 
};

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
}

let selected = ""

function show(plus) {
//plus is the num of qus to show
if(plus == undefined) {
    plus = 0
}
if(plus >= gameLogic.length) {
    resultsPage
    //put results where ques used to be 
} else {

    let num0 = gameLogic[plus]


    document.querySelector('#question').innerHTML = num0.ques;


    presentedAns.innerHTML = num0.opts['a'];
    presentedAns2.innerHTML = num0.opts['b'];
    presentedAns3.innerHTML = num0.opts['c'];
    presentedAns4.innerHTML = num0.opts['d'];

    presentedAns.addEventListener('click', () => {
        presentedAns.style.backgroundColor = "green";
    presentedAns2.style.backgroundColor = "red";
    presentedAns3.style.backgroundColor = "red";
    presentedAns4.style.backgroundColor = "red";
    selected = 'a'
    })

presentedAns2.addEventListener('click', () => {
    presentedAns2.style.backgroundColor = "green";
presentedAns.style.backgroundColor = "red";
presentedAns3.style.backgroundColor = "red";
presentedAns4.style.backgroundColor = "red";
selected = 'b'
})
presentedAns3.addEventListener('click', () => {
    presentedAns3.style.backgroundColor = "green";
presentedAns2.style.backgroundColor = "red";
presentedAns.style.backgroundColor = "red";
presentedAns4.style.backgroundColor = "red";
selected = 'c'
})
presentedAns4.addEventListener('click', () => {
    presentedAns4.style.backgroundColor = "green";
presentedAns2.style.backgroundColor = "red";
presentedAns3.style.backgroundColor = "red";
presentedAns.style.backgroundColor = "red";
selected = 'd'
})
    }

}
    function result1() {
    // if(presentedAns == (obj[0].answer)) {
        // document.getElementById("btnA").style.color = 'green';
        counter.innerHTML = '2'
        show2()
    }

function show2() {
    console.log("show2")

    let num1 = gameLogic[1];

    document.querySelector('#question').innerHTML = num1.ques;

    presentedAns.innerHTML = num1.opts['a'];
    presentedAns2.innerHTML = num1.opts['b'];
    presentedAns3.innerHTML = num1.opts['c'];
    presentedAns4.innerHTML = num1.opts['d'];

    presentedAns.addEventListener('click', result2);
    presentedAns2.addEventListener('click', result2);
    presentedAns3.addEventListener('click', result2);
    presentedAns4.addEventListener('click', result2);

//set up one button. what question are we on? (a,b,c)

function result2() {
        if(presentedAns == 'Zen-Whoberi') {
            document.getElementById("btnB").style.color = 'green';
            counter.innerHTML = '3'
            show2()
        } else if (presentedAns !== 'Zen-Whoberi') {
            document.getElementById("btnA").style.color = 'red';
            counter.innerHTML = '3'
            show3()
        }
//     alert('correct')
//     counter.innerHTML = '3 '
//     show3()
// }
// function wrongResult2() {
//     alert('incorrect')
//     counter.innerHTML = '3'
//     show3()
}
}

function show3() {
    console.log("show3")


    let num2 = gameLogic[2];

    document.querySelector('#question').innerHTML = num2.ques;

    presentedAns.innerHTML = num2.opts['a'];
    presentedAns2.innerHTML = num2.opts['b'];
    presentedAns3.innerHTML = num2.opts['c'];
    presentedAns4.innerHTML = num2.opts['d'];

    presentedAns.addEventListener('click', result3);
    presentedAns2.addEventListener('click', result3);
    presentedAns3.addEventListener('click', result3);
    presentedAns4.addEventListener('click', result3);
function result3()
    {
        alert('correct')
        counter.innerHTML = '4'
        show4()
    }
// function wrongResult3() {
//         alert('incorrect')
//         counter.innerHTML = '4'
//         show4()
//     }
}


function show4() {

    let num3 = gameLogic[3];
    
    document.querySelector('#question').innerHTML = num3.ques;
    
    presentedAns.innerHTML = num3.opts['a'];
    presentedAns2.innerHTML = num3.opts['b'];
    presentedAns3.innerHTML = num3.opts['c'];
    presentedAns4.innerHTML = num3.opts['d'];
    
    presentedAns.addEventListener('click', result4);
    presentedAns2.addEventListener('click', result4);
    presentedAns3.addEventListener('click', result4);
    presentedAns4.addEventListener('click', result4);

function result4() {
    // alert('correct')
    counter.innerHTML = '5'
    show5()
}
// function wrongResult4() {
//     // alert('incorrect')
//     counter.innerHTML = '5'
//     show5()
// }
}

function show5() {

    let num4 = gameLogic[4];
    
    document.querySelector('#question').innerHTML = num4.ques;
    
    presentedAns.innerHTML = num4.opts['a'];
    presentedAns2.innerHTML = num4.opts['b'];
    presentedAns3.innerHTML = num4.opts['c'];
    presentedAns4.innerHTML = num4.opts['d'];
    
    presentedAns.addEventListener('click', wrongResult5);
    presentedAns2.addEventListener('click', wrongResult5);
    presentedAns3.addEventListener('click', wrongResult5);
    presentedAns4.addEventListener('click', result5);

function result5() {
    alert('correct')
    counter.innerHTML = '6'
    show6()
}
function wrongResult5() {
    alert('incorrect')
    counter.innerHTML = '6'
    show6()
}
}

function show6() {

    let num5 = gameLogic[5];
    
    document.querySelector('#question').innerHTML = num5.ques;
    
    presentedAns.innerHTML = num5.opts['a'];
    presentedAns2.innerHTML = num5.opts['b'];
    presentedAns3.innerHTML = num5.opts['c'];
    presentedAns4.innerHTML = num5.opts['d'];
    
    presentedAns.addEventListener('click', wrongResult6);
    presentedAns2.addEventListener('click', result6);
    presentedAns3.addEventListener('click', wrongResult6);
    presentedAns4.addEventListener('click', wrongResult6);

function result6() {
    alert('correct')
    counter.innerHTML = '7'
    show7()
}
function wrongResult6() {
    alert('incorrect')
    counter.innerHTML = '7'
    show7()
}
}

function show7() {

    let num6 = gameLogic[6];
    
    document.querySelector('#question').innerHTML = num6.ques;
    
    presentedAns.innerHTML = num6.opts['a'];
    presentedAns2.innerHTML = num6.opts['b'];
    presentedAns3.innerHTML = num6.opts['c'];
    presentedAns4.innerHTML = num6.opts['d'];
        
    presentedAns.addEventListener('click', wrongResult7);
    presentedAns2.addEventListener('click', wrongResult7);
    presentedAns3.addEventListener('click', wrongResult7);
    presentedAns4.addEventListener('click', result7);

function result7() {
    alert('correct')
    counter.innerHTML = '8'
    show8()
}
function wrongResult7() {
    alert('incorrect')
    counter.innerHTML = '8'
    show8()
}
}

function show8() {

    let num7 = gameLogic[7];
    
    document.querySelector('#question').innerHTML = num7.ques;
    
    presentedAns.innerHTML = num7.opts['a'];
    presentedAns2.innerHTML = num7.opts['b'];
    presentedAns3.innerHTML = num7.opts['c'];
    presentedAns4.innerHTML = num7.opts['d'];
        
    presentedAns.addEventListener('click', wrongResult8);
    presentedAns2.addEventListener('click', wrongResult8);
    presentedAns3.addEventListener('click', wrongResult8);
    presentedAns4.addEventListener('click', result8);

function result8() {
    alert('correct')
    counter.innerHTML = '9'
    show9()
}
function wrongResult8() {
    alert('incorrect')
    counter.innerHTML = '9'
    show9()
}
}

function show9() {

    let num8 = gameLogic[8];
    
    document.querySelector('#question').innerHTML = num8.ques;
    
    presentedAns.innerHTML = num8.opts['a'];
    presentedAns2.innerHTML = num8.opts['b'];
    presentedAns3.innerHTML = num8.opts['c'];
    presentedAns4.innerHTML = num8.opts['d'];
        
    presentedAns.addEventListener('click', result9);
    presentedAns2.addEventListener('click', wrongResult9);
    presentedAns3.addEventListener('click', wrongResult9);
    presentedAns4.addEventListener('click', wrongResult9);

function result9() {
    alert('correct')
    counter.innerHTML = '10'
    show10()
}
function wrongResult9() {
    alert('incorrect')
    counter.innerHTML = '10'
    show10()
}
}

function show10() {

    let num9 = gameLogic[9];
    
    document.querySelector('#question').innerHTML = num9.ques;
    
    presentedAns.innerHTML = num9.opts['a'];
    presentedAns2.innerHTML = num9.opts['b'];
    presentedAns3.innerHTML = num9.opts['c'];
    presentedAns4.innerHTML = num9.opts['d'];
        
    presentedAns.addEventListener('click', wrongResult10);
    presentedAns2.addEventListener('click', wrongResult10);
    presentedAns3.addEventListener('click', wrongResult10);
  presentedAns4.addEventListener('click', result10);


function result10() {
//     alert('correct')
showFinal()
}

function wrongResult10() {
//     alert('incorrect')
showFinal()
 }
}

function showFinal() {
    
//results.html should be here
}