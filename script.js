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



let winCounter = 0;

let rowCounter = 1;

let inputArr = [];

const inputObj = new Object();

// const input = document.getElementById('input')

//Global duplicate counter to help fns accomodate
let wordleDupeCounter = 0;


let arrName = `newArr${rowCounter}`;
    
inputObj[arrName] = [];


// let userInput = input.value



// input.addEventListener('input', checkInput)


//put event listener on body
document.body.addEventListener('keyup', checkInput)

// input.addEventListener('keyup', checkInput)



// input.addEventListener('keyup', function (e) {
//     console.log(e)
// })


// function checkInput(e) {
//     // userInput.innerText = userInput.toLowerCase()
//     // console.log(e)
//     // let currentLetter = e.data
//     let keypress = e.code

//     //give currentLetter something outside loop
//     let currentLetter

//     if (keypress.includes('Key')) {
//         let currentLetter = e.key
//         currentLetter.toLowerCase()
//         // console.log('thisletter' + currentLetter)
//         inputArr.push(currentLetter)
//     }

//     //if backspace is used remove a letter
//     else if (keypress.includes('Backspace'))
//     {
//         inputArr.pop()
//         }
//     // if (currentLetter)

// console.log(inputArr)
    
//     // console.log(e.target.value)
//     // inputArr.push(currentLetter)
//     // console.log(inputArr)

//     // // updateDivs(currentLetter);
//     updateDivs(inputArr);
//     return inputArr;
// }
const unusedLettersDiv = document.getElementById('unused-letters')
const usedLettersDiv = document.getElementById('used-letters')


//NOTE: Cool alphabet array creator taken from https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);


function generateUnusedLetters(array) {    
    
    for (let letter of array) {
        let newLetterDiv = document.createElement('div')
        // console.log(letter);
        newLetterDiv.id = `unused${letter}`
        newLetterDiv.classList.add('unused-letter-class')
        newLetterDiv.innerText = letter;

        newLetterDiv.addEventListener('click', function () {
            inputClickedUnusedLetter(letter);
        })
        // newLetterDiv.classList.add('unused-letters')
        
        unusedLettersDiv.appendChild(newLetterDiv);
   }
}

generateUnusedLetters(alphabet);




function inputClickedUnusedLetter(letter) {
   
    arrName = `newArr${rowCounter}`;
    // console.log(letter);
    // console.log(inputArr);
    if (inputObj[arrName].length <= 4) { 
        inputObj[arrName].push(letter);
        // console.log(inputObj)
        } else if (inputObj[arrName].length == 5) {
            console.log('too many letters')
    }
    

    // console.log(inputObj[arrName]);
    // inputObj[arrName].push(letter);
    // console.log(inputObj[arrName]);
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
        // if (oneUnusedLetterDiv.innerText == allTypedLetters[0].innerText)
            // oneUnusedLetterDiv.classList.add('no-opacity')
        // console.log(oneUnusedLetterDiv.innerText)
        // console.log(allUsedLetters)

    }
   
    // console.log(allUnusedLetterDivs)
    // console.log('input letters =')
    // console.log(allUsedLetters)
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
    // console.log(letter);
    // console.log(inputArr);

    if (clickedDiv.classList.contains('full-opacity')) {

    if (inputObj[arrName].length <= 4) {
        inputObj[arrName].push(letter);
        // console.log(inputObj)
    } else if (inputObj[arrName].length == 5) {
        console.log('too many letters')
    }
    

    // console.log(inputObj[arrName]);
    // inputObj[arrName].push(letter);
    // console.log(inputObj[arrName]);
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
        // currentLetter.toLowerCase()
        // currentLetter
        // console.log('this keypress pushed' + currentLetter)
        // console.log('thisletter' + currentLetter)
        // inputArr.push(currentLetter)
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
        // inputArr.pop()
    }
    // else if (keypress.includes('Enter')) {
    //     submitGuess()
    // }
    // if (currentLetter)

// console.log(inputArr)
    
    // console.log(e.target.value)
    // inputArr.push(currentLetter)
    // console.log(inputArr)

    // // updateDivs(currentLetter);
    // updateDivs(inputArr);
    updateDivs(inputObj[arrName])
    // const thisReturn = return inputObj[arrName];
}

// console.log('testing return')
// console.log(checkInput())

function updateDivs(letter) {
    // let letterRow = document.querySelectorAll('#row1 .oneletter')
    let currentRow = document.getElementById(`row${rowCounter}`)
    // console.log(currentRow)
    let letterRow = document.querySelectorAll(`#row${rowCounter} .oneletter`)
    // console.log(letterRow)
    let currentLoop = 0
    // letterRow[0].innerText = '1'
    // console.log('test' + letterRow[0])
    // letterRow[0].innerText = letter;

    for (oneLetter of letterRow) {
               // oneLetter[currentLoop].innerHTML = letter;
        if (letter[currentLoop]) {
            letterRow[currentLoop].innerHTML = letter[currentLoop]
        }
        else if (!(letter[currentLoop])) {
            letterRow[currentLoop].innerHTML = ''
        }
        // console.log('oneletter' + oneLetter)
        // console.log(oneLetter[0])
        currentLoop++
    }

    // for (oneLetter of letterRow) {
    //     // oneLetter[currentLoop].innerHTML = letter;
    //     letterRow[currentLoop].innerHTML = letter
    //     console.log('oneletter' + oneLetter)
    //     // console.log(oneLetter[0])
    //     currentLoop++
    // }
}

function capitaliseThis(input) {
    let caplitalisedInput = input.toUpperCase()
    return caplitalisedInput
}

// updateDivs('a');

// console.log(userInput)

//Make a random number whenever this function is run

function randomNumList(length) {
    const randomNum = Math.floor(Math.random() * length)
    return randomNum
}

let letterDivs = document.querySelectorAll('.letters');
// let divs = document.getElementsByClassName('letter')

// console.log(letterDivs)
// console.log(divs)


// for (div of letterDivs) {
//     console.log('test' + div.classList)
// }


// New variable for the random num based on length of words array
//New variable for the word itself

let randomNumReturn = randomNumList(words.length)
let randomWord = words[randomNumReturn]

function todaysWordle() {
    let newWordleCapitalise = capitaliseThis(randomWord)
    // let wordleArr = randomWord.split('')
    let wordleArr = newWordleCapitalise.split('')
    // console.log(wordleArr)
    return wordleArr
    // return wordleArr
}

let todaysWordleArr = todaysWordle()

// let submittedGuess = []

// const submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', submitGuess);


const instructionsButton = document.getElementById('instructions-button')
const instructionsDiv = document.getElementById('instructions-div')

instructionsButton.addEventListener('click', showInstructions)

function showInstructions() {
    instructionsDiv.classList.toggle('full-opacity')
    // instructionsDiv.classList.toggle('show')
}




document.body.addEventListener('keyup', checkForSubmit)


function checkForSubmit(e) {
if (e.code.includes('Enter')) {
    checkValidWords(inputObj[arrName])    
    // submitGuess()
    }
}


const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', checkForSubmitButton)

function checkForSubmitButton() {
        checkValidWords(inputObj[arrName])    
        // submitGuess()
        
    }


function checkValidWords(submittedArray) {
    
    const joinedGuessArray = submittedArray.join('')
    // console.log(joinedGuessArray)

    // console.log(validWords[4])

    if (validWords.includes(joinedGuessArray.toUpperCase())) {
        // console.log('real word')
    } else {
        alert('Thats not a recognised word - try again')
        // console.log('fake word')
        return
    }
      // todaysWordleArr - array of individual wordle letters
    //inputArr - array of individual input letters
  
    submitGuess()

    // let fixArrName = `newArr${rowCounter}`;
    // inputArr = inputObj[fixArrName]
    // console.log(fixArrName)
    // console.log(inputArr)
    // console.log(arrName)
    // console.log(todaysWordleArr)
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



    // wordleDupeFix(inputObj[fixArrName])
   let firstPlayerDupeReturned = wordleDupeFix(inputObj[fixArrName])

    console.log(`returned player dupe = ${firstPlayerDupeReturned}`)
    
    console.log(`dupe Counter = ${wordleDupeCounter}`)
    //run duplicate letter fn

    
    //NEW OLD DUPE FIX
    // newDupeFix()



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

    
    //USE THIS  let idVar = `letter${rowCounter}${inputArr[letter]}`
    
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

        //OLD SUBMISSION LOGIC

//         for (let thisInput in inputArr) {
//         let idVar = `letter${rowCounter}${thisInput}`
//         console.log(idVar)
//         console.log(inputArr[thisInput])
//     if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
//         let thisDiv = document.getElementById(idVar)
//         thisDiv.classList.add('green')
//     } else if (todaysWordleArr.includes(inputArr[thisInput])) {
//         let thisDiv = document.getElementById(idVar)
//         thisDiv.classList.add('yellow')
//     } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
//         let thisDiv = document.getElementById(idVar)
//         thisDiv.classList.add('grey')

//     }

// }

    console.log(`wordleLeft all loops finished`)
    console.log(wordleLeft)
    console.log(`guessLeft all loops finished`)
    console.log(guessLeft)

    //MY NOTES:
    // (wArr) wordleArr = wordle.split('')
    // (gArr) guessArr = guess.split('')
    // (wLeft) wordleLeft = wordle.split('')
    // (gLeft) guessLeft = guess.split('')


    // wArr = [E,A,A,E,R]
    // gArr = [R A R A R]


    // wordleArr = [E,A,A,E,R]
    // guessArr = [R,A,R,A,R]
    //                         0,1,2,3,4

    // Correct letters:

    // gArr[1]
    // 1st A in guess = green

    // gArr[4]
    // 3rd R in guess = green

    // gArr[3]
    // 2nd A in guess = yellow

    // gArr[0] + [2] = grey

    // for (i in wArr) {
    //     if (wArr[i] === gArr[i]){
    //         gArr = Green
    //         wLeft[i] == ''
    //         gLeft[i] == ''
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
    //     (if wLeft.includes(gLeft[i]) && !(wLeft[i] = ''))){
    //     gLeft[i] - make yellow
    //     gLeft[i] = ''

    // } else

    //     gLeft[i] - make gray
    //     gLeft[i] = ''

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




    //UNCOMMENT FROM HERE

    
      //OLD SUBMISSION LOGIC

    // console.log(inputObj)
    // // let results = document.getElementById('results')
    // for (let thisInput in inputArr) {
    //     // console.log(thisInput)
    //     let idVar = `letter${rowCounter}${thisInput}`
    //     let thisDivDupeCheck = document.getElementById(idVar)

    //     // console.log(firstPlayerDupeReturned.length)
    //     // console.log(firstPlayerDupeReturned)
    //     // console.log(thisDivDupeCheck)
    //     // console.log(thisDivDupeCheck.classList)
    //     // console.log(inputArr[thisInput])
    //     // console.log(firstPlayerDupeReturned[0])
        
    //     if (firstPlayerDupeReturned && firstPlayerDupeReturned.length == 1 && firstPlayerDupeReturned[0] == inputArr[thisInput] && todaysWordleArr.includes(firstPlayerDupeReturned[0]) && !(thisDivDupeCheck.classList.contains('yellow')) && !(thisDivDupeCheck.classList.contains('green'))) {
    //         console.log(`added grey to ${firstPlayerDupeReturned[0]}`)
    //         thisDivDupeCheck.classList.add('grey');
    //         continue


    //     }

    //     //CURRENTLY BROKEN

    //     // else if (firstPlayerDupeReturned && firstPlayerDupeReturned.length == 2 && firstPlayerDupeReturned[0] == inputArr[thisInput] || firstPlayerDupeReturned[1] == inputArr[thisInput] && todaysWordleArr.includes(firstPlayerDupeReturned[0]) || todaysWordleArr.includes(firstPlayerDupeReturned[1]) && !(thisDivDupeCheck.classList.contains('yellow')) && !(thisDivDupeCheck.classList.contains('green'))) {
    //     //     console.log(`added grey to ${firstPlayerDupeReturned[0]}`)
    //     //     console.log(`added grey to ${firstPlayerDupeReturned[1]}`)
    //     //     thisDivDupeCheck.classList.add('grey');
            
    //     //     continue
    //     // }    
            
            

            
            
        
    //         // if (firstPlayerDupeReturned == inputArr[thisInput] && todaysWordleArr.includes(firstPlayerDupeReturned)) {
    //         //     thisDivDupeCheck.classList.add('grey');
    //         //     continue
        

    //         // if (firstPlayerDupeReturned) {
    //         //     for (let thisInput in inputArr) {
                
    //         //     }
    //         // }


    //         // console.log('test' + todaysWordleArr[wordleLetter])
    //         // console.log('test' + inputArr[wordleLetter])
    //      else if (inputArr[thisInput] === todaysWordleArr[thisInput]) {

    //         let thisDiv = document.getElementById(idVar)
    //         thisDiv.classList.add('green')
      

    //     } else if (todaysWordleArr.includes(inputArr[thisInput])) {
    
    //         let thisDiv = document.getElementById(idVar)
    //         thisDiv.classList.add('yellow')

    //     } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
    //         let thisDiv = document.getElementById(idVar)
    //         thisDiv.classList.add('grey')

    //     } 
    // }

   //fINISH UNCOMMENTING


    //hide letters type from unused letter section
    hideUnusedLetters()


    //Show used letters in the 'used letter section
    showUsedLetters()



    //reset dupe counter after submission
     wordleDupeCounter = 0;


    // console.log(todaysWordleArr)
    // console.log(inputArr)
  
    //CHECK WIN STATUS

    let currentLetterRowCorrect = document.querySelectorAll(`#row${rowCounter} .green`)
    // console.log(currentLetterRowCorrect)
    // console.log(currentLetterRowCorrect.length)
    // let correctClasses = document.querySelectorAll('.green')
    // console.log(correctClasses)
    // console.log(correctClasses.length)
    // console.log(todaysWordleArr.length)
    if (currentLetterRowCorrect.length === todaysWordleArr.length) {
        // alert('Congratulations! You got the wordle!')
        console.log('THATS A WIN BABYYYYY')
        console.log(currentLetterRowCorrect)
        let allCorrectRow = document.querySelectorAll(`#row${rowCounter} .oneletter`)
        for (let oneCorrectLetter of allCorrectRow) {
            oneCorrectLetter.classList.add('test');
        }
        console.log(allCorrectRow)
        // allCorrectRow.classList.add('test');
        //set stop game
        rowCounter = 8
    }

    if (rowCounter == 8) {
        endGame()
        return
    }


    //increase row counter for selector logic to work
    rowCounter++
    
    //Set lost condition

    if (rowCounter == 7) {
        alert('Sorry, you lost this one! Refresh to play again')
    }


    console.log('row count' + rowCounter)
    // input.value = ''
    let arrName = `newArr${rowCounter}`;
    inputObj[arrName] = [];


}

console.log(todaysWordleArr)

//2nd DUPE FIX attempt (too advanced for me)

// function newDupeFix() {

//     let newInputArr = `DupeArr${rowCounter}`
//     let fixArrName = `newArr${rowCounter}`;
//     inputArr = inputObj[fixArrName]

//     someNewArr = []

//     let correctWord = todaysWordleArr; // update to use Wordle
    
//     const guessCheck = {}



//     for (let i in correctWord) {
//         // let j = guessCheck.indexOf(i)
//         if (correctWord[i] === inputArr[i]) {
//             console.log(inputArr[i])
//             guessCheck[j] === [inputArr][i]
//             console.log(guessCheck[i])
//             // guessCheck[newInputArr][i] === inputArr[i]
//         }
//         console.log(guessCheck)
//     }    
//     // const characterCount = {};

//     console.log('todays wordle:')
//     console.log(correctWord)

//     const characterCountObj = {};

//     let Arr = 1
//     // const characterCount = characterCountObj;

//     // const characterCount = characterCountObj

//     // const characterCount = characterCountObj[newInputArr]

//     // console.log(characterCount)

//     // correctWord.forEach(character => {
//     //     characterCount[character] = (characterCount[character] || 0) + 1
//     // });

//     // correctWord.forEach(character => {
//     //     characterCount[Arr][character] = (characterCount[Arr][character] || 0) + 1
//     // });

//     // for (let arrayItem in correctWord) {
//     //     characterCountObj[arrayItem] = correctWord[arrayItem] + 1
//     // }
//     // console.log(characterCountObj)
        
//     console.log('characterCount before in loop')
//     // console.log(characterCount)
// //     correctWord.split('').forEach(character => {
// //     characterCount[character] = (characterCount[character] || 0) + 1
// // });

// // for (let oneInput in inputArr) {
// //     if (inputArr[oneInput] === correctWord[oneInput]) {
// //         console.log(`characterObj has exact ${characterCount[oneInput]}`)
// //         console.log(`set ${inputArr[oneInput]} colour to green`)
// //         // characterCount[oneInput] = characterCount[oneInput] - 1;
// //         // characterCount[Arr][oneInput] = characterCount[Arr][oneInput] - 1;
// //     } else if (correctWord.includes(inputArr[oneInput]) && characterCount[oneInput] >= 1) {
// //          // set colour to yellow when new obj only includes the input (not direct match)
// //         console.log(`set ${inputArr[oneInput]} colour to yellow`)
// //         // characterCount[i] = characterCount[i] - 1;
// //         // characterCount[Arr][oneInput] = characterCount[Arr][oneInput] - 1;
// //     } else {
// //         // set colour to grey
// //         console.log(`set ${inputArr[oneInput]} colour to grey`)
// //     }
// //     // characterCount[oneInput] = ''
// // }
//     // console.log('input object:')
//     // console.log(inputObj)

//     // console.log('input arr')
//     // console.log(inputArr)

//     // console.log('character count:')
//     // console.log(characterCount)
//     // // characterCount = {};
    
// //     for (i = 0; i > characterCount.length; i++) {
// //        characterCount[i].pop()
// //    }
// //    console.log(characterCount)
// }





function colourBoxes() {

    let fixArrName = `newArr${rowCounter}`;
    inputArr = inputObj[fixArrName]

        for (let thisInput in inputArr) {
        let idVar = `letter${rowCounter}${thisInput}`
        console.log(idVar)
        console.log(inputArr[thisInput])
    if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
        let thisDiv = document.getElementById(idVar)
        thisDiv.classList.add('green')
    } else if (todaysWordleArr.includes(inputArr[thisInput])) {
        let thisDiv = document.getElementById(idVar)
        thisDiv.classList.add('yellow')
    } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
        let thisDiv = document.getElementById(idVar)
        thisDiv.classList.add('grey')

    }

}
}


function endGame() {

    document.body.removeEventListener('keyup', checkInput);
    document.body.removeEventListener('keyup', checkForSubmit);
    document.body.removeEventListener('keyup', checkForSubmit);
    console.log('youve entered the end game');
    const finalScreen = document.getElementById('endgame');
    finalScreen.style.display = 'block';

    const newGameButton = document.getElementById('newgame');
    newGameButton.addEventListener('click', function () {
        window.location.reload();
    })
       

    
}

// console.log(todaysWordleVar)

// console.log(randomNumReturn)
// console.log(words[randomNumReturn])

// console.log('test word:' + randomWord)


// function checkDupes(array) {
//     let dupeArr = []
//     for (let item of array) {
//         if (!dupeArr.includes(item))
//             dupeArr.push(item);
//     }
//     if (dupeArr.length <= 4) {
//         console.log('theres a duplicate')        
//     }
//     return dupeArr
// }
// console.log(checkDupes(todaysWordleArr))
// console.log(checkDupes(['a','a','b','c','d']))


//copying this example for 'flexiple.com'

// function toFindDuplicates(arry) {
//     const uniqueElements = new Set(arry);
//     const filteredElements = arry.filter(item => {
//         if (uniqueElements.has(item)) {
//             uniqueElements.delete(item);
//         } else {
//             return item;
//         }
//     });

//     return [...new Set(uniqueElements)]
// }

// const arry = [1, 2, 1, 3, 4, 3, 5];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);

// Output: [1, 3]

// console.log([1, 2, 2, 4, 3, 4].filter((e, i, a) => a.indexOf(e) !== i))



//Basically - get the duped letter, and the indexes of the letter in the array
//Run this over wordle array in beginning and input arrays each submission
//Use the indexes to do some logic around what gets green, yellow etc
//runs left to right - so without a green, left most letter in guess counts or wordle counts
//more thinking needed - bit mind explodey


//NOTE: idea taken from stackOverflow https://stackoverflow.com/a/32122760

function getDupes(array) {
   return array.filter((e, i, a) => a.indexOf(e) !== i)
}


//NOTE: idea taken from MDN examples https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
function getDupeIndex(array, element) {
    const indices = [];
    // const array = ['a', 'b', 'a', 'c', 'a', 'd'];
    // const element = 'a';
    let idx = array.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(element, idx + 1);
    }
    return indices;
}





// let dupeTestArr = [1, 2, 1, 3, 4, 3, 5, 1, 2, 4, 1];
// let dupeTestElement = 1;

// let todaysWorldeDupes = getDupes(todaysWordleArr)


// // console.log(getDupeIndex(dupeTestArr, dupeTestElement))

// // Get the duplicate letters (if any) from todays wordle
// let todaysWordleDupesTest = getDupes(todaysWordleArr)

// //Get the duplicate letters (if any) from player input
// // let playerInputDupes = getDupes(inputArr);

// // console.log(inputArr)
// // console.log(playerInputDupes)

// //Store the dupes so that they can be passed into the indice fn
// let firstDupe = todaysWordleDupesTest[0]
// let secondDupe = todaysWordleDupesTest[1]


//MORE UNUSED DUPE TEST (INDICES)

// //find & store indexes of first duplicate letter in Wordle
// let firstWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, firstWordleDupeTest)

// //find & store indexes of second duplicate letter in Wordle (RARE)
// let secondWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, secondWordleDupeTest)


//UNUSED WORDLE DUPE TEST LOGIC

// if (todaysWordleDupesTest.length == 0) {
//     console.log('no duplicates in todays Wordle')
// } else if (todaysWordleDupesTest.length == 1) {
//     let firstWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, firstDupe)
//     console.log(`1 duplicate letter: ${firstDupe} located at ${firstWordleDupeIndicesTest[0]} & ${firstWordleDupeIndicesTest[1]} spots`)
// } else if (todaysWordleDupesTest.length == 2) {
//     let firstWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, firstDupe)
//     let secondWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, secondDupe)
//     console.log(`2 duplicate letters: ${firstDupe} located at ${firstWordleDupeIndicesTest[0]} & ${firstWordleDupeIndicesTest[1]} spots as well as ${secondDupe} located at ${secondWordleDupeIndicesTest[0]} & ${secondWordleDupeIndicesTest[1]} spots`)
// }

// console.log(todaysWordleDupes)
// console.log(firstDupe)

// console.log(getDupeIndex(todaysWordleArr, firstDupe))
// console.log(getDupeIndex(todaysWordleArr, secondDupe))
// console.log(getDupes(todaysWordleArr))
// console.log(getDupes(['a', 'a', 'a', 'b', 'c', 'd']))
// console.log(getDupes(dupeTestArr))


//FIRST ATTEMPT AT DUPE FIXING - GOT OUT OF HAND

// function wordleDupeFix(array) {
    

//     // let fixArrName = `newArr${rowCounter}`;
//     // inputArr = inputObj[fixArrName]

//     inputArr = array

//     // Get the duplicate letters (if any) from todays wordle & return array
//     let todaysWordleDupes = getDupes(todaysWordleArr)

//     //Store the Wordle dupes so that they can be passed into the indice fn
//     let firstWordleDupe = todaysWordleDupes[0]
//     let secondWordleDupe = todaysWordleDupes[1]
//     // let thirdDupe = todaysWordleDupes[2]


//     //find & store indexes of first duplicate letter in Wordle
//     let firstWordleDupeIndices = getDupeIndex(todaysWordleArr, firstWordleDupe)

//     //find & store indexes of second duplicate letter in Wordle (RARE)
//     let secondWordleDupeIndices = getDupeIndex(todaysWordleArr, secondWordleDupe)


//     //Get the duplicate letters entered by player - store as array
//     let playerInputDupes = getDupes(inputArr);

//         //Store the player input dupes so that they can be passed into the indice fn
//     let firstPlayerDupe = playerInputDupes[0];
//     let secondPlayerDupe = playerInputDupes[1];
//     // let thirdPlayerDupe = playerInputDupes[2];


//     // let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
//     // let secondPlayerDupeIndices = getDupeIndex(inputArr, secondPlayerDupe)

// //NOTE: IS POSSIBLE FOR 3 OF THE SAME LETTER TO COME UP - NOT ACCOUNTED FOR YET
//     //check if firstPlayer Indices or secondPlayerIndices are 3 in length

//     // if (playerInputDupes.length == 0) {
//     //     console.log('no duplicates in player input')
//     // } else if (playerInputDupes.length == 1) {
//     //     let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
//     //     console.log(`1 duplicate letter in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots`)
//     // } else if (playerInputDupes.length == 2) {
//     //     let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
//     //     let secondPlayerDupeIndices = getDupeIndex(inputArr, secondPlayerDupe)
//     //     console.log(`2 duplicate letters in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots as well as ${secondPlayerDupe} located at ${secondPlayerDupeIndices[0]} & ${secondPlayerDupeIndices[1]} spots`)
//     // }

// console.log(playerInputDupes)


//     if (playerInputDupes.length == 0) {
//         console.log('no duplicates in player input')
//     } else if (playerInputDupes.length == 1) {
//         console.log('1 duplicate in input')
//         wordleDupeCounter++
//         let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
//         if (todaysWordleDupes.length == 1) {
//             console.log('1 duplicate in input AND Wordle')
//             // if (firstPlayerDupe == firstWordleDupe) {
//             //     for (let index in firstPlayerDupeIndices) {
//             //         if (firstPlayerDupeIndices[index] == firstWordleDupeIndices[index]) {
//             //             //color that one green
//             //             if (firstPlayerDupeIndices[index] == firstPlayerDupeIndices[0]) {
//             //                 console.log(`color ${firstPlayerDupeIndices[index]} green, color ${firstPlayerDupeIndices[1]} grey`)
//             //             } else if (firstPlayerDupeIndices[index] == firstPlayerDupeIndices[1]) {
//             //                 console.log(`color ${firstPlayerDupeIndices[index]} green, color ${firstPlayerDupeIndices[0]} grey`)
//             //             }
//             //         } else if (firstPlayerDupeIndices[index] != firstWordleDupeIndices[index]) {
//             //             console.log(`color ${firstPlayerDupeIndices[0]} yellow, color  ${firstPlayerDupeIndices[1]} grey`)
//             //         }
//             //     }
//             // } else if (firstPlayerDupe != firstWordleDupe) {
//             //     console.log(`dupe in wordle ${firstWordleDupe} and input ${firstPlayerDupe} but different letters`)

         
//             // }
//         } else if (todaysWordleDupes.length == 0) {
//             console.log('1 duplicate in input BUT NOT Wordle')
//             for (let thisInput in inputArr) {
//                 let idVar = `letter${rowCounter}${thisInput}`
//                 if (!inputArr[thisInput].includes(firstPlayerDupe)) {
//                     continue
                
//                     // for (let index of firstPlayerDupeIndices) {

//                     // }

//                     // console.log(idVar)
//                     // console.log(inputArr[thisInput])
//                 } else if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
//                     let thisDiv = document.getElementById(idVar)
//                     thisDiv.classList.add('green')
//                     console.log(`added green to dupe ${firstPlayerDupe}`)
//                     return playerInputDupes
//                 } else if (todaysWordleArr.includes(inputArr[thisInput])) {
//                     let thisDiv = document.getElementById(idVar)
//                     thisDiv.classList.add('yellow')
//                     console.log(`added yellow to dupe ${firstPlayerDupe}`)
//                     return playerInputDupes
//                 } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
//                     let thisDiv = document.getElementById(idVar)
//                     // thisDiv.classList.add(`added grey to dupe ${firstPlayerDupe}`)
//                     console.log(`added grey to dupe ${firstPlayerDupe}`)
//                     return playerInputDupes
//                 }

//                 console.log(`dupe in input ${firstPlayerDupe} but not in wordle`)
//             }
     
            
                
//             }
                
//         }
//         else if (playerInputDupes.length == 2) {
       
        
//     //     // CURRENTLY BROKEN
//     //     // let idVar = `letter${rowCounter}${thisInput}`

//     //     // let thisDiv = document.getElementById(idVar)
      
//     //     // let inputDupeOneDiv = 

//     //     // while (!(playerInputDupes[1].classList.contains('yellow')) || !(playerInputDupes[1].classList.contains('green'))) {

//     //     console.log('2 duplicates in input BUT None in Wordle')
//     //     for (let thisInput in inputArr) {
//     //         let idVar = `letter${rowCounter}${thisInput}`
//     //         // let thisDiv = document.getElementById(idVar)
            
//     //         if (!inputArr[thisInput].includes(firstPlayerDupe) && !inputArr[thisInput].includes(secondPlayerDupe)) {
//     //             continue
            
//     //             // for (let index of firstPlayerDupeIndices) {

//     //             // }

//     //             // console.log(idVar)
//     //             // console.log(inputArr[thisInput])
//     //         } else if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
//     //             let thisDiv = document.getElementById(idVar)
//     //             thisDiv.classList.add('green')
//     //             return playerInputDupes
//     //         } else if (todaysWordleArr.includes(inputArr[thisInput])) {
//     //             let thisDiv = document.getElementById(idVar)
//     //             thisDiv.classList.add('yellow')
//     //             return playerInputDupes
//     //         } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
//     //             let thisDiv = document.getElementById(idVar)
//     //             thisDiv.classList.add('grey')
//     //             return playerInputDupes
//     //         }

//     //         console.log(`dupe in input ${firstPlayerDupe} but not in wordle`)
//     //     }
 
//     // // }
            
//     //     }


//                    //    for (let thisInput in inputArr) {
//                 //        let idVar = `letter${rowCounter}${thisInput}`
//                 //        console.log(idVar)
//                 //        console.log(inputArr[thisInput])
//                 //     if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
//                 //         let thisDiv = document.getElementById(idVar)
//                 //         thisDiv.classList.add('green')
//                 //         return
//                 //     } else if (todaysWordleArr.includes(inputArr[thisInput])) {
//                 //         let thisDiv = document.getElementById(idVar)
//                 //         thisDiv.classList.add('yellow')
//                 //         return
//                 //     } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
//                 //         let thisDiv = document.getElementById(idVar)
//                 //         thisDiv.classList.add('grey')
//                 //         return
//                 //     }


//             // else if (dupes arent the same letter)
//         // if (firstPlayerDupe == firstWordleDupe || firstPlayerDupe == secondWordleDupe) {
//         //     for (let index in firstPlayerDupeIndices){
//         //         if (firstPlayerDupeIndices[index] == firstWordleDupeIndices[index]) {
//         //             //color that one green
//         //             console.log(`color ${firstPlayerDupeIndices[index]}`)
//         //         }
//         //     }
//         // console.log(`1 duplicate letter in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots`)
//     // } 






//     // else if (playerInputDupes.length == 2) {
//     //     let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
//     //     let secondPlayerDupeIndices = getDupeIndex(inputArr, secondPlayerDupe)
//     //     console.log(`2 duplicate letters in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots as well as ${secondPlayerDupe} located at ${secondPlayerDupeIndices[0]} & ${secondPlayerDupeIndices[1]} spots`)
//     }


//     // for (index of )


//     console.log(inputArr)

//     //duplicate letters entered (in array form)
//     console.log(playerInputDupes)
    
//     //Check the indexes of the first duplicate player input letter (most Wordles will only have one)
//     console.log(getDupeIndex(inputArr, firstPlayerDupe))

//     //Check the indexes of the second duplicate plater input letter
//     console.log(getDupeIndex(inputArr, secondPlayerDupe))

// }


//END OF FIRST DUPE ATTEMPT



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


//push todays random wordle to an array


// const input = prompt('Where are your green letters?')


// for (const word of words){
//     if((word.match(input)))
//     {
//         const match = document.createElement('p');
//         match.textContent = word;
//         document.body.appendChild(match);
//     }

// };
