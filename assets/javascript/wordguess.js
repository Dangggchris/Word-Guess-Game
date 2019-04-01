// add images associated to hero name later
var heroes = [  {name: 'AXE', image: "assets/images/axe.png"},
                {name: 'BREWMASTER', image: "assets/images/brew.png"},
                {name: 'LIFESTEALER', image: "assets/images/lifestealer.png"},
                {name: 'BRISTLEBACK', image: "assets/images/bristle.png"},
                {name: 'PANGOLIER', image: "assets/images/pango.png"},
                {name: 'SLARK', image: "assets/images/slark.png"},
                {name: 'TERRORBLADE', image: "assets/images/terror.png"},
                {name: 'SILENCER', image: "assets/images/silencer.png"},
                {name: 'TINKER', image: "assets/images/tinker.png"},
                {name: 'ENIGMA', image: "assets/images/enigma.png"},
                {name: 'BLOODSEEKER', image: "assets/images/blood.png"},
                {name: 'ZEUS', image: "assets/images/zeus.png"},
                {name: 'INVOKER', image: "assets/images/invoker.png"},
                {name: 'WEAVER', image: "assets/images/weaver.png"},
                {name: 'CENTAUR', image: "assets/images/centaur.png"},
                {name: 'VIPER', image: "assets/images/viper.png"},
                {name: 'VENOMANCER', image: "assets/images/venomancer.png"},
                {name: 'PUDGE', image: "assets/images/pudge.png"},
                {name: 'ENCHANTRESS', image: "assets/images/enchantress.png"},
                {name: 'BEASTMASTER', image: "assets/images/beast.png"},
                {name: 'TIMBERSAW', image: "assets/images/timber.png"},
                {name: 'OMNIKNIGHT', image: "assets/images/omni.png"},
                {name: 'LYCAN', image: "assets/images/lycan.png"},
                {name: 'LICH', image: "assets/images/lich.png"},
                {name: 'VISAGE', image: "assets/images/visage.png"},
                {name: 'MEDUSA', image: "assets/images/medusa.png"},
                {name: 'JAKIRO', image: "assets/images/jakiro.png"}];

var emblem = "assets/images/emblem.png";

var startImage = document.getElementById("hero-image");
    startImage.src = emblem;

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
        heroImage.src = getImage;

        console.log("This is the word: " + getWord);
        hiddenWord = []; 
        lettersLeft = getWord.length;
        remainingAttempts = 15;

        
        for (var i = 0; i < getWord.length; i++) {
            
            // // * still work in progress for multiple words. *
            // // replaces letter with a space or underscore
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
    