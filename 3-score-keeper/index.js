let homeScore = document.getElementById("h-score")
let guestScore = document.getElementById("g-score")


//points: +1, +2, +3
//when button pressed
// update homescore, 
currHomeScore=0
currGuestScore=0

function updateScore(team, points){
    if (team === "home")
        {
            currHomeScore += points;
            homeScore.textContent = currHomeScore;

        }else if (team === "guest"){
            currGuestScore += points;
            guestScore.textContent = currGuestScore;
        }
        console.log(team + " gained " + points + " points.")

}

