//START NOTES

//BUGS
//Can start timed mode after starting Wordle fill out
//Need to create a reset fn without refreshing page - call new Wordle, clear all inputs etc


//TO DO
// some extensions (below)
// Better response for an 'invalid word' than an alert
// Better response for 'not enough letters' than an alert


//NOT DONE - Maybe pile
//auto enter 5 letter? A way to toggle auto-enter on/off?
//Dark/light mode
//Sharing results
//track lowest guess counter - player name etc (more below)
//IDEA - seperate colourboxes fn from submit gn(fn created but not used)


//Can make a player object for an individual to store their name
// store in localStorage -  winning wordles etc - show them later
// const player = new Object();
// player.name = 'Danny'; (ask in input)
// player.winCount = x;
// player.winningWordle = new Array()
// player.leastGuesses = y;


//DONE
// more rows
// checking they 'won' etc
//just translate to letter on screen without the input field on screen
//submit on 'enter'
//make displayed letter to upper case
//Can only type English words
//add CSS transitions
//add CSS animations (light up the boxes etc)
// Keyboard (maybe) - thinking floating letters - left side = unused, right side = used
//track wins - winCounter, but will reset on refresh, need to look into 'states' to store outside of refresh somehow
//Double letter fixes
//multiple letters in word logic - should be 'exact matches' > left to right for both double word wordles and guesses
//End screen
//Lose screen
//Timed modes


// EXTENSION IDEAS:
// Keep track of multiple game rounds with a win counter (can you keep that winning streak??)
// Allow game customizable options, time limits, guess limits, language options (e.g. American vs. British English)
// Use a custom set of words - around a theme
// Make it super easy for players to share their results or scores on social media
// Focus on the feel and flow of the app - does it move the cursor to the right textbox automatically?
// Get inventive with your styling - research CSS effects, animations to spiff things up
// Research LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
// Research web audio API and add sound effects to your game
// Be creative! Bend the rules and give it a twist!

//END NOTES


//START CODE

//giving the code existence of 'savedScore' outside initialisation (maybe better ways?)
let savedScore
let savedStreak

//If no wincounter in local storage, set one to '0'
if (!(localStorage.getItem('winCounter'))) {
    console.log('no storage variable for winCounter - setting up and assigning savedScore variable next:')
    localStorage.setItem('winCounter', 0);
    savedScore = parseInt(localStorage.getItem('winCounter'))
    console.log(`log savedScore just after setting`)
    console.log(savedScore)

//Otherwise - grab the current winCounter and set to 'savedScore' variable
} else {
    console.log('storage variable for winCounter found - assigning to savedScore var next:')
    savedScore = parseInt(localStorage.getItem('winCounter'))
    console.log(`log savedScore just after getting`)
    console.log(savedScore)
}

console.log(`log savedScore outside initalisation loop`)
console.log(savedScore)


//Similar logic for 'winStreak'
if (!(localStorage.getItem('winStreak'))) {
    console.log('no storage variable for winStreak- setting up and assigning savedStreak variable next:')
    localStorage.setItem('winStreak', 0);
    savedStreak = parseInt(localStorage.getItem('winStreak'))
    console.log(`log savedStreak just after setting`)
    console.log(savedStreak)
} else {
    console.log('storage variable for winStreak found - assigning to savedStreak var next:')
    savedStreak = parseInt(localStorage.getItem('winStreak'))
    console.log(`log savedStreak just after getting`)
    console.log(savedStreak)
}

//Append the win counter to the DOM
let showWinCounter = document.getElementById('win-counter')
showWinCounter.innerText = `Your lifetime score = ${savedScore}`

console.log(`${savedScore}`)

console.log(localStorage.getItem('winCounter'))

//Append the win streak to the DOM
let showWinStreak = document.getElementById('win-streak')
showWinStreak.innerText = `Your win streak = ${savedStreak}`

console.log(`${savedStreak}`)

console.log(localStorage.getItem('winStreak'))

//Global 'row counter' to allow parsing through input obj & selecting correct divs etc
let rowCounter = 1;

//Main array of player input letters
let inputArr = [];

//Main Obj containing arrays of input letters
const inputObj = new Object();

//gets updated with the guesscount on win
let guessTracker

//Dynamic array names for the input arrs inside Obj
let arrName = `newArr${rowCounter}`;
    
//NOTE: Maybe delete this?
inputObj[arrName] = [];

//Get speed mode buttons
const timedButton = document.getElementById('timed-button')
const speedButton = document.getElementById('speed-button')

//Add event listeners to start speed modes
timedButton.addEventListener('click', timedMode)
speedButton.addEventListener('click', speedMode)

//NOTE: Maybe delete this?
const topLevelInfo = document.getElementById('top-level-info')

//Creating countDown var outside of fn
let countDown
let countDownTimer

function timedMode() {
    //Remove other speed modes to stop problems
    speedButton.removeEventListener('click', speedMode)
    timedButton.removeEventListener('click', timedMode)

    //Give a count, at every second change the innerText & styling
    let count = 90000
    countDownTimer = setInterval(function () {
        count = count - 1000
        console.log(count)
        console.log(`${count / 1000} seconds left`)
        timedButton.textContent = `${count / 1000} seconds left`;
        if (count / 1000 >= 60) {
            timedButton.style.color = 'green'
            timedButton.style.fontWeight = '550'
        } else if (count / 1000 <= 59 && count / 1000 >= 30) {
            timedButton.style.color = 'yellow'
            timedButton.style.fontWeight = '700'
            timedButton.style.fontSize = '11pt'
        } else if (count / 1000 <= 29 && count / 1000 >= 0) {
            timedButton.style.color = 'red'
            timedButton.style.fontSize = '12pt'
            timedButton.style.fontWeight = '1000'
            timedButton.style.backgroundColor = 'white'
        }
    }, 1000)
    countDown = setTimeout(lostTimed, 90000)

    if (rowCounter == 8) {
        clearInterval(countDownTimer)
        clearTimeout(countDown)
        endGame()
    }

}


//Very similar - 'lighning mode' = 30s timer

function speedMode() {
    
    timedButton.removeEventListener('click', timedMode)
    speedButton.removeEventListener('click', speedMode)

    //Give a count, at every second change the innerText & styling
    let count = 30000
    countDownTimer = setInterval(function () {
        count = count - 1000
        console.log(count)
        console.log(`${count / 1000} seconds left`)
        speedButton.textContent = `${count / 1000} seconds left`;
        if (count / 1000 >= 20) {
            speedButton.style.color = 'green'
            speedButton.style.fontWeight = '550'
        } else if (count / 1000 <= 19 && count / 1000 >= 10) {
            speedButton.style.color = 'yellow'
            speedButton.style.fontWeight = '700'
            speedButton.style.fontSize = '11pt'
        } else if (count / 1000 <= 9 && count / 1000 >= 0) {
            speedButton.style.color = 'red'
            speedButton.style.fontSize = '12pt'
            speedButton.style.fontWeight = '1000'
            speedButton.style.backgroundColor = 'white'
        }
}, 1000)
    countDown = setTimeout(lostTimed, 30000)

    if (rowCounter == 8) {
        clearInterval(countDownTimer)
        clearTimeout(countDown)
        endGame()
    }
}


function lostTimed() {

    clearTimeout(countDown)
    clearInterval(countDownTimer)
    loseGame()
    return

}


//put event listener on body for inputs
document.body.addEventListener('keyup', checkInput)


//create 'floating' letters that are used/unused
const unusedLettersDiv = document.getElementById('unused-letters')
const usedLettersDiv = document.getElementById('used-letters')


//NOTE: Cool alphabet array creator taken from https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));


//using above function - generate the letter lists
function generateUnusedLetters(array) {    
    
    for (let letter of array) {
        let newLetterDiv = document.createElement('div')
        newLetterDiv.id = `unused${letter}`
        newLetterDiv.classList.add('unused-letter-class')
        newLetterDiv.innerText = letter;
        newLetterDiv.addEventListener('click', function () {
            inputClickedUnusedLetter(letter);
        })
        unusedLettersDiv.appendChild(newLetterDiv);
   }
}

generateUnusedLetters(alphabet);

//Set up ability to use them as a 'clickable keyboard'
function inputClickedUnusedLetter(letter) {
   
    arrName = `newArr${rowCounter}`;
    if (inputObj[arrName].length <= 4) { 
        inputObj[arrName].push(letter);
        } else if (inputObj[arrName].length == 5) {
            console.log('too many letters')
    }
    
    updateDivs(inputObj[arrName])
}

//On submission - remove letters from left side
function hideUnusedLetters() {
    let allUnusedLetterDivs = document.querySelectorAll('.unused-letter-class')
    let allTypedLetters = document.querySelectorAll('.green, .grey, .yellow')
   
    for (let oneUnusedLetterDiv of allUnusedLetterDivs) {
        for (let oneTypedLetter of allTypedLetters) {
            if (oneTypedLetter.innerText == oneUnusedLetterDiv.innerText) {
                oneUnusedLetterDiv.classList.add('no-opacity')
            }
        }
    }

}


//Similar to above except 'used' letters (right side)
function generateUsedLetters(array) {
     
    for (let letter of array) {
        let newLetterDiv = document.createElement('div')
        // console.log(letter);
        newLetterDiv.id = `used${letter}`
        newLetterDiv.classList.add('used-letter-class')
        newLetterDiv.classList.add('no-opacity')
        // newLetterDiv.classList.add('unused-letters')
        newLetterDiv.innerText = letter;
        newLetterDiv.addEventListener('click', function () {
            inputClickedUsedLetter(letter, newLetterDiv);
        })
        usedLettersDiv.appendChild(newLetterDiv);
   }
}

generateUsedLetters(alphabet);

//Make the used letters appear
function showUsedLetters() {

    let allUsedLetterDivs = document.querySelectorAll('.used-letter-class')
    let allTypedLetters = document.querySelectorAll('.green, .grey, .yellow')
    for (let oneUsedLetterDiv of allUsedLetterDivs) {
        for (let oneTypedLetter of allTypedLetters) {
            if (oneTypedLetter.innerText == oneUsedLetterDiv.innerText) {
                oneUsedLetterDiv.classList.add('full-opacity')
                if (oneTypedLetter.classList.contains('green')) {
                    oneUsedLetterDiv.classList.add('green')
                } else if (oneTypedLetter.classList.contains('yellow')) {
                    oneUsedLetterDiv.classList.add('yellow')
                }   else if (oneTypedLetter.classList.contains('grey')) {
                    oneUsedLetterDiv.classList.add('grey')
                }
            }
            }
        }
    }


//Push the clicked letters into the current input array
function inputClickedUsedLetter(letter, clickedDiv) {
   
    //Get the clicked letter and which div - push into current input array if room available

    arrName = `newArr${rowCounter}`;
    if (clickedDiv.classList.contains('full-opacity')) {

    if (inputObj[arrName].length <= 4) {
        inputObj[arrName].push(letter);
    } else if (inputObj[arrName].length == 5) {
        }
    //Can delete this else if?
         
    //Send the used letters to fn to get displayed
    updateDivs(inputObj[arrName])
}
}


//I decided to use an input 'object' instead of 1 array, lets me do more things with it in future
function checkInput(e) {

    arrName = `newArr${rowCounter}`;
    let keypress = e.code

    //initialise currentLetter outside loop
    let currentLetter

    //Make sure input is an alphabetic keypress - capitalise it and push to current input array if room available
    if (keypress.includes('Key')) {
        let currentLetter = capitaliseThis(e.key)
        if (inputObj[arrName].length <= 4) { 
        inputObj[arrName].push(currentLetter)
        } else if (inputObj[arrName].length == 5) {
    }
    }

    //if backspace is used remove a letter
    else if (keypress.includes('Backspace')) {
        inputObj[arrName].pop()
    }

    //send inputs to be displayed
    updateDivs(inputObj[arrName])

}


//This fn displays letters in the main page as it receives them
function updateDivs(letter) {
 
    //Use the global row counter to find everything in the relevant row
    let letterRow = document.querySelectorAll(`#row${rowCounter} .oneletter`)
    let currentLoop = 0

    //Loop through and fill out divs if there is something in the current array element - else remove (backspace etc)
    for (oneLetter of letterRow) {
        if (letter[currentLoop]) {
            letterRow[currentLoop].innerHTML = letter[currentLoop]
        }
        else if (!(letter[currentLoop])) {
            letterRow[currentLoop].innerHTML = ''
        }

        currentLoop++
    }

}

//Created a capitalisation fn to speed things up
function capitaliseThis(input) {
    let caplitalisedInput = input.toUpperCase()
    return caplitalisedInput
}



//Make a random number based on length of parameter whenever this function is run
function randomNumList(length) {
    const randomNum = Math.floor(Math.random() * length)
    return randomNum
}


//DELETE THIS IF NOTHING BREAKS
// let letterDivs = document.querySelectorAll('.letters');


// New variable for the random num based on length of words array
// New variable for the word itself

let randomNumReturn = randomNumList(words.length)
let randomWord = words[randomNumReturn]


//Made the Wordle picker into a fn so I can quickly get new ones if I want
//This also puts the Wordle into an array
function todaysWordle() {
    let newWordleCapitalise = capitaliseThis(randomWord)
    let wordleArr = newWordleCapitalise.split('')
    return wordleArr
}

//Get Wordle array globally
let todaysWordleArr = todaysWordle()



//Set instructions button to show and hide the instructions
const instructionsButton = document.getElementById('instructions-button')
const instructionsDiv = document.getElementById('instructions-div')

instructionsButton.addEventListener('click', showInstructions)

function showInstructions() {
    instructionsDiv.classList.toggle('full-opacity')
}

//Set event listener specifically for 'enter' key to run submission code
document.body.addEventListener('keyup', checkForSubmit)

//Before submission code - run through valid words array to check it's a real word
function checkForSubmit(e) {
if (e.code.includes('Enter')) {
    checkValidWords(inputObj[arrName])    

    }
}

//Similarly add event listener to allow submission via the 'submit button' for flexibility
const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', checkForSubmitButton)

function checkForSubmitButton() {
        checkValidWords(inputObj[arrName])    
    }


//fn to check that the submitted word is in the validWords array
//first to turn the input array into a string - then to run both against eachother
function checkValidWords(submittedArray) {
    const joinedGuessArray = submittedArray.join('')
    if (validWords.includes(joinedGuessArray.toUpperCase())) {
        
    } else {
        alert('Thats not a recognised word - try again')
        return
    }
  
    //After confirming valid word in input - submit fn is run
    submitGuess()
}


//Submit fn does a lot of work, could be decoupled more
//Checks for double letters - colours divs etc etc
function submitGuess() {
    let fixArrName = `newArr${rowCounter}`;
    inputArr = inputObj[fixArrName]
   
    //NOTE - can remove this? or improve?
    //error logging for less than 5 letters
    if (inputArr.length <= 4) {
        console.log('not enough letters yo')
        alert('Not enough letters - 5 letters needed')
        return 
    }


    //This was my 3rd attempt at fixing duplicate letters (previous attempts in past commits)
    //Wrote every single step and multiple possible wordles/guess down
    //This helped a lot - will plan more in future

    //Create a duplicate array of the current Wordle
    wordleLeft = todaysWordleArr.slice()

    //Create a duplicate array of the current input
    guessLeft = inputArr.slice()

    //loop through each letter in the wordle array
    for (letter in todaysWordleArr) {
        //set a dynamic variable for the elevant div
        let idVar = `letter${rowCounter}${letter}`

        //if the input and wordle letter match at this point - make the div green
        //remove both input and wordle letter from the cloned arrays so they are not used in following loop
        if (todaysWordleArr[letter] === inputArr[letter]){
            let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('green')
            wordleLeft[letter] = ''
            guessLeft[letter] = ''
        }
    }

    //Second loop - loop through all the letters LEFT in the guess clone array
    //If the Wordle array contains the current letter in input 
    //Then make the relevant div Yellow and remove from guess clone
    //Then find where the relevant letter appears in the wordle arr clone and also remove so it isn't re checked in following loops
    for (letter in guessLeft) {
        let idVar = `letter${rowCounter}${letter}`
        if ((wordleLeft.includes(guessLeft[letter])) && (guessLeft[letter] != '')) {
    
        let thisDiv = document.getElementById(idVar)
        thisDiv.classList.add('yellow')
        let wordleLeftMatch = wordleLeft.indexOf(guessLeft[letter])
        wordleLeft[wordleLeftMatch] = ''
        guessLeft[letter] = ''

    }
        else if (!(wordleLeft.includes(guessLeft[letter])) && (guessLeft[letter] != '')) {
          
          let thisDiv = document.getElementById(idVar)
          thisDiv.classList.add('grey')
          guessLeft[letter] = ''

      }
    }


    //hide letters type from unused letter section
    hideUnusedLetters()

    //Show used letters in the 'used letter section
    showUsedLetters()

  
    //Check win status - we know if there are 5 'green' divs in the current row that they have won
    let currentLetterRowCorrect = document.querySelectorAll(`#row${rowCounter} .green`)
    if (currentLetterRowCorrect.length === todaysWordleArr.length) {
        let allCorrectRow = document.querySelectorAll(`#row${rowCounter} .oneletter`)
        for (let oneCorrectLetter of allCorrectRow) {
            oneCorrectLetter.classList.add('test');
        }

        //I used rowCounter to run the endgames, cloning to keep track of how many guesses it took
        guessTracker = rowCounter;

        //Increase rowCounter beyond number of possible input Arrs so they can no longer type in guesses or cause issues
        rowCounter = 8
    }

    //run endGame function when game won (skip other parts of this fn)
    //If there are any timed games - stop the timers
    if (rowCounter == 8) {
        clearTimeout(countDown)
        clearInterval(countDownTimer)
        endGame()
        return
    }

    //If no win/loss condition
    //increase row counter for selector logic to work
    rowCounter++
    

    //Set lost condition when rowCounter reaches 7th line
    //run loseGame function when game lost. If there are any timed games - stop the timers
    if (rowCounter == 7) {
        clearTimeout(countDown)
        clearInterval(countDownTimer)
        loseGame()
        return
    }

    //Move to next array in Object & clear to stop any possible issues
    let arrName = `newArr${rowCounter}`;
    inputObj[arrName] = []
}

//Just a general console log for the current Wordle
console.log(todaysWordleArr)

//loseGame function similar to 'endGame' fn - except streaks get reset
function loseGame() {
    //Reset Saved Streak
    savedStreak = 0

    //Save this back to the localStorage
    localStorage.setItem('winStreak', savedStreak)

    //show new win streak in modal
    showWinStreak.innerText = `Your current streak = ${savedStreak}`

    //remove event listeners to stop any possible issues
    document.body.removeEventListener('keyup', checkInput);
    document.body.removeEventListener('keyup', checkForSubmit);
    document.body.removeEventListener('keyup', checkForSubmit);

    //get 'loes game' screen and apply visibilty class
    const finalScreen = document.querySelector('.losegame');
    finalScreen.id = 'losegame-display'

    //Create the Wordle string to append
    let todaysWordleStr = capitaliseThis(todaysWordleArr.join(''))

    const loseGameContent = document.getElementById('losegame-content');

    //Appent Wordle string
    const showWinningWord = document.getElementById('losing-word')
    showWinningWord.classList.add('losing-word')
    showWinningWord.textContent = `${todaysWordleStr}`

    //Dim the header
    const header = document.querySelector('header')
    header.style.opacity = '60%';

    //Append current win score
    let newH2 = document.createElement('h4');
    newH2.textContent = `Your current win score is ${savedScore}`
    loseGameContent.appendChild(newH2)


    //Append new win streak
    let newH3 = document.createElement('h4');
    newH3.textContent = `Your current win streak is ${savedStreak}`
    loseGameContent.appendChild(newH3)

    //Dim ALL divs (endgame + losegame are in 'asides')
    let allDivs = document.querySelectorAll('div')
    for (thisDiv of allDivs) {
        thisDiv.style.opacity = '60%';
    }

    //Add logice to refresh page to 'new game' button
    const newGameButton = document.getElementById('lose-new-game');
    newGameButton.addEventListener('click', function () {
        window.location.reload();
    })


}


//Very similar to loseGame fn except score and streak are increased
function endGame() {

    //Add 1 to the localstorage variable
    savedScore++

    //Save this back to the localStorage
    localStorage.setItem('winCounter', savedScore)

    showWinCounter.innerText = `Your lifetime score = ${savedScore}`

    //Add 1 to the localstorage winstreak variable
    savedStreak++

    //Save this back to the localStorage
    localStorage.setItem('winStreak', savedStreak)

    showWinStreak.innerText = `Your current streak = ${savedStreak}`

    document.body.removeEventListener('keyup', checkInput);
    document.body.removeEventListener('keyup', checkForSubmit);
    document.body.removeEventListener('keyup', checkForSubmit);

    const finalScreen = document.querySelector('.endgame');
    finalScreen.id = 'endgame-display'

    let todaysWordleStr = capitaliseThis(todaysWordleArr.join(''))

    const endgameContent = document.getElementById('endgame-content');

    let newH = document.createElement('h4');
    newH.textContent = `You won in ${guessTracker} guesses, nice work!`
    endgameContent.appendChild(newH)

    const showWinningWord = document.getElementById('winning-word')
    showWinningWord.classList.add('winning-word')
    showWinningWord.textContent = `${todaysWordleStr}`

    const header = document.querySelector('header')
    header.style.opacity = '60%';

    let newH2 = document.createElement('h4');
    newH2.textContent = `Your current win score is ${savedScore}`
    endgameContent.appendChild(newH2)

    let newH3 = document.createElement('h4');
    newH3.textContent = `Your current win streak is ${savedStreak}`
    endgameContent.appendChild(newH3)

    let allDivs = document.querySelectorAll('div')
    for (thisDiv of allDivs) {
        thisDiv.style.opacity = '60%';
    }

    const newGameButton = document.getElementById('newgame');
    newGameButton.addEventListener('click', function () {
        window.location.reload();
    })
       

    
}


//'cheat button' code to allow player to view Wordle (mainly for testing but have left in for now)
const cheatButton = document.getElementById('cheat');
const output = document.getElementById('output');
let newH = document.createElement('h2');
newH.classList.add('no-opacity');
newH.innerHTML= capitaliseThis(randomWord);
output.appendChild(newH);
cheatButton.addEventListener('click', () => {
        newH.classList.toggle('full-opacity');
    })


//END CODE