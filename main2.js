// ## Timer Practice 1: One off timer
// Write the JavaScript code to display `BREAK OFF THE ATTACK! Their shields are still up!`
// then after 3 seconds (3000 ms) in the console display `IT'S A TRAP!` using a one off timer.

let firstEvent = alert("BREAK OFF THE ATTACK! Their shields are still up!"); // Display first alert
let secondEvent = setTimeout(() => {
  // schedule second event to display after 3000 ms
  alert("IT'S A TRAP");
}, 3000);
