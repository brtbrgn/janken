function getComputerChoice(){
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

function roundFight(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Berabere"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors")||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        return "Oyuncu";
    }
    
    else {
        return "Bilgisayar";
    }
}

function game(){

    for (let i = 1; i <= 5; i++ ) {
        const playerSelection = prompt("Rock-Paper-Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        roundFight(playerSelection, computerSelection);
        const kazanan = roundFight(playerSelection, computerSelection);
        console.log(` ${i}. Round Sonucu: ${kazanan}`)
    }


}



game();