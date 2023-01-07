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
    const playerImage = document.querySelector('#playerChoice');
    const pcImage = document.querySelector('#pcChoice');
    const playerImgPath = `images/${playSel}.png`;
    const pcImgPath = `images/${comp}.png`;

    playerImage.setAttribute("src", playerImgPath);
    pcImage.setAttribute('src', pcImgPath);

    if (playSel === comp) {
        document.getElementById('roundEnd').innerHTML = "This round is a tie. You both chose "+playSel+".";
    } else {
        if (playSel === 'Rock' && comp === 'Scissors') {
            win++;
            document.getElementById('playerScore').innerHTML = win;
            document.getElementById('roundEnd').innerHTML = "You win this round! "+playSel+" beats "+comp+".";
        } else if (playSel === 'Paper' && comp === 'Rock') {
            win++;
            document.getElementById('playerScore').innerHTML = +win;
            document.getElementById('roundEnd').innerHTML = "You win this round! "+playSel+" beats "+comp+".";
        } else if (playSel === 'Scissors' && comp === 'Paper') {
            win++;
            document.getElementById('playerScore').innerHTML = win;
            document.getElementById('roundEnd').innerHTML = "You win this round! "+playSel+" beats "+comp+".";
        } else{
            lose++;
            document.getElementById('pcScore').innerHTML = lose;
            document.getElementById('roundEnd').innerHTML = "You lost this round. "+playSel+" is weak against "+comp+".";
        }

        if (win === 5) {
            alert("You've won!");
            window.location.reload();
        } else if (lose === 5) {
            alert("You've lost :(");
            window.location.reload();
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

//The initial state of the screen.
if (lose === 0 && win === 0) {
    const playerInitPic = document.querySelector('#playerChoice');
    const pcInitPic = document.querySelector('#pcChoice');
    const playerInitPicPath = 'images/person.png';
    const pcInitPicPath = 'images/pc.png';

    playerInitPic.setAttribute("src", playerInitPicPath);
    pcInitPic.setAttribute('src', pcInitPicPath);

    document.getElementById('pcScore').innerHTML = lose;
    document.getElementById('pcSelection').innerHTML = 'PC: prepare to be woodibby swoobiddy';   
    document.getElementById('playerScore').innerHTML = win;
    document.getElementById('roundEnd').innerHTML = "Make a selection to start... Whenever you're ready :)";
}