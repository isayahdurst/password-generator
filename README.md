# Challenge 03 - Password Generator

This is my take on the password generator project which we've been tasked to complete in class.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

[Starting screen](./Assets/images/pw-gen-01.png?raw=true "Start Screen")
[Criteria prompt](./Assets/images/pw-gen-02.png?raw=true "Criteria Screen")
[Result](./Assets/images/pw-gen-03.png?raw=true "Result")

### The challenge

User Story:

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

Acceptance Criteria:

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria ✓
WHEN prompted for password criteria
THEN I select which criteria to include in the password ✓
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters ✓
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters ✓
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected ✓
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria ✓
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page ✓
Mock-Up
```

### Links

- Live Site URL: [Github](https://isayahdurst.github.io/password-generator)

## My process

```
I started this project while I was on a plane traveling to Bali. I couldn't download the class resources from GitLab on my laptop, so for fun I decided to just make the UI myself and tried to make it as close to the thumbnail image of this project. It helped me think about the flow of this project and how I wanted to create it. Technically I've made this project twice now, so when I got home and used the class repo, I decided to go a bit above what was asked for because I thought it would be fun. I created my own modal window and added all of the criteria to the prompt. For the password length, I decided to use a slider rather than an entry box. I just thought it would be more user-friendly and engaging. After that, I thought it would be nice to allow the user to copy the password just by clicking a button. To be honest, the button wasn't necessary, I could have simply let them click the password box to copy the password, but I wanted to continue reinforcing what I've learned so far about HTML and CSS to add the button. Most of the time the changes I make are just to reinforce a concept.
```

### Built with

- Semantic HTML5 markup
- CSS
- JavaScript

### What I learned

I've learned a tremendous amount in this project. DOM manipulation is a lot of fun and really increases the scope of what we're able to accomplish with web pages and dynamic data. I used a lot of querySelectors and getElementByIDs throughout the project. There's also a ton of event listeners for various actions. I made multiple arrays for storing potential characters such as lowercase, uppercase, and numbers and special characters. Also, to save time in creating the lowercase letters array, I used a map() function to iterate through the uppercase array and then selected each element in that array and applied the toLower() method to change each character from uppercase to lowercase. That was a very useful thing to learn and I imagine I'll apply it much more in the future. Another cool thing I learned is interacting with the navigator to select elements on the page and automatically copy them to the clipboard. I had a lot of fun with this part and eventually added a timer to make the user experience even better. While experimenting with this, I also learned more about arrow functions, which was really helpful in making everything work in the end. Additionally, I stopped using the "var" declaration for my variables because I read that it's quite antiquated at this point. Instead, constants were declared with "const" and variables have been declared with "let", which is, I believe, more appropriate and modern.

### Continued development

There's still much to learn regarding DOM manipulation but that's coming very naturally to me, along with the rest of JavaScript so far. It's probably the easiest thing I've learned so far in this class. I need to continue to refine and polish my CSS skills. Styling the webpage is taking me longer than I think it should, but I did a poor job of taking notes on all of the different styles that I can apply to elements. I think I'll start jotting those down in Notion as I learn them so that I have a reliable reference. Also, I didn't get a change to learn more about grids in this exercise, but I did get to use flexbox again and it made much more sense this time around.

## Author

- Github - [@isayahdurst](https://www.github.com/isayahdurst)
- Twitter - [@isayahdurst](https://www.twitter.com/isayahdurst)

## Acknowledgments

Countless articles on the internet
W3Schools
Stackoverflow
YouTube
Class Modules
Etc.
