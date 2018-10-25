// first wait for the DOM to load then execute the program
    $(document).ready(function() {
    // Declare a variable to track the players "score" or "runningTotal" as they click on the crystals.
    var runningTotal = 0;
    //generate a random number. This number will be the "Winning Number". The players job is to match the total by clicking on the crystals.
    var winningNumber = randomNum()
    // then declare variables for wins and losses
    var wins = 0;
    var losses = 0;

    // generate and declare the randomized values for each of the crystals.
    var randomizedCrystalValue;

    // var twoStarCrystalValue = Math.floor(Math.random()*5) +1;
    // var crystalAllianceValue = Math.floor(Math.random()*6) +1;
    // var crystalIso8Value = Math.floor(Math.random()*12) +1;
    // var crystalMysticValue = Math.floor(Math.random()*10) +1;
    //test winning number to make sure that we are generating a random number. √
    //console.log(winningNumber)
    // Then create a variable to capture and assign random values to the crystals that are clicked.   
  
        // create an 'on click' function event that creates a pop up with a message and adds the value of the crystal to the runningTotal.  It didn't work so I am attempting a more conventional approach. 
    
    // if/when the "runningTotal" of the crystals matches total the "winningNumber", an alert box should pop up to inform the winner, 
    // they have won the round and the "wins" increase by 1.  If the "runningTotal" is greater than the "winningNumber", an alert should inform the player
    // "they have lost this round." and then reset the game. 
    // Each click needs to call the  assigned random number and it add to numberCount variable √.
    function crystalValue(){
        return {
            crystalOne:{
                points : Math.floor(Math.random()*6)+1,
                imageUrl: "assets/images/2-Star_Crystal.png"
            },
            crystalTwo:{
                points: Math.floor(Math.random()*6)+1,
                imageUrl: "assets/images/Crystal_alliance.png"
            },
            crystalThree:{
                points: Math.floor(Math.random()*6)+1,
                imageUrl: "assets/images/Crystal_iso8.png"
            },
            crystalFour:{
                points: Math.floor(Math.random()*5) + 1,
                imageUrl: "assets/images/Crystal_mystic.png"
            }
        };           
    }
        // this funtion generates a random number between 15 and 114. because it is set golbally I can call the function later whenever I need to use it.
    function randomNum() {
        return Math.floor(Math.random()*100) + 15;
    }
    // create a function to "set" and "reset" the game.
    function resetGame(){
            runningTotal = 0;
            randomizedCrystalValue = crystalValue();
            winningNumber = randomNum();
            $("#randomNumber").text(winningNumber);
        }
    function updateDom(didUserWin) {
      $("#win").empty();
    
      if (didUserWin === true) {
      $("#win").append($("<p>").text("You Win!"));
      resetGame();
      renderMatchingNumber();
      }
      else if (didUserWin === false) {
      $("#loss").append($("<p>").text("You Lose!"));
      resetGame();
      renderMatchingNumber();
      }

      //this is to add win/loss display to the page, I am declaring four variable for the first two: the bling operator creates a "space" to store the wins and losses as they were declared at the top of the script. The second two variables are going to house the  players' 'wins' and 'losses' 
      var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);

      var pWins = $("<p>").text("Wins: ");
      var pLoss = $("<p>").text("Losses: ");
      // here I append the wins to the wSpan variable and the losses to teh the lSpan variable
      pWins.append(wSpan);
      pLoss.append(lSpan);
      // While here we are appending the pWins to a div with the id of "win" and the pLoss the same div. this will display 
      $("win").append(pWins);
      $("loss").append(pLoss);
    }

    function renderCrystals() {
       for (var key in randomizedCrystalValue) {
        var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>")
        var crystalImg= $("<img alt='marvelCrystals' class='crystal-img'").attr("src", crystals[key].imgageURL);
        crystalDiv.append(crystalImg);
        $("#crystal-area").append(crystalDiv);
      }
    }
    function updateMatchingNumber(crystals) {
    runningTotal += randomizedCrystalValue[crystal.attr("data-name")].points;
    }
    function renderMatchingNumber(){
    var scoreNumDiv = $("<div id='score-number'>").text(runningTotal);
    $("#currentNumber").html();
    $("#currentNumber").html(scoreNumDiv);
    }
    resetGame();
    updateDom();
    renderMatchingNumber();
    renderCrystals();

    //create an on click event for the crystals so the value can be added;
    $(".crystals-button").on("click", function(event) {
        updateMatchingNumber($(this));
        renderMatchingNumber();

        if (runningTotal === winningNumber) {
            wins++
            resetGame();
            updateDom(true);
        }
        else if (runningTotal > winningNumber) {
            losses++;
            reset();
            updateDom(false);
        }
    });
});
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






// });

    // // function

// // display the current "wins", "losses" and "runningTotal"
// // $("#randomNumber").text("Add up to me : " + winningNumber)
// // $("#total").text("Current Total : " + runningTotal);
// // $("#win").text("Wins : " + wins);
// // $("#loss").text("#NonWins : " + losses);
// // console.log(losses);
// // console.log(wins)


    
        
