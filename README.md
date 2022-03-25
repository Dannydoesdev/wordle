## Welcome to my spin on Wordle



### Live site

### [Find the live site by clicking here](https://dannydoesdev.github.io/wordle/)

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

- Better responses for unrecognised words (currently an alert)
- Dark/light mode
- Sharing results
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


### Contact

You can find me at [Linkedin](https://www.linkedin.com/in/danieltmcgee/)


### Known bugs

- You can start timed mode after starting Wordle fill out
- Need to create a reset fn without refreshing page - call new Wordle, clear all inputs etc

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
