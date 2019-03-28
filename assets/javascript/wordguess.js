
var wordChoices =["SONY","CRASH BANDICOOT","FINAL FANTASY","BLOODBORNE",
                "NAUGHTY DOG","KINGDOM HEARTS","PLAYSTATION EXPERIENCE",
                "SPYRO","THE LEGEND OF DRAGOON"];
var userChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
                "U", "V", "W", "X", "Y", "Z"];


var hiddenWord = []; // store hidden word
var winWord = []; // store win word. used to determine victory
var remainingAttempts = 15; // used to determine when user loses
getWord = [wordChoices[Math.floor(Math.random() * wordChoices.length)]]; //generate random word
run = false;

    // listens for user to press a key
    document.onkeyup = function (event) {
        
        //Starts a new game
        if (run === true) {

            letterCheck(event);
        }

        else {
            newGame();
        }
    }

    //Checks to see if pressed key is part of userChoice
    function letterCheck (event) { 
        if (userChoice.indexOf(event.key.toUpperCase()) > -1) {

            // Runs correctCheck function
            correctCheck(event); 
        }
    } 

    // Checks to see if pressed key is part of getWord
    function correctCheck (pressed) {
        console.log(getWord);
        if (getWord.indexOf(pressed.key.toUpperCase()) > -1) {
            //if key is correct, run rightKey function.
            rightKey(event);

        } else {

            //decrements remainingAttempts if pressed key is -1 or not a part of getWord
            console.log("You tried " + pressed.key.toUpperCase());
            console.log("wrong letter");
            remainingAttempts--;
            console.log(remainingAttempts);
        }
    }

    // checks to see if pressed key is a part of hiddenWord
    function rightKey(pressed) {

        if (hiddenWord.indexOf(pressed.key.toUpperCase()) < 0) {

            addKey(pressed);
        }
    }

    // adds the pressed key to the hiddenword at [i] index if it is correct
    function addKey(pressed) {

        for (i = 0; i < getWord.length; i++) {
            if (pressed.key.toUpperCase() === getWord[i]) {

                // replaces the hidden[i] with the pressed key
                hiddenWord[i] = pressed.key.toUpperCase();

                console.log("right letter");
                console.log("Hidden word is " + hiddenWord);
                console.log("Game word is " + winWord);
                console.log("You guessed " + pressed.key.toUpperCase());
            }
        }
    }

    

    // function to create a new game with a new word
    function newGame() {     
        run = true; 
        getWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]; //generate random word as an array
        hiddenWord = []; //Array 
        winWord = []; // Array to compare the hiddenWord array later for ultimate victory 

        for (var i = 0; i < getWord.length; i++) {
            
            if (getWord[i] === " ") {
                hiddenWord.push(" ");
            }

            else {
                hiddenWord.push("_");
            }  
        }

        for (var i = 0; i < getWord.length; i++) {
            
            winWord.push(getWord[i]);

        }
        
        return getWord, hiddenWord, winWord;
    }

    