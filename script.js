//Idea time - input for wordle questions
//randomise the 'wordle' for today (every time it's opened? OR on timer?)
//check if the inputs match any of the wordle of today
// 

console.log(words.length)

//Make a random number whenever this function is run

function randomNumList(length) {
    const randomNum = Math.floor(Math.random() * length)
    return randomNum
}

let letterDivs = document.querySelectorAll('.letters');
// let divs = document.getElementsByClassName('letter')

console.log(letterDivs)
// console.log(divs)


for (div of letterDivs) {
    console.log('test' + div.classList)
}


// New variable for the random num based on length of words array
//New variable for the word itself

let randomNumReturn = randomNumList(words.length)
let randomWord = words[randomNumReturn]

console.log(randomNumReturn)
console.log(words[randomNumReturn])

console.log('test word:' + randomWord)


//Append the word to test

const output = document.getElementById('output');
let newH = document.createElement('h2');
newH.innerHTML= randomWord;
output.appendChild(newH);


// const input = prompt('Where are your green letters?')


// for (const word of words){
//     if((word.match(input)))
//     {
//         const match = document.createElement('p');
//         match.textContent = word;
//         document.body.appendChild(match);
//     }

// };
