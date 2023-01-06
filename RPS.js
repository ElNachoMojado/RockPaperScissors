//Needed to keep track of score.
let win = 0;
let lose = 0;

//Stores value defined in <button> and passes it to round.
function storeVal(el) {
    const amount = el.value;
    round(amount);
}

//Plays a round of the game, and stores and calculates score.
function round(playSel) {
    const comp = getComputerChoice();

    if (playSel === comp) {
        document.getElementById('roundEnd').innerHTML = "This round is a tie. You both chose "+playSel+".";
    } else {
        if (playSel === 'Rock' && comp === 'Scissors') {
            win++;
            document.getElementById('playerScore').innerHTML = 'Player score: '+win;
            document.getElementById('roundEnd').innerHTML = "You win this round! "+playSel+" beats "+comp+".";
        } else if (playSel === 'Paper' && comp === 'Rock') {
            win++;
            document.getElementById('playerScore').innerHTML = 'Player score: '+win;
            document.getElementById('roundEnd').innerHTML = "You win this round! "+playSel+" beats "+comp+".";
        } else if (playSel === 'Scissors' && comp === 'Paper') {
            win++;
            document.getElementById('playerScore').innerHTML = 'Player score: '+win;
            document.getElementById('roundEnd').innerHTML = "You win this round! "+playSel+" beats "+comp+".";
        } else{
            lose++;
            document.getElementById('pcScore').innerHTML = "PC score: "+lose;
            document.getElementById('roundEnd').innerHTML = "You lost this round. "+playSel+" is weak against "+comp+".";
        }

        if (win === 5) {
            alert("You've won!");
            win = 0;
            lose = 0;
            document.getElementById('pcScore').innerHTML = "PC score: "+lose;
            document.getElementById('playerScore').innerHTML = 'Player score: '+win;
        } else if (lose === 5) {
            alert("You've lost :(");
            win = 0;
            lose = 0;
            document.getElementById('pcScore').innerHTML = "PC score: "+lose;
            document.getElementById('playerScore').innerHTML = 'Player score: '+win;
        }
    }

    document.getElementById('pcSelection').innerHTML = 'Computer: '+comp;
}

//Gets random choice for computer.
function getComputerChoice () {
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1) {
        choice = 'Rock';
        return choice;
    } else if (random === 2) {
        choice = 'Paper';
        return choice;
    } else {
        choice = 'Scissors';
        return choice;
    }
}

if (lose === 0 && win === 0) {
    document.getElementById('pcScore').innerHTML = "PC score: "+lose;
    document.getElementById('pcSelection').innerHTML = 'PC selection: ';   
    document.getElementById('playerScore').innerHTML = 'Player score: '+win;
}



/* function round (playSel, computer) {
    let cap = playSel.toUpperCase();
    let player = cap.slice(0,1);
    let comp = computer.slice(0,1);
    if (player === comp) {
        console.log("This round is a tie. You both chose "+computer+".");
    } else {
        if (player === 'R' && comp === 'S') {
            win += 1;
            console.log("You win this round. Your choice beats "+computer+".");
        } else if (player === 'P' && comp === 'R') {
            win += 1;
            console.log("You win this round. Your choice beats "+computer+".");
        } else if (player === 'S' && comp === 'P') {
            win += 1;
            console.log("You win this round. Your choice beats "+computer+".");
        } else{
            lose += 1;
            console.log("You lost this round. Your choice is weak against "+computer+".");
        }
    }
}

function game() {
    //for (let i = 0; i < 5; i++) {
        let playSel = prompt("Input your option");
        let computer = getComputerChoice();
        round(playSel, computer);
        if (win === 3) {
            console.log("Congratulations! You are the ultimate winner. ");
            break;
        } else if (lose === 3) {
            console.log("Unfortunately, you have lost. You loser.");
            break;
        } else if (i === 4 && win > lose) {
            console.log("Congratulations! You are the ultimate winner.");
        } else if (i === 4 && lose > win) {
            console.log("Unfortunately, you have lost. You loser.");
        } else if (i === 4 && lose === win) {
            console.log("In the end, it's a tie. Try again!")
        }
    //}
    console.log("The score is W:"+win+" and L:"+lose+".");    
}

let win = 0;
let lose = 0;
console.log(game()); */