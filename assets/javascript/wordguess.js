
var wordChoices =["AXE","BREWMASTER","BRISTLEBACK","LIFESTEALER",
                "PANGOLIER","SLARK","TERRORBLADE",
                "SILENCER","TINKER","ENIGMA","BLOODSEEKER","ZEUS", "INVOKER",
                "WEAVER","CENTAUR","VIPER","VENOMANCER","PUDGE", "ENCHANTRESS",
                "BEASTMASTER","TIMBERSAW","OMNIKNIGHT","LYCAN","LICH","VISAGE",
                "MEDUSA","JAKIRO"];

var userChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
                "U", "V", "W", "X", "Y", "Z"];

run = false;
var winCount = 0;

    // listens for player to press a key
    document.onkeyup = function (pressed) {
        
        //Starts a new game
        if (run === true) {

            letterCheck(pressed);
        }

        else {

            // starts a new game if game status is still false
            newGame();
        }
    }

    //Checks to see if pressed key is part of userChoice
    function letterCheck (pressed) { 
        if (userChoice.indexOf(pressed.key.toUpperCase()) > -1) {

            // Runs correctCheck function
            correctCheck(pressed); 
        }
    } 

    // Checks to see if pressed key is part of getWord
    function correctCheck (pressed) {
        
        if (getWord.indexOf(pressed.key.toUpperCase()) > -1) {
            //if key is correct, run rightKey function.
            rightKey(pressed);
        }

        else {
            //if key is not valid, run wrongKey function
            wrongKey(pressed);
        }
    }

    // checks to see if pressed key is a part of hiddenWord
    function rightKey(pressed) {

        if (hiddenWord.indexOf(pressed.key.toUpperCase()) < 0) {

            // add pressed key into hiddenWord
            addKey(pressed);

        }
    }

    //if the pressed key is incorrect, this will decrease remainingAttempts by 1
    function wrongKey(pressed) {
        //decrements remainingAttempts if pressed key is -1 or not a part of getWord
        remainingAttempts--;

        var guessCount = document.getElementById("tried-letters");
        guessCount.textContent = remainingAttempts;

        console.log("You tried " + pressed.key.toUpperCase());
        console.log(getWord);
        console.log(hiddenWord);
        console.log("You have " + remainingAttempts + " guesses.");

        loseCheck(pressed);
    }

    // adds the pressed key to the hiddenword at [i] index if it is correct
    function addKey(pressed) {
        for (i = 0; i < getWord.length; i++) {

            if (pressed.key.toUpperCase() === getWord[i]) {

                // replaces the hidden[i] with the pressed key
                hiddenWord[i] = pressed.key.toUpperCase();
                lettersLeft--;

                var hiddenLetters = document.getElementById("hidden-letters");
                hiddenLetters.textContent = hiddenWord;

                console.log(hiddenWord);
                console.log(lettersLeft + " this many letters left.");

            }

            winCheck(pressed);

        }
    }

    // checks to see if lettersLeft is 0. if it is, the user wins
    function winCheck() {
        if (lettersLeft === 0) {
            lettersLeft = -1; 
            winCount++;

            var winUp = document.getElementById("win-count");
                winUp.textContent = winCount;

  
            var hiddenLetters = document.getElementById("hidden-letters");
            hiddenLetters.textContent = hiddenWord;

            // stops game until a key is pressed
            run = false;

        }  
    }


    // checks to see if the remainingAttempts is 0. If 0, user loses and newGame function starts
    function loseCheck() {
        if (remainingAttempts === 0) {
            console.log("you lost and you suck at guessing.");

            newGame();
        }
    }
    

    // function to create a new game with a new word
    function newGame() {   

        run = true; 
        getWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]; //generate random word as an array
        hiddenWord = []; 
        lettersLeft = getWord.length;
        remainingAttempts = 15;

        
        for (var i = 0; i < getWord.length; i++) {
            
            // * still work in progress for multiple words. *
            // replaces letter with a space or underscore
            // if (getWord[i] === " ") {
            //     hiddenWord.push(" ");

            //     // decrease length by 1 because of the space otherwise length = 1 and user won't ever win
            //     lettersLeft = [getWord.length - 1];
            //     console.log("Letters left " + lettersLeft);
            // }
            // else {
                
            // }

            hiddenWord.push("_"); 

            var hiddenLetters = document.getElementById("hidden-letters");
                hiddenLetters.textContent = hiddenWord;
        }
        var guessedLetters = document.getElementById("tried-letters");
            guessedLetters.textContent = remainingAttempts;
        return getWord, hiddenWord, lettersLeft;
    }
    