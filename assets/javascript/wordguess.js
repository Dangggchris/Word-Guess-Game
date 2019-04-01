// somehow add images associated to hero name later
var heroes = [  {name: 'AXE', image: "../images/axe.png"},
                {name: 'BREWMASTER', image: "../images/axe.png"},
                {name: 'LIFESTEALER', image: "../images/axe.png"},
                {name: 'BRISTLEBACK', image: "../images/axe.png"},
                {name: 'PANGOLIER', image: "../images/axe.png"},
                {name: 'SLARK', image: "../images/axe.png"},
                {name: 'TERRORBLADE', image: "../images/axe.png"},
                {name: 'SILENCER', image: "../images/axe.png"},
                {name: 'TINKER', image: "../images/axe.png"},
                {name: 'ENIGMA', image: "../images/axe.png"},
                {name: 'BLOODSEEKER', image: "../images/axe.png"},
                {name: 'ZEUS', image: "../images/axe.png"},
                {name: 'INVOKER', image: "../images/axe.png"},
                {name: 'WEAVER', image: "../images/axe.png"},
                {name: 'CENTAUR', image: "../images/axe.png"},
                {name: 'VIPER', image: "../images/axe.png"},
                {name: 'VENOMANCER', image: "../images/axe.png"},
                {name: 'PUDGE', image: "../images/axe.png"},
                {name: 'ENCHANTRESS', image: "../images/axe.png"},
                {name: 'BEASTMASTER', image: "../images/axe.png"},
                {name: 'TIMBERSAW', image: "../images/axe.png"},
                {name: 'OMNIKNIGHT', image: "../images/axe.png"},
                {name: 'LYCAN', image: "../images/axe.png"},
                {name: 'LICH', image: "../images/axe.png"},
                {name: 'VISAGE', image: "../images/axe.png"},
                {name: 'MEDUSA', image: "../images/axe.png"},
                {name: 'JAKIRO', image: "../images/axe.png"}];

var userChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
                "U", "V", "W", "X", "Y", "Z"];

run = false;
var winCount = 0;
console.log("Don't look here, you cheater!")

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
        // random index number
        object = (heroes[Math.floor(Math.random() * heroes.length)])

        // grab word and image using index number
        getWord = object.name;
        getImage = object.image;

        var heroImage = document.getElementById("hero-image");
        heroImage.appendChild = getImage;

        console.log("This is the word: " + getWord);
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
    