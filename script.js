//Idea time - input for wordle questions
//randomise the 'wordle' for today (every time it's opened? OR on timer?)
//check if the inputs match any of the wordle of today




//BUGS
// duplicates only working for 2 letters in input + no doubles letters in wordle
//if you get same letter green after its yellow first - used letter divs stay yellow


//to do:

//multiple letters in word logic - should be 'exact matches' > left to right for both double word wordles and guesses
//extensions (below)


//multiple letters - dedupe method? Push anything doubled into new array and store to check later 'dupedLetters' etc
//IDEA - seperate colourboxes fn from submit gn
//global duplicate letter counter, run dupe fn only if it is > 1
//Somehow make dupe colouring work and not colour other duplicate letters


//track wins - winCounter, but will reset on refresh, need to look into 'states' to store outside of refresh somehow


//That thing I keep thinking of and forgetting which I will definitely write when I remember next time gosh dang

//AUTO ENTER AFTER 5 LETTERS ENTERED!! (wordle doesnt do that though)
//A way to toggle auto-enter on/off?

//Done
// more rows
// checking they 'won' etc
//just translate to letter on screen without the input field on screen
//submit on 'enter'
//make displayed letter to upper case
//Can only type English words
//add CSS transitions
//add CSS animations (light up the boxes etc)
// Keyboard (maybe) - thinking floating letters - left side = unused, right side = used





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


//THINKING THROUGH DUPES PROPERLY THIS TIME - not just rushing it


// (wArr) wordleArr = wordle.split('')
// (gArr) guessArr = guess.split('')
// (wLeft) worldeLeft = wordle.split('')
// (gLedt) guessLeft = guess.split('')


// wordleArr = [W,O,R,S,E]
// guessArr = [W,O,W,E,E]
// 						0,1,2,3,4


// for (i in wArr) {
// 	if (wArr[i] === gArr[i]){
// 		gArr = Green
// 		wLeft[i] == ''
// 		gLeft[i] == ''
// }
// }


// wArr[0] = gArr[0]? W = W
// Yes -> Green
// wLeft[0] = ''
// gLeft[0] = ''

// wArr[1] = gArr[1]? O = O
// Yes -> Green
// wLeft[1] = ''
// gLeft[1] = ''

// wLeft = ['','',R,S,E]
// gLeft = ['','',W,E,E]


// wArr[2] = gArr[2]? R != W
// No -> Do nothing
// wLeft[2] = R
// gLeft[2] = W

// wArr[3] = gArr[3]? S != E
// No -> Do nothing
// wLeft[2] = S
// gLeft[2] = E


// wArr[4] = gArr[4]? E = E
// Yes -> Green
// wLeft[4] = ''
// gLeft[4] = ''


// wLeft = ['','',R,S,'']
// gLeft = ['','',W,E,'']


// for (i in wLeft){	
// 	(if wLeft.includes(gLeft[i]) && !(wLeft[i] = ''))){
// 	gLeft[i] - make yellow

// } else

// 	gLeft[i] - make gray	

// }



// ANOTHER EXAMPLE

// wArr = [E,A,A,E,R]
// gArr = [R A R A R]


// wordleArr = [E,A,A,E,R]
// guessArr = [R,A,R,A,R]
// 			0,1,2,3,4

// Correct letters:

// gArr[1]
// 1st A in guess = green

// gArr[4]
// 3rd R in guess = green

// gArr[3]
// 2nd A in guess = yellow

// gArr[0] + [2] = grey

// for (i in wArr) {
// 	if (wArr[i] === gArr[i]){
// 		gArr = Green
// 		wLeft[i] == ''
// 		gLeft[i] == ''
// }
// }


// wArr[0] = gArr[0]? E != R
// No -> Do nothing
// wLeft[2] = E
// gLeft[2] = R

// wArr[1] = gArr[1]? A = A
// Yes -> Green
// wLeft[1] = ''
// gLeft[1] = ''

// wLeft = [E,'',A,E,R]
// gLeft = [R,'',R,A,R]


// wArr[2] = gArr[2]? A != R
// No -> Do nothing
// wLeft[2] = A
// gLeft[2] = R

// wArr[3] = gArr[3]? E != A
// No -> Do nothing
// wLeft[2] = E
// gLeft[2] = A


// wArr[4] = gArr[4]? R = R
// Yes -> Green
// wLeft[4] = R
// gLeft[4] = R


// wLeft = [E,'',A,E,'']
// gLeft = [R,'',R,A,'']


// for (i in wLeft){	
// 	(if wLeft.includes(gLeft[i]) && !(wLeft[i] = ''))){
// 	gLeft[i] - make yellow
// 	gLeft[i] = ''

// } else

// 	gLeft[i] - make gray	
// 	gLeft[i] = ''

// }


// wLeft = [E,'',A,E,'']
// gLeft = [R,'',R,A,'']


// wArr includes gArr[0]? R not in wLeft
// gArr[0] - make gray
// gLeft[0] = ''

// wArr[1] = '' - skip

// wArr includes gArr[2]? R not in wLeft
// gArr[2] - make gray
// gLeft[2] = ''


// wArr includes gArr[3]? A IS in w Left
// gArr[3] - make yellow
// gArr[3] = ''



// wLeft = [E,'',A,E,'']
// gLeft = ['','','','','']


// Due to inputs being an object already

// wordleArr = wordleArr
// guessArr = guessObj[guessArr]


// wordleLeft + gLeft can be arrays - but must be cleared before next guess (5x pop?) or just = []

// Otherwise can be objects that remain?

// x = 0

// guessLeftObj = {}

// guessLeftObj[GuessLeft][x] = guessArr()

// wordleLeftObj = {}
// wordleLeftObj[WorldeLeft][x] = wordleArr.split()

// After fn runs:
// x++


// So guessLeftObj something like:

// {
// guessLeft0: ['','','','','']
// guessLeft1: ['','','','','']
// }


// wordleLeftObj something like:

// wordleLeft Obj {
// wordleLeft1: [A,'','',R,'']
// wordleLeft2: ['',E,'',R,'']
// }

// BUT - we want to clear all to start a new game (instead of refreshing) - easier if arrays and only need to clear the entire input Obj?

// Otherwise need to iterate all arrays of all objs & .pop?

//OR just GuessLeftObj = {}


//STORAGE TESTING

// function storageAvailable(type) {
//     var storage;
//     try {
//         storage = window[type];
//         var x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch(e) {
//         return e instanceof DOMException && (
//             // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             (storage && storage.length !== 0);
//     }
// }

// if (storageAvailable('localStorage')) {
//     // Yippee! We can use localStorage awesomeness
//     console.log('Yippee! We can use localStorage awesomeness')
//   }
//   else {
//     // Too bad, no localStorage for us
//     console.log('Too bad, no localStorage for us')
//   }



//Can make a player object for an individual to store their name
// store winning wordles etc - show them later


const player = new Object();
// player.name = 'Mac';
player.winCount = 3;
player.winningWordle = new Array()
// player.winAgainst = new Array();

// let winCounter = 0;

//giving the code existence of 'savedScore' outside initialisation (maybe better ways?)
let savedScore


//If no wincounter in local storage, set one to '0'
if (!(localStorage.getItem('winCounter'))) {
    console.log('no storage variable for winCounter - setting up and assigning savedScore variable next:')
    localStorage.setItem('winCounter', 0);
    savedScore = parseInt(localStorage.getItem('winCounter'))
    console.log(`log savedScore just after setting`)
    console.log(savedScore)
} else {
    // savedScore = (localStorage.getItem('winCounter'))
    console.log('storage variable for winCounter found - assigning to savedScore var next:')
    savedScore = parseInt(localStorage.getItem('winCounter'))
    console.log(`log savedScore just after getting`)
    console.log(savedScore)
}


// let savedScore = parseInt(localStorage.getItem('winCounter'))
console.log(`log savedScore outside initalisation loop`)
console.log(savedScore)




// savedScore++

// localStorage.setItem('winCounter', savedScore)

// console.log(`log savedScore just after updating ++`)
// console.log(savedScore)

// console.log(`log local storage just after updating ++`)
// console.log(localStorage.getItem('winCounter'))

// console.log(savedScore)

// console.log(parseInt(savedScore))

// if (savedScore = '0') {
//     // (localStorage.getItem('winCounter') = 0) {
//     console.log('wincounter is 0')   
// }

let showWinStreak = document.getElementById('winstreak')
showWinStreak.innerText = `Your lifetime score = ${savedScore}`

console.log(`${savedScore}`)

console.log(localStorage.getItem('winCounter'))
// console.log(typeof localStorage.getItem('winCounter'))

let rowCounter = 1;

let inputArr = [];

const inputObj = new Object();

//gets updated with the guesscount on win
let guessTracker

// const input = document.getElementById('input')

//Global duplicate counter to help fns accomodate
let wordleDupeCounter = 0;


let arrName = `newArr${rowCounter}`;
    
inputObj[arrName] = [];

const timedButton = document.getElementById('timed-button')
// const instructionsDiv = document.getElementById('instructions-div')

timedButton.addEventListener('click', timedMode)

// function showInstructions() {
//     instructionsDiv.classList.toggle('full-opacity')
// }

const topLevelInfo = document.getElementById('top-level-info')

//Creating countDown var outside of fn
let countDown
let countDownTimer

function timedMode() {
    
    // let displayCount = document.createElement('h4')

    let count = 90000
    countDownTimer = setInterval(function () {
        count = count - 1000
        console.log(count)
        console.log(`${count / 1000} seconds left`)
        timedButton.textContent = `${count / 1000} seconds left`;
        if (count / 1000 >= 60) {
            timedButton.style.color = 'green'
        } else if (count / 1000 <= 59 && count / 1000 >= 30) {
            timedButton.style.color = 'yellow'
        } else if (count / 1000 <= 29 && count / 1000 >= 0) {
            timedButton.style.color = 'red'
        }
}, 1000)
    countDown = setTimeout(lostTimed, 90000)
        // 3000)
        // 90000)

    if (rowCounter == 8) {
        clearInterval(countDownTimer)
        clearTimeout(countDown)
        endGame()
    }

    // console.log(countDown)
    // return countDown
}

// function wonTimed() {
//     const countDown = timedMode()
//     console.log(countDown)
//     clearTimeout(countDown)
// }

function lostTimed() {
    alert('Sorry, you lost this one! Refresh to play again')
    return
}


//put event listener on body
document.body.addEventListener('keyup', checkInput)



const unusedLettersDiv = document.getElementById('unused-letters')
const usedLettersDiv = document.getElementById('used-letters')


//NOTE: Cool alphabet array creator taken from https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));


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


function inputClickedUnusedLetter(letter) {
   
    arrName = `newArr${rowCounter}`;
    if (inputObj[arrName].length <= 4) { 
        inputObj[arrName].push(letter);
        } else if (inputObj[arrName].length == 5) {
            console.log('too many letters')
    }
    
    updateDivs(inputObj[arrName])
}


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


function inputClickedUsedLetter(letter, clickedDiv) {
   
    arrName = `newArr${rowCounter}`;
    if (clickedDiv.classList.contains('full-opacity')) {

    if (inputObj[arrName].length <= 4) {
        inputObj[arrName].push(letter);
    } else if (inputObj[arrName].length == 5) {
        console.log('too many letters')
    }
    
    updateDivs(inputObj[arrName])
}
}




//lets do this with dynamic arrays
function checkInput(e) {

    // console.log(e)
    arrName = `newArr${rowCounter}`;

    let keypress = e.code

    //give currentLetter something outside loop
    let currentLetter

    if (keypress.includes('Key')) {
        // let currentLetter = e.key
        let currentLetter = capitaliseThis(e.key)
        if (inputObj[arrName].length <= 4) { 
        inputObj[arrName].push(currentLetter)
        // console.log(inputObj)
        } else if (inputObj[arrName].length == 5) {
            console.log('too many letters')
    }
    }

    //if backspace is used remove a letter
    else if (keypress.includes('Backspace')) {
        inputObj[arrName].pop()
    }
    updateDivs(inputObj[arrName])

}


function updateDivs(letter) {
    let currentRow = document.getElementById(`row${rowCounter}`)
    let letterRow = document.querySelectorAll(`#row${rowCounter} .oneletter`)
    let currentLoop = 0


    for (oneLetter of letterRow) {
               // oneLetter[currentLoop].innerHTML = letter;
        if (letter[currentLoop]) {
            letterRow[currentLoop].innerHTML = letter[currentLoop]
        }
        else if (!(letter[currentLoop])) {
            letterRow[currentLoop].innerHTML = ''
        }

        currentLoop++
    }

}

function capitaliseThis(input) {
    let caplitalisedInput = input.toUpperCase()
    return caplitalisedInput
}



//Make a random number whenever this function is run

function randomNumList(length) {
    const randomNum = Math.floor(Math.random() * length)
    return randomNum
}

let letterDivs = document.querySelectorAll('.letters');


// New variable for the random num based on length of words array
//New variable for the word itself

let randomNumReturn = randomNumList(words.length)
let randomWord = words[randomNumReturn]

function todaysWordle() {
    let newWordleCapitalise = capitaliseThis(randomWord)
    let wordleArr = newWordleCapitalise.split('')
    return wordleArr
}

let todaysWordleArr = todaysWordle()


const instructionsButton = document.getElementById('instructions-button')
const instructionsDiv = document.getElementById('instructions-div')

instructionsButton.addEventListener('click', showInstructions)

function showInstructions() {
    instructionsDiv.classList.toggle('full-opacity')
}


document.body.addEventListener('keyup', checkForSubmit)


function checkForSubmit(e) {
if (e.code.includes('Enter')) {
    checkValidWords(inputObj[arrName])    

    }
}


const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', checkForSubmitButton)

function checkForSubmitButton() {
        checkValidWords(inputObj[arrName])    
    }

function checkValidWords(submittedArray) {
    const joinedGuessArray = submittedArray.join('')
    if (validWords.includes(joinedGuessArray.toUpperCase())) {
        
    } else {
        alert('Thats not a recognised word - try again')
        return
    }
  
    submitGuess()
}


function submitGuess() {
    let fixArrName = `newArr${rowCounter}`;
    inputArr = inputObj[fixArrName]
   
    //error logging - good enough for now
    if (inputArr.length <= 4) {
        console.log('not enough letters yo')
        alert('Not enough letters - 5 letters needed')
        return 
    }

    //3RD DUPE FIX FROM HERE:
    //HAD TO DO MORE STUFF TO GET IT RUNNING - writing everything out really helped


    console.log(todaysWordleArr)
    wordleLeft = todaysWordleArr.slice()
    console.log(`wordleLeft before loop`)
    console.log(wordleLeft)

    guessLeft = inputArr.slice()
    console.log(`guessLeft before loop`)
    console.log(guessLeft)

    for (letter in todaysWordleArr) {
        console.log(letter)
        console.log(todaysWordleArr)
        let idVar = `letter${rowCounter}${letter}`

        console.log(idVar)
        if (todaysWordleArr[letter] === inputArr[letter]){
            
            console.log(`${inputArr[letter]} = Green`)
            
            let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('green')

            wordleLeft[letter] = ''
            guessLeft[letter] = ''

            console.log(`wordleLeft in if loop`)
            console.log(wordleLeft)
            console.log(`guessLeft in if loop`)
            console.log(guessLeft)
        }
        console.log(`wordleLeft out of loop`)
        console.log(wordleLeft)
        console.log(`guessLeft out of if loop`)
        console.log(guessLeft)
    }

    
    
    for (letter in guessLeft) {
        console.log(letter)
        console.log(guessLeft)
        let idVar = `letter${rowCounter}${letter}`
        if ((wordleLeft.includes(guessLeft[letter])) && (guessLeft[letter] != '')) {
            console.log(`${inputArr[letter]} = Yellow`)
            
        let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('yellow')
            
        // console.log("Index of remaining yellow letter in wordle (to remove):")
        // console.log(wordleLeft.indexOf(guessLeft[letter]))

        let wordleLeftMatch = wordleLeft.indexOf(guessLeft[letter])
        wordleLeft[wordleLeftMatch] = ''
        guessLeft[letter] = ''

        console.log(`wordleLeft in yellow if loop`)
        console.log(wordleLeft)
        console.log(`guessLeft in yellow if loop`)
        console.log(guessLeft)
    }
        else if (!(wordleLeft.includes(guessLeft[letter])) && (guessLeft[letter] != '')) {
          console.log(`${inputArr[letter]} = Grey`)
          
          let thisDiv = document.getElementById(idVar)
          thisDiv.classList.add('grey')
            
          guessLeft[letter] = ''
          console.log(`wordleLeft in grey if loop`)
          console.log(wordleLeft)
          console.log(`guessLeft in grey if loop`)
          console.log(guessLeft)
      }
    }


    //hide letters type from unused letter section
    hideUnusedLetters()


    //Show used letters in the 'used letter section
    showUsedLetters()

  
    //CHECK WIN STATUS
    let currentLetterRowCorrect = document.querySelectorAll(`#row${rowCounter} .green`)
    if (currentLetterRowCorrect.length === todaysWordleArr.length) {
        // console.log('THATS A WIN BABYYYYY')
        // console.log(currentLetterRowCorrect)
        let allCorrectRow = document.querySelectorAll(`#row${rowCounter} .oneletter`)
        for (let oneCorrectLetter of allCorrectRow) {
            oneCorrectLetter.classList.add('test');
        }
        // console.log(allCorrectRow)

        guessTracker = rowCounter;
        console.log(`guessTracker before endgame = ${guessTracker}`)
        //set stop game
        rowCounter = 8
    }

    //run endGame function when game won (skip other parts of this fn)
    if (rowCounter == 8) {
        clearTimeout(countDown)
        clearInterval(countDownTimer)
        endGame()
        return
    }


    //increase row counter for selector logic to work
    rowCounter++
    
    //Set lost condition

    if (rowCounter == 7) {
        alert('Sorry, you lost this one! Refresh to play again')
    }
    // console.log('row count' + rowCounter)
    // input.value = ''
    let arrName = `newArr${rowCounter}`;
    inputObj[arrName] = [];

}

//Just a general console log for the current Wordle
console.log(todaysWordleArr)


function endGame() {

    console.log(`guessTracker in endgame = ${guessTracker}`)

    console.log(`log savedScore just before updating ++`)
    console.log(savedScore)

    console.log(`log local storage just before updating ++`)
    console.log(localStorage.getItem('winCounter'))

    //Add 1 to the localstorage variable
    savedScore++

    //Save this back to the localStorage
    localStorage.setItem('winCounter', savedScore)

    console.log(`log savedScore just after updating ++`)
    console.log(savedScore)

    console.log(`log local storage just after updating ++`)
    console.log(localStorage.getItem('winCounter'))

    showWinStreak.innerText = `Your lifetime score = ${savedScore}`



    document.body.removeEventListener('keyup', checkInput);
    document.body.removeEventListener('keyup', checkForSubmit);
    document.body.removeEventListener('keyup', checkForSubmit);
    console.log('youve entered the end game');
    // const finalScreen = document.getElementById('endgame');
    const finalScreen = document.querySelector('.endgame');
    console.log(`finalScren:`)
    console.log(finalScreen)
    // finalScreen.style.display = 'block';
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

    const newGameButton = document.getElementById('newgame');
    newGameButton.addEventListener('click', function () {
        window.location.reload();
    })
       

    
}


//Append the word to test
const cheatButton = document.getElementById('cheat');
const output = document.getElementById('output');
let newH = document.createElement('h2');
newH.classList.add('no-opacity');
newH.innerHTML= capitaliseThis(randomWord);
output.appendChild(newH);
cheatButton.addEventListener('click', () => {
        newH.classList.toggle('full-opacity');
    })
