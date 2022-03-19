//Idea time - input for wordle questions
//randomise the 'wordle' for today (every time it's opened? OR on timer?)
//check if the inputs match any of the wordle of today
// 

// console.log(words.length)


let rowCounter = 1

let inputArr = []

const inputObj = new Object();

const input = document.getElementById('input')



let arrName = `newArr${rowCounter}`;
    
inputObj[arrName] = [];


let userInput = input.value



// input.addEventListener('input', checkInput)

input.addEventListener('keyup', checkInput)

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

    arrName = `newArr${rowCounter}`;

    // let arrName = `newArr${rowCounter}`;
    
    // inputObj[arrName] = [];
    // userInput.innerText = userInput.toLowerCase()
    // console.log(e)
    // let currentLetter = e.data
    
    // let arrName = `newArr${rowCounter}`
    console.log('current array name' + arrName)
    // inputObj[arrName] = [];
    console.log(inputObj)
    console.log(rowCounter)

    let keypress = e.code

    //give currentLetter something outside loop
    let currentLetter

    if (keypress.includes('Key')) {
        let currentLetter = e.key
        currentLetter.toLowerCase()
        // console.log('thisletter' + currentLetter)
        // inputArr.push(currentLetter)
        inputObj[arrName].push(currentLetter)
        console.log(inputObj)
    }

    //if backspace is used remove a letter
    else if (keypress.includes('Backspace'))
    {
        inputObj[arrName].pop()
        // inputArr.pop()
        }
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

console.log('testing return')
// console.log(checkInput())

function updateDivs(letter) {
    // let letterRow = document.querySelectorAll('#row1 .oneletter')
    let currentRow = document.getElementById(`row${rowCounter}`)
    console.log(currentRow)
    let letterRow = document.querySelectorAll(`#row${rowCounter} .oneletter`)
    console.log(letterRow)
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
    
    let wordleArr = randomWord.split('')
    console.log(wordleArr)
    return wordleArr
}

let todaysWordleArr = todaysWordle()

let submittedGuess = []

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitGuess);



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
    console.log(fixArrName)
    // arrName = `newArr${rowCounter}`;
    inputArr = inputObj[fixArrName]
    console.log(inputArr)

    console.log(inputObj)
    let results = document.getElementById('results')
    for (let thisInput in inputArr) {
        console.log(thisInput)
        let idVar = `letter${rowCounter}${thisInput}`
        // console.log('test' + todaysWordleArr[wordleLetter])
        // console.log('test' + inputArr[wordleLetter])
        if (inputArr[thisInput] === todaysWordleArr[thisInput]) {
            let newP = document.createElement('p')
            newP.textContent = `${inputArr[thisInput]} is exactly right`
            results.appendChild(newP)
            console.log('perfect')
            console.log(`#letter${thisInput}`)
            console.log(idVar)
            // let thisDiv = document.querySelector(idVar)
            let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('green')
            // thisDiv.classList.add('green')
            console.log(thisDiv)
            console.log(thisDiv.innerHTML)
            console.log(thisDiv.classList)

        } else if (todaysWordleArr.includes(inputArr[thisInput])) {
            let newP = document.createElement('p')
            console.log('close')
            newP.textContent = `${inputArr[thisInput]} is the right letter in the wrong spot`
            results.appendChild(newP)
            let thisDiv = document.getElementById(idVar)
            thisDiv.classList.add('yellow')
            // results.appendChild(newP)
        } else if (!(todaysWordleArr.includes(inputArr[thisInput]))) {
            let newP = document.createElement('p')
            newP.textContent = `${inputArr[thisInput]} is not in the wordle`
            results.appendChild(newP)
            // results.appendChild(newP)
            console.log('no dice')
        }
        // results.appendChild(newP)

    }
    rowCounter++
    console.log('row count' + rowCounter)
    input.value = ''
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



// console.log(todaysWordleVar)

console.log(randomNumReturn)
console.log(words[randomNumReturn])

console.log('test word:' + randomWord)


//Append the word to test

const output = document.getElementById('output');
let newH = document.createElement('h2');
newH.innerHTML= randomWord;
output.appendChild(newH);

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
