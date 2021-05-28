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

let round = 0;
let maxRound = 9;

const cols = document.querySelector('.playground');
const playersBox = document.getElementById('playersBox');
const firstPlayerName = playersBox.children[0];
const secondPlayerName = playersBox.children[1];

cols.addEventListener('click', function(e){
    const target = e.target;
    switchPlayerName();
    writeSymbol(target);
    checkWinner();
});

cols.addEventListener('mouseover', function(e) {
    const target = e.target;
    target.style.backgroundColor = 'pink';

    setTimeout(function() {
       target.style.backgroundColor = 'white'; 
    }, 500);
});

let switchPlayerName = () => {
    if(round % 2 === 0) {
        firstPlayerName.classList.remove('activePlayer');
        secondPlayerName.classList.add('activePlayer');
    } else {
        firstPlayerName.classList.add('activePlayer');
        secondPlayerName.classList.remove('activePlayer');
    }
}
let writeSymbol = (target) => {
    const targetText = target.innerText;
    if(targetText !== '') {
        alert('Invalid step');
    } else {
        if(round % 2 == 0) {
            target.style.color = 'red';
            target.innerText= 'X';
        } else {
            target.innerText = 'O';
            target.style.color = 'black';
        }
        round++;
    }
}

let checkWinner = () => {
    const table = new GameTable(document.getElementById('top_left'),
                                document.getElementById('top_center'),
                                document.getElementById('top_right'),
                                document.getElementById('center_left'),
                                document.getElementById('center_center'),
                                document.getElementById('center_right'),
                                document.getElementById('bottom_left'),
                                document.getElementById('bottom_center'),
                                document.getElementById('bottom_right'));
                                
    const firstRowMatch = table.first.innerText !== '' && (table.first.innerText === table.second.innerText) && (table.first.innerText === table.third.innerText);
    const secondRowMatch = table.fourth.innerText !== '' && (table.fourth.innerText === table.fifth.innerText && table.fourth.innerText === table.sixth.innerText);
    const thirdRowMatch = table.seventh.innerText !== '' && (table.seventh.innerText === table.eight.innerText && table.seventh.innerText === table.nineth.innerText); 
    const firstColumnMatch = table.first.innerText !== '' && (table.first.innerText === table.fourth.innerText && table.first.innerText === table.seventh.innerText);
    const secondColumMatch = table.second.innerText !== '' && (table.second.innerText === table.fifth.innerText && table.fifth.innerText === table.eight.innerText);
    const thirdColumnMatch = table.third.innerText !== '' && (table.third.innerText === table.sixth.innerText && table.third.innerText === table.nineth.innerText);
    const diagonalMatchOne = table.first.innerText !== '' && (table.first.innerText === table.fifth.innerText && table.first.innerText === table.nineth.innerText);
    const diagonalMatchTwo = table.third.innerText !== '' && (table.third.innerText === table.fifth.innerText && table.third.innerText === table.seventh.innerText);
    
    switch(true) {
        case firstRowMatch :
            colorWinnerFields(table.first,table.second, table.third);
            break;
        case secondRowMatch :
            colorWinnerFields(table.fourth, table.fifth, table.sixth);
            break;
        case thirdRowMatch:
            colorWinnerFields(table.seventh, table.eight, table.nineth);
            break;
        case firstColumnMatch:
            colorWinnerFields(table.first, table.fourth,table.seventh);
            break;
        case secondColumMatch:
            colorWinnerFields(table.second, table.fifth, table.eight);
            break;
        case thirdColumnMatch:
            colorWinnerFields(table.third, table.sixth, table.nineth);
        case diagonalMatchOne:
            colorWinnerFields(table.first, table.fifth,table.nineth);
            break;
        case diagonalMatchTwo:
            colorWinnerFields(table.third,table.fifth, table.seventh);
            break;
        case round === 9:
            alert('Cats game!');
            clearFields();
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
    
    for(let item of colElements) {
        item.style.backgroundColor = 'white';
        item.innerText = '';
        secondPlayerName.classList.remove('activePlayer');
        firstPlayerName.classList.add('activePlayer');
    }
}
