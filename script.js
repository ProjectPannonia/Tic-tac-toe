let round = 0;
let maxRound = 9;

const cols = document.querySelector('.playground');
const playersBox = document.getElementById('playersBox');
const firstPlayerName = playersBox.children[0];
const secondPlayerName = playersBox.children[1];

console.log();

cols.addEventListener('click', function(e){
    console.log(e.target);
    const target = e.target;
    switchPlayerName();
    writeSymbol(target);
    checkWinner();
});

let switchPlayerName = () => {
    if(round % 2 === 0) {
        firstPlayerName.classList.remove('activePlayer');
        secondPlayerName.classList.add('activePlayer');
    } else {
        secondPlayerName.classList.remove('activePlayer');
        firstPlayerName.classList.add('activePlayer');
    }
}
let writeSymbol = (target) => {
    const targetText = target.innerText;
    if(targetText !== '') {
        alert('Invalid step');
    } else {
        if(round % 2 == 0) {
            target.innerText= 'X';
        } else {
            target.innerText = 'O';
        }
        round++;
    }
}

class GameTable {
    constructor(firstRowFirst, firstRowSecond, firstRowThird, secondRowFirst, secondRowSecond, secondRowThird, thirdRowFirst, thirdRowSecond, thirdRowThird) {
        this.first = firstRowFirst;
        this.second = firstRowSecond;
        this.third = firstRowThird;

        this.fourth = secondRowFirst;
        this.fifth = secondRowSecond;
        this.sixth = secondRowThird;

        this.seventh = thirdRowFirst;
        this.eight = thirdRowSecond;
        this.nineth = thirdRowThird;
    }
    
}
let compareSymbols = (s1, s2, s3) => {
    let equals = false;
    if(s1 !== '' && s1 === s2 && s1 === s3) {
        equals = true;
    } else if(s2 !== '' && s2 === s1 && s2 === s3) {
        equals = true;
    } else if(s3 !== '' && s3 === s1 && s3 === s2) {
        equals = true;
    }

    return equals;
}
let checkWinner = () => {
    let ffParent = document.getElementById('top_left');
    let ff = ffParent.innerText;
    let fsParent = document.getElementById('top_center');
    let fs = fsParent.innerText;
    let ftParent = document.getElementById('top_right');
    let ft = ftParent.innerText;

    let sfParent = document.getElementById('center_left');
    let sf = sfParent.innerText;
    let ssParent = document.getElementById('center_center');
    let ss = ssParent.innerText;
    let stParent = document.getElementById('center_right');
    let st = stParent.innerText;

    let tfParent = document.getElementById('bottom_left');
    let tf = tfParent.innerText;
    let tsParent = document.getElementById('bottom_center');
    let ts = tsParent.innerText;
    let ttParent = document.getElementById('bottom_right');
    let tt = ttParent.innerText;

    //const actualTable = new GameTable(ff,fs,ft,sf,ss,st,tf,ts,tt);
    if(ff !== '' && (ff === fs) && (ff === ft)) {
        // first row true
        colorWinnerFields(ffParent, fsParent, ftParent);
        console.log('first row true' + ', ' );
    } else if(sf !== '' && sf === ss && sf === st) {
        // second row true
        colorWinnerFields(sfParent, ssParent, stParent);
        console.log('second row true');
    } else if(tf !== '' && tf === ts && tf === tt) {
        // third row true
        colorWinnerFields(tfParent, tsParent, ttParent);
        console.log('third row true');
    } else if(ff !== '' && ff === sf && ff === tf) {
        // first column true
        colorWinnerFields(ffParent, sfParent, tfParent);
        console.log('first column true');
    } else if(fs !== '' && fs === ss && fs === ts) {
        // second column true
        colorWinnerFields(fsParent, ssParent, tsParent);
        console.log('second column true');
    } else if(ft !== '' && ft === st && ft === tt) {
        // third column true
        colorWinnerFields(ftParent, stParent, ttParent);
        console.log('third column true');
    } else if(ff !== '' && ff === ss && ff === tt) {
        // diagonal 1 true
        colorWinnerFields(ffParent, ssParent, ttParent);
        console.log('diagonal 1 true');
    } else if(ft !== '' && ft === ss && ft === tf) {
        // diagonal 2 true
        colorWinnerFields(ftParent, ssParent, tfParent);
        console.log('diagonal 2 true');
    }
}
let colorWinnerFields = (s1,s2,s3) => {
    s1.style.backgroundColor = 'green';
    s2.style.backgroundColor = 'green';
    s3.style.backgroundColor = 'green';
    introduceWinner(s1);
}
let introduceWinner = (s1) => {
    let winner = s1.innerText === 'X' ? 'Player 1' : 'Player 2';
    alert('The winner is: ' + winner);
    clearFields();
}
let clearFields = () => {
    round = 0;
    let colElements = cols.getElementsByClassName('col');
    
    for(key in colElements) {
        console.log('Key: ' + key);
        //key.style.backgroundColor = 'white';
    }
}
