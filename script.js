//Idea time - input for wordle questions
//randomise the 'wordle' for today (every time it's opened? OR on timer?)
//check if the inputs match any of the wordle of today


// console.log(words.length)

//to do:
// Keyboard (maybe) - thinking floating letters - left side = unused, right side = used
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

let winCounter = 0;

let rowCounter = 1;

let inputArr = [];

const inputObj = new Object();

// const input = document.getElementById('input')



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


//lets do this with dynamic arrays
function checkInput(e) {

    // console.log(e)
    arrName = `newArr${rowCounter}`;

    // let arrName = `newArr${rowCounter}`;
    
    // inputObj[arrName] = [];
    // userInput.innerText = userInput.toLowerCase()
    // console.log(e)
    // let currentLetter = e.data
    
    // let arrName = `newArr${rowCounter}`
    // console.log('current array name' + arrName)
    // inputObj[arrName] = [];
    // console.log(inputObj)
    // console.log(rowCounter)

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

document.body.addEventListener('keyup', checkForSubmit)

function checkForSubmit(e) {
if (e.code.includes('Enter')) {
    checkValidWords(inputObj[arrName])    
    // submitGuess()
    }
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
    // wordleArr - array of individual wordle letters
    //inputArr - array of individual input letters
    // console.log(inputArr)
    // console.log(inputArr.length)
    // if (!(inputArr.length = 5)) {
    //     alert('you need to type 5 letters')
    // }
    // let newP = document.createElement('p')
    // inputObj[rowCounter] = inputArr
    // console.log(array)
    // console.log(fixArrName)
    // arrName = `newArr${rowCounter}`;
    inputArr = inputObj[fixArrName]
    // console.log(inputArr)
    // if (todaysWordleArr == inputArr) {
    //     alert('YOU WON!!!')
    //     console.log('WINNERWINNER')
    //     // break
    // }

    // console.log(inputArr.length)

    //error logging - good enough for now
    if (inputArr.length <= 4) {
        console.log('not enough letters yo')
        alert('Not enough letters - 5 letters needed')
        return 
    }


    //run duplicate letter fn

    wordleDupeFix()

    console.log(`dupe Counter = ${wordleDupeCounter}`)


    //UNCOMMENT FROM HERE

    console.log(inputObj)
    let results = document.getElementById('results')
    for (let thisInput in inputArr) {
        // console.log(thisInput)
        let idVar = `letter${rowCounter}${thisInput}`
        // console.log('test' + todaysWordleArr[wordleLetter])
        // console.log('test' + inputArr[wordleLetter])
        if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
            // let newP = document.createElement('p')
            // newP.textContent = `${inputArr[thisInput]} is exactly right`
            // results.appendChild(newP)
            // console.log('perfect')
            // console.log(`#letter${thisInput}`)
            // console.log(idVar)
            // let thisDiv = document.querySelector(idVar)
            let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('green')
            // thisDiv.classList.add('green')
            // console.log(thisDiv)
            // console.log(thisDiv.innerHTML)
            // console.log(thisDiv.classList)

        } else if (todaysWordleArr.includes(inputArr[thisInput])) {
            // let newP = document.createElement('p')
            // console.log('close')
            // newP.textContent = `${inputArr[thisInput]} is the right letter in the wrong spot`
            // results.appendChild(newP)
            let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('yellow')
            // results.appendChild(newP)
        } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
            let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('grey')
            // let newP = document.createElement('p')
            // newP.textContent = `${inputArr[thisInput]} is not in the wordle`
            // results.appendChild(newP)
            // results.appendChild(newP)
            // console.log('no dice')
        }
        // results.appendChild(newP)
        
    }





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
    // for (let wordleLetter in todaysWordleArr) {
    //     console.log('test' + todaysWordleArr[wordleLetter])
    //     console.log('test' + inputArr[wordleLetter])
    //     if (inputArr[wordleLetter] === todaysWordleArr[wordleLetter]) {
    //         console.log('perfect')
    //     } else if (inputArr.includes(todaysWordleArr[wordleLetter])) {
    //         console.log('close')
    //     } else if (!(inputArr.includes(todaysWordleArr[wordleLetter]))) {
    //         console.log('no dice')
    //     }
        
   
    // }
   
    // for (let thisInput in inputArr) {
    //     console.log('test' + inputArr[thisInput])
    //     if (inputArr[thisInput] === wordleArr[thisInput]) {
    //         console.log('perfect')
    //     } else if (inputArr[thisInput])
        
   
    // }
    // for (letter of )
    // console.log(input)
    // console.log(todaysWordleArr)
    

}




let wordleDupeCounter = 0;


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


//idea taken from stackOverflow
function getDupes(array) {
   return array.filter((e, i, a) => a.indexOf(e) !== i)
}

//idea taken from MDN examples
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


let dupeTestArr = [1, 2, 1, 3, 4, 3, 5, 1, 2, 4, 1];
let dupeTestElement = 1;

// let todaysWorldeDupes = getDupes(todaysWordleArr)


// console.log(getDupeIndex(dupeTestArr, dupeTestElement))

// Get the duplicate letters (if any) from todays wordle
let todaysWordleDupesTest = getDupes(todaysWordleArr)

//Get the duplicate letters (if any) from player input
// let playerInputDupes = getDupes(inputArr);

// console.log(inputArr)
// console.log(playerInputDupes)

//Store the dupes so that they can be passed into the indice fn
let firstDupe = todaysWordleDupesTest[0]
let secondDupe = todaysWordleDupesTest[1]


//find & store indexes of first duplicate letter in Wordle
// let firstWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, firstWordleDupeTest)

//find & store indexes of second duplicate letter in Wordle (RARE)
// let secondWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, secondWordleDupeTest)


if (todaysWordleDupesTest.length == 0) {
    console.log('no duplicates in todays Wordle')
} else if (todaysWordleDupesTest.length == 1) {
    let firstWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, firstDupe)
    console.log(`1 duplicate letter: ${firstDupe} located at ${firstWordleDupeIndicesTest[0]} & ${firstWordleDupeIndicesTest[1]} spots`)
} else if (todaysWordleDupesTest.length == 2) {
    let firstWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, firstDupe)
    let secondWordleDupeIndicesTest = getDupeIndex(todaysWordleArr, secondDupe)
    console.log(`2 duplicate letters: ${firstDupe} located at ${firstWordleDupeIndicesTest[0]} & ${firstWordleDupeIndicesTest[1]} spots as well as ${secondDupe} located at ${secondWordleDupeIndicesTest[0]} & ${secondWordleDupeIndicesTest[1]} spots`)
}

// console.log(todaysWordleDupes)
// console.log(firstDupe)

console.log(getDupeIndex(todaysWordleArr, firstDupe))
console.log(getDupeIndex(todaysWordleArr, secondDupe))
console.log(getDupes(todaysWordleArr))
// console.log(getDupes(['a', 'a', 'a', 'b', 'c', 'd']))
// console.log(getDupes(dupeTestArr))

function wordleDupeFix() {
    
    // let fixArrName = `newArr${rowCounter}`;
    // inputArr = inputObj[fixArrName]

    // Get the duplicate letters (if any) from todays wordle & return array
    let todaysWordleDupes = getDupes(todaysWordleArr)

    //Store the Wordle dupes so that they can be passed into the indice fn
    let firstWordleDupe = todaysWordleDupes[0]
    let secondWordleDupe = todaysWordleDupes[1]
    // let thirdDupe = todaysWordleDupes[2]


    //find & store indexes of first duplicate letter in Wordle
    let firstWordleDupeIndices = getDupeIndex(todaysWordleArr, firstWordleDupe)

    //find & store indexes of second duplicate letter in Wordle (RARE)
    let secondWordleDupeIndices = getDupeIndex(todaysWordleArr, secondWordleDupe)


    //Get the duplicate letters entered by player - store as array
    let playerInputDupes = getDupes(inputArr);

        //Store the player input dupes so that they can be passed into the indice fn
    let firstPlayerDupe = playerInputDupes[0];
    let secondPlayerDupe = playerInputDupes[1];
    // let thirdPlayerDupe = playerInputDupes[2];


    // let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
    // let secondPlayerDupeIndices = getDupeIndex(inputArr, secondPlayerDupe)

//NOTE: IS POSSIBLE FOR 3 OF THE SAME LETTER TO COME UP - NOT ACCOUNTED FOR YET
    //check if firstPlayer Indices or secondPlayerIndices are 3 in length

    // if (playerInputDupes.length == 0) {
    //     console.log('no duplicates in player input')
    // } else if (playerInputDupes.length == 1) {
    //     let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
    //     console.log(`1 duplicate letter in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots`)
    // } else if (playerInputDupes.length == 2) {
    //     let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
    //     let secondPlayerDupeIndices = getDupeIndex(inputArr, secondPlayerDupe)
    //     console.log(`2 duplicate letters in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots as well as ${secondPlayerDupe} located at ${secondPlayerDupeIndices[0]} & ${secondPlayerDupeIndices[1]} spots`)
    // }




    if (playerInputDupes.length == 0) {
        console.log('no duplicates in player input')
    } else if (playerInputDupes.length == 1) {
        wordleDupeCounter++
        let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
        if (todaysWordleDupes.length == 1) {
            if (firstPlayerDupe == firstWordleDupe) {
                for (let index in firstPlayerDupeIndices) {
                    if (firstPlayerDupeIndices[index] == firstWordleDupeIndices[index]) {
                        //color that one green
                        if (firstPlayerDupeIndices[index] == firstPlayerDupeIndices[0]) {
                            console.log(`color ${firstPlayerDupeIndices[index]} green, color ${firstPlayerDupeIndices[1]}`)
                        } else if (firstPlayerDupeIndices[index] == firstPlayerDupeIndices[1]) {
                            console.log(`color ${firstPlayerDupeIndices[index]} green, color ${firstPlayerDupeIndices[0]}`)
                        }
                    } else if (firstPlayerDupeIndices[index] != firstWordleDupeIndices[index]) {
                        console.log(`color ${firstPlayerDupeIndices[0]} yellow, color  ${firstPlayerDupeIndices[1]} grey`)
                    }
                }
            } else if (firstPlayerDupe != firstWordleDupe) {
                console.log(`dupe in wordle ${firstWordleDupe} and input ${firstPlayerDupe} but different letters`)

         
            }
        } else if (todaysWordleDupes.length == 0) {
            console.log(`dupe in input ${firstPlayerDupe} but not in wordle`)
                //    for (let thisInput in inputArr) {
                //        let idVar = `letter${rowCounter}${thisInput}`
                //        console.log(idVar)
                //        console.log(inputArr[thisInput])
                //     if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
                //         let thisDiv = document.getElementById(idVar)
                //         thisDiv.classList.add('green')
                //         return
                //     } else if (todaysWordleArr.includes(inputArr[thisInput])) {
                //         let thisDiv = document.getElementById(idVar)
                //         thisDiv.classList.add('yellow')
                //         return
                //     } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
                //         let thisDiv = document.getElementById(idVar)
                //         thisDiv.classList.add('grey')
                //         return
                //     }
            
                // }
            }
                
        }
            // else if (dupes arent the same letter)
        // if (firstPlayerDupe == firstWordleDupe || firstPlayerDupe == secondWordleDupe) {
        //     for (let index in firstPlayerDupeIndices){
        //         if (firstPlayerDupeIndices[index] == firstWordleDupeIndices[index]) {
        //             //color that one green
        //             console.log(`color ${firstPlayerDupeIndices[index]}`)
        //         }
        //     }
        // console.log(`1 duplicate letter in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots`)
    // } 






    // else if (playerInputDupes.length == 2) {
    //     let firstPlayerDupeIndices = getDupeIndex(inputArr, firstPlayerDupe)
    //     let secondPlayerDupeIndices = getDupeIndex(inputArr, secondPlayerDupe)
    //     console.log(`2 duplicate letters in input: ${firstPlayerDupe} located at ${firstPlayerDupeIndices[0]} & ${firstPlayerDupeIndices[1]} spots as well as ${secondPlayerDupe} located at ${secondPlayerDupeIndices[0]} & ${secondPlayerDupeIndices[1]} spots`)
    // }


    // for (index of )


    console.log(inputArr)

    //duplicate letters entered (in array form)
    console.log(playerInputDupes)
    
    //Check the indexes of the first duplicate player input letter (most Wordles will only have one)
    console.log(getDupeIndex(inputArr, firstPlayerDupe))

    //Check the indexes of the second duplicate plater input letter
    console.log(getDupeIndex(inputArr, secondPlayerDupe))

}


//Append the word to test
const cheatButton = document.getElementById('cheat');
const output = document.getElementById('output');
let newH = document.createElement('h2');
newH.classList.add('hide');
newH.innerHTML= capitaliseThis(randomWord);
output.appendChild(newH);
cheatButton.addEventListener('click', () => {
        newH.classList.toggle('hide');
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




