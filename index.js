function calculatePlayerRanking(victories, deaths){
    let playerRank = 0
    let killDeathRatio = victories - deaths
    if (killDeathRatio < 10){
        playerRank = "Ferro"
    }
    else if (killDeathRatio >= 11 && killDeathRatio <= 20){
        playerRank = "Bronze"
    }
    else if (killDeathRatio >= 21 && killDeathRatio <= 50){
        playerRank = "Prata"
    }
    else if (killDeathRatio >= 51 && killDeathRatio <= 80){
        playerRank = "Ouro"
    }   
    else if (killDeathRatio >= 81 && killDeathRatio <= 90){
        playerRank = "Diamante"
    } 
    else if (killDeathRatio >= 91 && killDeathRatio <= 100){
        playerRank = "Lendário"
    }     
    else if (killDeathRatio >= 101){
        playerRank = "Imortal"
    }

    return [killDeathRatio, playerRank]
}

let playerRank = calculatePlayerRanking(40, 5)
const rankMessage = `O Herói tem de saldo de ${playerRank[0]} está no nível de ${playerRank[1]}!`
console.log(rankMessage)