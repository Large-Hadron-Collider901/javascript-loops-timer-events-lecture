// ## Timer Practice 2: Repeating timer
// Write the HTML code so that you have one button that says `Hush Ya'll`.
// Write the JavaScript code to nag the user every 5 seconds with a message of
//  `Well... We're waiting!!!` until you click the button. Clicking the button
//  will stop the nage messages in the console.
let nag = setInterval(() => {
  alert("Well... We're waiting!");
}, 5000);
const button = document.querySelector("button");
button.addEventListener("click", () => {
  clearInterval(nag);
});
