'use strict';

let cells = [...document.querySelectorAll('td')];
let victory = document.querySelector('.victory');
let btn = document.querySelector('button');
let counter = 0;

cells.forEach(item => {
    item.addEventListener('click', () => {

        if(!item.textContent && !getWinner()){
            if(counter % 2){
                item.textContent = 'O'
            } else {
                item.textContent = 'X'
            }
            counter++

        }
        if(getWinner()) {
            if(counter % 2){
                victory.textContent = 'Выиграли крестики'
            } else {
                victory.textContent = 'Победа за ноликами!'
            }
        }
        if(getDraw()) {
            victory.textContent = 'Ничья, попробуй еще раз!'
        }
        })
})

function getWinner() {
    if (cells[0].textContent === cells[1].textContent && cells[0].textContent === cells[2].textContent && cells[0].textContent !== '' ||
        cells[3].textContent === cells[4].textContent && cells[3].textContent === cells[5].textContent && cells[3].textContent !== '' ||
        cells[6].textContent === cells[7].textContent && cells[6].textContent === cells[8].textContent && cells[6].textContent !== '' ||
        cells[0].textContent === cells[3].textContent && cells[0].textContent === cells[6].textContent && cells[0].textContent !== '' ||
        cells[1].textContent === cells[4].textContent && cells[1].textContent === cells[7].textContent && cells[1].textContent !== '' ||
        cells[2].textContent === cells[5].textContent && cells[2].textContent === cells[8].textContent && cells[2].textContent !== '' ||
        cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent && cells[0].textContent !== '' ||
        cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent && cells[2].textContent !== ''
    ) {
        return true;
    }
}

function getDraw() {
    let count = 0
    cells.forEach(item => {
        if(item.textContent !== '') {
            count++;
        }
    })
    return count === 9;
}

btn.addEventListener('click', () => {
    cells.map(item => item.textContent = '');
    counter = 0;
    victory.textContent = '';
})