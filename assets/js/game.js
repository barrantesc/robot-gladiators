//Prompt Player to Name Robot
var playerName = window.prompt("What is your robot's name?");
    //Test players robot name has been entered
    console.log(playerName);
// Initialize Player's Robot 
//Initialize Opponent Robot
// Display "Welcome to Robot Gladiators!"
window.alert("Welcome to Robot Gladiators!");
//Prompt player to fight or skip round
//If skip, penalize player and end game
//If fight, player attach Opponent Robot, deduct point from opponent health. Game displays opponents health. Opponent will attack player and points deducted from players health. Game will display players health. 
  // THIS CREATED A FUNCTION NAMED "FIGHT"
  function fight() {
    window.alert("The fight has begun!");
  }
// fight()
//End game








// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// // you can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames.length);
// // fight function
// // var fight = function() {
//     // Alert player that they are starting the round
//     window.alert("Welcome to Robot Gladiators!");

//     // Inquire player if they would like to play or skip fight
//     var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//     // if player chooses to fight, then fight
//     if (promptFight === "fight" || promptFight === "FIGHT") {
//         // remove enemy's health by subtracting the amount set in the playerAttack variable
//         enemyHealth = enemyHealth - playerAttack;
//         console.log(
//             playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
//         );

//         //check enemy's health
//         if (enemyHealth <= 0) {
//             window.alert(enemyName + " has died!");
//         } else {
//             window.alert(enemyName + " still has " + enemyHealth + " health left.");
//         }

//         // remove player's health by subtracting the amount set in the enemyAttack variable
//         playerHealth = playerHealth - enemyAttack;
//         console.log(
//             enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//         );

//         //check player's health
//         if (playerHealth <= 0) {
//             window.alert(playerName + " has died!");
//         } else {
//             window.alert(playerName + " still has " + playerHealth + " health left.");
//         }

//         // If player chooses to skip
//     } else if (promptFight === "skip" || promptFight === "SKIP") {
//         // confirm player wants to skip
//         var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//         // if yes (true), leave fight
//         if (confirmSkip) { 
//             window.alert(playerName + " has decided to skip the fight. Goodbye!");
//             // Subtract money from playerMoney for skipping
//             playerMoney = playerMoney - 2;
//         } 
//         // if no (false), ask question again by running fight() again
//         else {
//             fight ();
//         }
//         // if player did not chose 1 or 2 in prompt
//         } else {
//             window.alert ("You need to choose a valid option. Try again!");
//         }
// // };

// // fight();