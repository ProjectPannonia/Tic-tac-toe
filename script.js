let round = 0;
let maxRound = 9;

const cols = document.querySelector('.row');
const playersBox = document.getElementById('playersBox');
const firstPlayerName = playersBox.children[0];
const secondPlayerName = playersBox.children[1];

cols.addEventListener('click', function(e){
    console.log(e.target);
    const target = e.target;
    switchPlayerName();
    writeSymbol(target);

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
