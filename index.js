// let space1 = document.querySelector('#one');
// let space2 = document.querySelector('#two');
// let space3 = document.querySelector('#three');
// let space4 = document.querySelector('#four');
// let space5 = document.querySelector('#five');
// let space6 = document.querySelector('#six');
// let space7 = document.querySelector('#seven');
// let space8 = document.querySelector('#eight');
// let space9 = document.querySelector('#nine');
// let allSpaces = document.querySelectorAll('.col');
// let char = document.querySelectorAll('.char');
// let charbox = document.querySelector('.charBox');
// let newGame = document.querySelector('#newGame');
// let player1 = null;
// let player2 = null;
// let letters = ['X', 'O']
// let winner = -1;

// class Player {
//     constructor(letter, moveBank) {
//         this.letter = letter,
//             this.moveBank = moveBank;
//     }
// }

// for (let character of char) {
//     character.addEventListener('click', (event) => {
//         let letter = event.path[0].outerText
//         player1 = new Player(letter, []);
//         let otherPlayer = function () {
//             if (letters.indexOf(letter) > 0) {
//                 player2 = new Player(letters[0], []);
//             }
//             else {
//                 player2 = new Player(letters[1], []);
//             }
//         }
//         setTimeout(() => {
//             charbox.classList.toggle('d-none');
//         }, 2000);
//         otherPlayer();
//         turnCounter++;
//         console.log('player1: ' + player1.letter)
//         console.log('player2: ' + player2.letter)
//     })
// }

// let turnCounter = 0;

// let isPlayerUp = () => {
//     if (turnCounter % 2 !== 0) {
//         playerUp = player1;
//     }
//     else {
//         playerUp = player2;
//     }
//     console.log(playerUp)
//     turnCounter++;
// }

// let selector = function (event) {
//     let num = event.path[0].getAttribute('id');
//     switch (num) {
//         case '1': num = 1;
//             break;
//         case '2': num = 2;
//         break;
//         case '3': num = 3;
//         break;
//         case '4': num = 4;
//         break;
//         case '5': num = 5;
//         break;
//         case '6': num = 6;
//         break;
//         case '7': num = 7;
//         break;
//         case '8': num = 8;
//         break;
//         case '9': num = 9;
//         break;
//     }
//     if (board[num].state === E) {
//         isPlayerUp();
//         board[num].state = playerUp.letter;
//         playerUp.moveBank.push(num);
//         event.path[0].innerHTML = playerUp.letter
//     }
//     else {
//         alert('You must select an empty space')
//     }
//     gameOver();
//     console.log('Turn is: '+ turnCounter)
//     console.log('space ' +num);
//     console.log(board[num].state);
    
// }


// for (let space of allSpaces) {
//         space.addEventListener('click', selector);
    
// }

// let E = null;

// let board = {
//     1: { state: E, digit: 1, win: [[2,3], [4,7], [5,9]]},
//     2: { state: E, digit: 2, win: [[1,3], [5,8]]},
//     3: { state: E, digit: 3, win: [[1,2], [5,7], [6,9]] },
//     4: { state: E, digit: 4, win: [[5,6], [1,7]]},
//     5: { state: E, digit: 5, win: [[2,8], [4,6], [1,9], [3,7]] },
//     6: { state: E, digit: 6, win: [[4,5], [3,9]]},
//     7: { state: E, digit: 7, win: [[5,3], [4,1], [8,9]] },
//     8: { state: E, digit: 8, win: [[5,2], [9,7]] },
//     9: { state: E, digit: 9, win: [[6,3], [8,7], [5,1]] },
 
// };



// let gameOver = function () {
//     for (let num in board) {
//         let thisSpace = board[num].state;
//         let winCondition1 = board[board[num].win[0][0]].state && board[board[num].win[0][1]].state;
//         if (board[num].state !== E) {
//             if (winCondition1 === thisSpace) {
//                 console.log('SHIT')
//                 charbox.classList.toggle('d-none')
//                 newGame.classList.toggle('d-none');
//          }
//      }
       
//     }
// }

////////////////////////////////////////////////////////// --Computer Player-- ////////////////////
console.log('THIS IS THE ONLY CHANGE');
let space1 = document.querySelector('#one');
let space2 = document.querySelector('#two');
let space3 = document.querySelector('#three');
let space4 = document.querySelector('#four');
let space5 = document.querySelector('#five');
let space6 = document.querySelector('#six');
let space7 = document.querySelector('#seven');
let space8 = document.querySelector('#eight');
let space9 = document.querySelector('#nine');
let allSpaces = document.querySelectorAll('.col');
let char = document.querySelectorAll('.char');
let charbox = document.querySelector('.charBox');
let newGame = document.querySelector('#newGame');
let player1 = null;
let player2 = null;
let letters = ['X', 'O']
let winner = -1;

class Player {
    constructor(letter, moveBank) {
        this.letter = letter,
            this.moveBank = moveBank;
    }
}

for (let character of char) {
    character.addEventListener('click', (event) => {
        let letter = event.path[0].outerText
        player1 = new Player(letter, []);
        let otherPlayer = function () {
            if (letters.indexOf(letter) > 0) {
                player2 = new Player(letters[0], []);
            }
            else {
                player2 = new Player(letters[1], []);
            }
        }
        setTimeout(() => {
            charbox.classList.toggle('d-none');
        }, 2000);
        otherPlayer();
        turnCounter++;
        console.log('player1: ' + player1.letter)
        console.log('player2: ' + player2.letter)
    })
}

let turnCounter = 0;

let isPlayerUp = () => {
    if (turnCounter % 2 !== 0) {
        playerUp = player1;
        playerOff = player2;
    }
    else {
        playerUp = player2;
        playerOff = player1;
    }
    console.log(playerUp)
    turnCounter++;
}

let switch5 = false;

let selector = function (event) {
    let num = event.path[0].getAttribute('id');
    switch (num) {
        case '1': num = 1;
            break;
        case '2': num = 2;
        break;
        case '3': num = 3;
        break;
        case '4': num = 4;
        break;
        case '5': num = 5;
        break;
        case '6': num = 6;
        break;
        case '7': num = 7;
        break;
        case '8': num = 8;
        break;
        case '9': num = 9;
        break;
    }
    if (board[num].state === E) {
        isPlayerUp(); 
        board[num].state = playerUp.letter;
        playerUp.moveBank.push(num);
        event.path[0].innerHTML = playerUp.letter
    }
    else {
        alert('You must select an empty space')
    }
    if (num % 2 === 0 && playerOff.moveBank.length === 0) {
        switch5 = true;
    }
    console.log('PLAYEROFF '+ playerOff.letter)
    gameOver();
    testFunction();
    computerTurn(switch5);
    console.log('Turn is: '+ turnCounter)
    console.log('space ' +num);
    console.log(board[num].state);
}
let changeSwitch = function () {
    switch5 = false;
    return switch5;
}

for (let space of allSpaces) {
    space.addEventListener('click', selector);
}
let canWin = false;
let compWin = false;

function computerTurn() {
    console.log('SWITCH5'+switch5)
    isPlayerUp();
    setTimeout(() => {
        let f = 0;
        for (let num in board) {
            if (f !== 10) {
                f++;
            }
            if (f === 10) {
                break;
            }
            console.log(num);
            let thisSpace = board[num].state;
            if (playerOff.moveBank.length > 1 && canWin === true && compWin === false) {
                if (board[num].state === playerOff.letter) {
                    for (let i = 0; i < board[num].win.length - 1; i += 2) {
                        console.log(`step ${i} of the loop`)
                        console.log('tester' + board[num].win)
                        bestChoice = board[board[num].win[i]].state;
                        console.log(`BESTCHOICE ` + board[board[num].win[i]].digit);
                        winningCombo = board[board[num].win[i + 1]].state;
                        console.log(`winningCombo ` + board[board[num].win[i + 1]].digit)
                        if (bestChoice === E || bestChoice === playerOff.letter) {
                            console.log('first check of x')
                            if (bestChoice === E && winningCombo === playerOff.letter) {
                                board[board[num].win[i]].state = playerUp.letter;
                                console.log('i Choose ' + board[board[num].win[i]].digit)
                                allSpaces[(board[board[num].win[i]].digit) - 1].innerText = playerUp.letter;
                                playerUp.moveBank.push(num);
                                console.log(i);
                                console.log(board[board[num].win[i]]);
                                f = 10;
                                break;
                            }
                            else if (bestChoice === playerOff.letter && winningCombo === E) {
                                console.log('second check of x')
                                board[board[num].win[i + 1]].state = playerUp.letter;
                                console.log('i Choose ' + board[board[num].win[i + 1]].digit);
                                console.log('THIS IS THE LAST SPACE' + allSpaces[(board[board[num].win[i + 1]].digit - 1)].innerText);
                                allSpaces[(board[board[num].win[i + 1]].digit - 1)].innerText = playerUp.letter;
                                playerUp.moveBank.push(num);
                                console.log(i);
                                console.log(board[board[num].win[i + 1]]);
                                f = 10;
                                break;
                            }
                            else {
                                console.log('Catgame')
                                console.log(board[num].win)
                            }
                        } else {
                            console.log(board[num].win)
                        }
                    }
                }
                else {
                    if (board[1].state === E && board[9].state === playerOff.letter && switch5 === false) {
                        playerUp.moveBank.push(num);
                        board[1].state = playerUp.letter;
                        console.log('jizz in my face')
                        allSpaces[0].innerText = playerUp.letter;
                    }
                }
            }
            else if (board[num].state === playerUp.letter) {
                for (let i = 0; i < board[num].win.length - 1; i += 2) {
                    console.log(`step ${i} of the loop`)
                    console.log('tester' + board[num].win)
                    bestChoice = board[board[num].win[i]].state;
                    console.log(`BESTCHOICE ` + board[board[num].win[i]].digit);
                    winningCombo = board[board[num].win[i + 1]].state;
                    console.log(`winningCombo ` + board[board[num].win[i + 1]].digit)
                    if (bestChoice === E && switch5 === false || bestChoice === playerUp.letter && switch5 === false) {
                        if (bestChoice === E && winningCombo === E) {
                            console.log('second check of O')
                            board[board[num].win[i + 1]].state = thisSpace;
                            console.log('i Choose ' + board[board[num].win[i + 1]].digit);
                            console.log('THIS IS THE LAST SPACE' + allSpaces[(board[board[num].win[i + 1]].digit - 1)].innerText);
                            allSpaces[(board[board[num].win[i + 1]].digit - 1)].innerText = thisSpace;
                            console.log(i);
                            console.log(canWin)
                            console.log(board[board[num].win[i + 1]]);
                            f = 10;
                            break;
                        }
                        else if (bestChoice === playerUp.letter && winningCombo === E || bestChoice === E && winningCombo === playerUp.letter) {
                            console.log('first check of O')
                            board[board[num].win[i]].state = thisSpace;
                            console.log('i Choose ' + board[board[num].win[i]].digit)
                            allSpaces[(board[board[num].win[i]].digit) - 1].innerText = thisSpace;
                            console.log(i);
                            console.log(board[board[num].win[i]]);
                            f = 10;
                            break;
                        }
                        else {
                            let bestMove = [5, 1, 3, 7, 9];
                            for (let move of bestMove) {
                                if (board[move].state === E) {
                                    board[move].state = playerUp.letter;
                                    allSpaces[move - 1].innerText = playerUp.letter;
                                }
                                break;
                            }
                            f = 10;
                            console.log(f)
                            console.log(board[num].win)
                                
                        }
                    } else {
                        let bestMove = [1, 3, 7, 9];
                        for (let move of bestMove) {
                            console.log('this is the move '+move)
                            console.log(board[board[move].digit + 1])
                            if (move === 1 || move === 7) {
                                if (move === 7) {
                                    if (board[move].state === E && board[board[move].digit - 3].state === E || 
                                        board[move].state === E && board[board[move].digit + 1].state === E ) {
                                        board[move].state = playerUp.letter;
                                        allSpaces[move - 1].innerText = playerUp.letter;
                                    }
                                }
                                else if (board[move].state === E && board[board[move].digit + 1].state === E
                                    || board[move].state === E && board[board[move].digit + 3].state === E) {
                                    board[move].state = playerUp.letter;
                                    allSpaces[move - 1].innerText = playerUp.letter;
                                }
                                f = 10;
                                break;
                            }
                            else {
                                if (board[move].state === E && board[board[move].digit - 1].state === E) {
                                    board[move].state = playerUp.letter;
                                    allSpaces[move - 1].innerText = playerUp.letter;
                                }
                                f = 10;
                                console.log(board[num].win);
                                break;
                            }
                        }
                        
                    }
                }
            }
            else {
                console.log('this is f:' + f)
                    if (f === 9) {
                        let starters = [1, 3, 7, 9, 5];
                        for (let spots of starters) {
                            console.log(board[spots].state)
                            if (board[spots].state === E && switch5 === false) {
                                playerUp.moveBank.push(spots);
                                board[spots].state = playerUp.letter;
                                console.log('My first move is ' + spots);
                                allSpaces[(spots) - 1].innerText = playerUp.letter;
                                console.log(f)
                                f = 10;
                                break;
                            }
                            else if (switch5 === true) {
                                playerUp.moveBank.push();
                                board[5].state =playerUp.letter;
                                console.log('i love anus')
                                allSpaces[4].innerText = playerUp.letter;
                                // changeSwitch();
                                break;
                            }
                        }
                       
                    }
                  
                }
            };
    }, 1500)
    gameOver();
}
    
    let E = null;
    let board = {
        1: { state: E, digit: 1, win: [2, 3, 4, 7, 5, 9] },
        2: { state: E, digit: 2, win: [1, 3, 5, 8] },
        3: { state: E, digit: 3, win: [2, 1, 5, 7, 6, 9] },
        4: { state: E, digit: 4, win: [1, 7, 5, 6] },
        5: { state: E, digit: 5, win: [2, 8, 4, 6, 1, 9, 3, 7] },
        6: { state: E, digit: 6, win: [5, 4, 3, 9] },
        7: { state: E, digit: 7, win: [5, 3, 4, 1, 8, 9] },
        8: { state: E, digit: 8, win: [5, 2, 9, 7] },
        9: { state: E, digit: 9, win: [6, 3, 8, 7, 5, 1] },
    };
    let gameOver = function () {
        for (let num in board) {
            console.log('this is the win sequence: ' + board[num].win);
            for (let i = 0; i < board[num].win.length; i += 2) {
                let thisSpace = board[num].state;
                let winCondition1 = board[board[num].win[i]].state;
                let winCondition2 = board[board[num].win[i + 1]].state;
                console.log('this should be an incriment of 2 ' + board[board[num].win[i]].digit);
                console.log('this should be the number directly after it ' + board[board[num].win[i +1]].digit);
                if (thisSpace !== E) {
                    if (winCondition1 === thisSpace && winCondition2 === thisSpace) {
                        console.log(winCondition1);
                        console.log(winCondition2);
                        console.log(thisSpace);
                        charbox.classList.toggle('d-none')
                        newGame.classList.toggle('d-none');
                        break;
                    }
                }
            }
        }
    }



let testFunction = function () {
    isPlayerUp();
    turnCounter -= 1;
    for (let num in board) {
        for (let i = 0; i < board[num].win.length; i += 2){
            if (board[num].state === 'X') {
                for (let i = 0; i < board[num].win.length - 1; i += 2) {
                    bestChoice = board[board[num].win[i]].state;
                    winningCombo = board[board[num].win[i + 1]].state;
                    if (bestChoice === E || bestChoice === playerOff.letter) {
                        if (bestChoice === E && winningCombo === playerOff.letter) {
                            canWin = true;
                            console.log('i Choose ' + board[board[num].win[i]].digit);
                            return canWin;
                        }
                        else if (bestChoice === playerOff.letter && winningCombo === E) {
                            console.log('second check of x')
                            canWin = true;
                            return canWin;
                        }
                        else {
                            console.log(board[num].win)
                        }
                    } else {
                        console.log(board[num].win)
                    }
                }
            }
            else if (board[num].state === 'O') {
                    for (let i = 0; i < board[num].win.length - 1; i += 2) {
                        bestChoice = board[board[num].win[i]].state;
                        winningCombo = board[board[num].win[i + 1]].state;
                        if (bestChoice === E || bestChoice === playerUp.letter) {
                            if (bestChoice === E && winningCombo === playerUp.letter) {
                                compWin = true;
                                return compWin;
                            }
                            else if (bestChoice === playerUp.letter && winningCombo === E) {
                                compWin = true;
                                return compWin;
                            }
                            else {
                                console.log(board[num].win)
                            }
                        } else {
                            console.log(board[num].win)
                        }
                    }
                }         
            
        }
    }
    
}

