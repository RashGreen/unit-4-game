// first wait for the DOM to load then execute the program
$(document).ready(function() {
    // Start by declaring variables for wins and losses
    var wins = 0;
    var losses = 0;
    // Declare a variable to track the players "score" or "runningTotal" as they click on the crystals.
    var runningTotal = 0;
    // generate and declare the randomized values for each of the crystals.
    var randomizedCrystalValue;
    var twoStarCrystalValue = Math.floor(Math.random()*5) +1;
    var crystalAllianceValue = Math.floor(Math.random()*6) +1;
    var crystalIso8Value = Math.floor(Math.random()*12) +1;
    var crystalMysticValue = Math.floor(Math.random()*10) +1;

    //test winning number to make sure that we are generating a random number. √
    //console.log(winningNumber)
  
    // Then create a variable to capture and assign random values to the crystals that are clicked.
    
    // this funtion generates a random number between 15 and 114. because it is set golbally I can call the function later whenever I need to use it.
    function randomNum() {
        return Math.floor(Math.random()*100) + 15;
    }
    //generate a random number. This number will be the "Winning Number". The players job is to match the total by clicking on the crystals.
    var winningNumber = randomNum()


   
    // create an 'on click' function event that creates a pop up with a message and adds the value of the crystal to the runningTotal.  It didn't work so I am attempting a more conventional approach. 

    // if/when the "runningTotal" of the crystals matches total the "winningNumber", an alert box should pop up to inform the winner, 
    // they have won the round and the "wins" increase by 1.  If the "runningTotal" is greater than the "winningNumber", an alert should inform the player
    // "they have lost this round." and then reset the game. 
    // Each click needs to call the  assigned random number and it add to numberCount variable √.
function crystalValue(){
    return {
        crystalOne:{
            points : Math.floor(Math.random()*5)+1,
            imageUrl$: "assets/images/2-Star_Crystal.png"
        },
        crystalTwo:{
            points: Math.floor(Math.random()*5)+1,
            imageUrl$: "assets/images/Crystal_alliance.png"
        },
        crystalThree:{
            points: Math.floor(Math.random()*5)+1,
            imageUrl$: "assets/images/Crystal_iso8.png"
        },
        crystalFour:{
            points: Math.floor(Math.random()*5) + 1,
            imageUrl$: "assets/images/Crystal_mystic.png"
        }
  
    };           
}
    // create a function to reset the game if the player wins or loses the game.
        function resetGame(){
            runningTotal = 0;
            randomizedCrystalValue = crystalValue()
            winningNumber = randomNum()
            $("#randomNumber").text(winningNumber)

        };
    // create an else if statement to determine if the user has won the game. If the user wins add a point to the wins column, if the loser loses add a point to the losses column. In either event print a message and restart the game.
        // function refreshedPage(winner){
        //     $("#total").empty();
        //     if (runningTotal === winningNumber) {
        //         wins++
        //         $("win").text("you won!!");
        //         resetGame()
                
        //     } else if ( runningTotal >= winningNumber) {
        //         losses++
        //         $("#loss").text("Pickle Rick says... Actually, don't worry about it. Just try again.")
        //         resetGame()
        //     }
        // }
function updateDom(didUserWin) {
    $("#win").empty();

if (didUserWin === true) {
    $("#win").append($("<p>").text("You Win!"));
    resetGame()

}
else if (didUserWin === false) {
    $("#loss").append($("<p>").text("You Lose!"));
    resetGame()

}

//building win/loss display to display on page
var wSpan = $("<span>").text(wins);
var lSpan = $("<span>").text(losses);

var pWins = $("<p>").text("Wins: ");
var pLoss = $("<p>").text("Losses: ");

pWins.append(wSpan);
pLoss.append(lSpan);

$("win").append(pWins);
$("loss").append(pLoss);
}

function renderCrystals() {
    for (var key in crystal) {
        var crystalDiv = $("<div class='crystals button' data-name='" + key + "'>")
        var crystalImg= $("<img alt='marvelCrystals' class='crystal-img'").attr("src", crystals[key].imgURL);
        crystalDiv.append(crystalImg);
        $("#crystal-area").append(crystalDiv);
    }
}

// display the current "wins", "losses" and "runningTotal"
// $("#randomNumber").text("Add up to me : " + winningNumber)
// $("#total").text("Current Total : " + runningTotal);
// $("#win").text("Wins : " + wins);
// $("#loss").text("#NonWins : " + losses);
// console.log(losses);
// console.log(wins)

});
    
        
