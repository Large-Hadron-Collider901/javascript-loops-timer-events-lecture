// ### While/For Loop Practice 1:
// - Create an empty `name_array`
// - Ask the user ```Enter a word. Enter 'q' to quit.``` Add each word they enter to the array
// - Create a while loop that will keep asking for words to add to the array until they enter 'q'
// - When the user enters 'q' use a **for** loop to print each word from the array
// - NOTE: Your code should handle the case of the entered quit letter `Q`

// ## Timer Practice 1: One off timer
// Write the JavaScript code to display `BREAK OFF THE ATTACK! Their shields are still up!` then after 3 seconds (3000 ms) in the console display `IT'S A TRAP!` using a one off timer.

// ## Timer Practice 2: Repeating timer
// Write the HTML code so that you have one button that says `Hush Ya'll`. Write the JavaScript code to nag the user every 5 seconds with a message of `Well... We're waiting!!!` until you click the button. Clicking the button will stop the nage messages in the console.

name_array = []; // create empty array

let notDoneAddingWords = true;
let quit = "q".toUpperCase(); // accepts both uppercase and lowercase Q

while (notDoneAddingWords) {
  // while the user is not done adding words continue to show the prompt
  let userInput = prompt("Enter a word. Press q to quit.");
  name_array.push(userInput); // pushes user input to the array

  if (userInput === quit) {
    // if user enters q to quit set not done adding words to false
    notDoneAddingWords === false;
    break; // break the loop to discontinue showing the prompt
  }
}
console.log(name_array); // shows the words entered in the array
