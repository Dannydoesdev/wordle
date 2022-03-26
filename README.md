## Welcome to my spin on Wordle



### Live site

### [Find the live site by clicking here](https://dannydoesdev.github.io/wordle/)


### Contact

You can find me at [Linkedin](https://www.linkedin.com/in/danieltmcgee/)


### Main Challenges:

Getting double letters to work properly with Wordles rules was my first real journey on going down a coding rabbit hole I struggled to get out of.

I learnt a lot about the value of preparing in advance, using pen and _(gasp)_ paper to write out various ideas, and then test all of the outcomes on paper before putting them into practice.

It took quite a few hours and too many lines of code to figure it out, but once I had it written down I was able to attack it much more effectively. It was a painful yet useful learning experience in being a dev.


### Features:

- You can make guesses by either using your keyboard or clicking the letters in the 'unused'/'used' sections of the page
  -  Enter or the 'submit' button will allow you to submit

- I learnt about localStorage and implemented some variables which persist through leaving the page etc to store your wins and streaks of wins

- I played around a lot with transitions & animations to get a 'vibe'. It did result in a lot of movement on page so apologies for any nausea!

- 2 time limit options: I personally got pretty good at Wordle when making this (from never playing before), so find time limits to be a great challenge
  - For me, the 90s round is great, but for Wordle fiends there is a 30 'lightning round'

- You'll see some creative use of the used and unused letters in your guesses, was trying to keep it a bit fresh :)

- You can refresh the page for a new Wordle each time


## Things I'd like to do in future:

- Mobile mode
- Better responses for unrecognised words (currently an alert)
- Type your own Wordle in and share with friends to guess
- Dark/light mode
- Sharing results
- Duo & quad Wordle - guess 2 or 4 words at once
- Make a localStorage object to do things like:
  - Track lowest guess counter, player name from input, number of guess history, past Wordles guessed etc


## Wordle Rules:

Wordle is a fairly simple and fun game

When you load/refresh the page there will be a new 'Wordle'

**A Wordle is a hidden 5 letter word you need to find through calculated guesses**

- You have to guess the Wordle in six goes or less
- Every word you enter must be in a valid word list
- A correct letter turns green
- A correct letter in the wrong place turns yellow
- An incorrect letter turns gray
- Letters can be used more than once


## Functions:

### Create local storage:
#### Check if local storage items exists and 'get', otherwise create from 0

```javascript

//If no wincounter in local storage, create set one and set to '0'
if (!(localStorage.getItem('winCounter'))) {
    localStorage.setItem('winCounter', 0);
    savedScore = parseInt(localStorage.getItem('winCounter'))

//Otherwise - grab the current winCounter and set to 'savedScore' variable
} else {
    savedScore = parseInt(localStorage.getItem('winCounter'))
}


//Similar logic for 'winStreak'
if (!(localStorage.getItem('winStreak'))) {
    localStorage.setItem('winStreak', 0);
    savedStreak = parseInt(localStorage.getItem('winStreak'))
} else {
    console.log('storage variable for winStreak found - assigning to savedStreak var next:')
    savedStreak = parseInt(localStorage.getItem('winStreak'))
}

//Append the win counter to the DOM
let showWinCounter = document.getElementById('win-counter')
showWinCounter.innerText = `Your lifetime score = ${savedScore}`

```

### Update local storage:
#### Streak and wincounter ++ on win
#### Streak reset on win

```javascript

//Lose Game:

 //Reset Saved Streak
    savedStreak = 0

  //Save this back to the localStorage
    localStorage.setItem('winStreak', savedStreak)


//Win Game:

  //Add 1 to the localstorage variable
    savedScore++

  //Save this back to the localStorage
    localStorage.setItem('winCounter', savedScore)

    showWinCounter.innerText = `Your lifetime score = ${savedScore}`

  //Add 1 to the localstorage winstreak variable
    savedStreak++

  //Save this back to the localStorage
    localStorage.setItem('winStreak', savedStreak)

```

### Timed Modes:
#### 'Timed mode' & 'Speed mode' very similar
#### Timed mode = 90 seconds / Speed mode = 30 seconds
#### Styling of button gets more 'intense' as time gets low

```javascript

function timedMode() {
    //Remove other speed modes to stop potential problems
    speedButton.removeEventListener('click', speedMode)
    timedButton.removeEventListener('click', timedMode)

    //Give a count, at every second change the innerText & styling
    let count = 90000
    countDownTimer = setInterval(function () {
        count = count - 1000
        // console.log(count)
        // console.log(`${count / 1000} seconds left`)
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
    //set win condition
    if (rowCounter == 8) {
        clearInterval(countDownTimer)
        clearTimeout(countDown)
        endGame()
    }

}

//Timer over function
function lostTimed() {

    clearTimeout(countDown)
    clearInterval(countDownTimer)
    loseGame()
    return

}

```

### Double letter logic

```javascript

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


```

### Input and display logic

```javascript

//put event listener on body for inputs
document.body.addEventListener('keyup', checkInput)



//I decided to use an input 'object' instead of 1 array, lets me do more things with it in future
function checkInput(e) {

    arrName = `newArr${rowCounter}`;
    let keypress = e.code

    //initialise currentLetter outside loop
    let currentLetter

    //Make sure input is an alphabetic keypress (I dug into properties of console logged 'e' to understand) - capitalise it and push to current input array if room available
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

```


### CSS effects
#### I used a number of effects but many of them were a variation of this box shadow animation, as well as lots of 'transition-property: all'

```css

.oneletter {

    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: ease-in-out;

    animation-duration: 6s;
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes pulse {
    from {
        box-shadow: -8px 8px 8px #ffffff82;
    }
  
    to {
        box-shadow: 8px 8px 14px #ffffffdb;
    }
  }

```

### Create left and right 'alphabet keyboards'
#### I used an existing alphabet array function, then appended them to the existing divs on the left
#### Then to allow these to take place of the 'keyboard' I added an event listener to run the checkinput fns
#### This is very similar to the 'used letters' functions - but they will 'show' instead of 'hide' on submit

```javascript

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

```

### Known bugs

- Possible performance issues - on load you can see the end screens before they fade to no visibility
- You can start timed mode after starting Wordle fill out
  -  Need to create a reset fn without refreshing page - call new Wordle, clear all inputs etc

<!--
```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Dannydoesdev/wordle/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
-->
