// 1. Prompt player to name robot
var playerName = window.prompt("What is your robot's name?");
window.alert(playerName); // This will show the player their name
console.log(playerName); // This will show us the player name under console to make sure code is working

// 2. Initialize player's robot properties
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// 3. Initialize opponent's robot
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames.length);

// create a function using just: function fight () {} or var fight = function () {}
var fight = function(enemyName) {
// 4. Display " Welcome to Robot Gladiators!"
window.alert("Welcome to Robot Gladiators!");

// 5. Prompt player to fight or skip round
//    a. What can we use to ask the player if they'd like to fight or skip the fight?
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  console.log(promptFight);
  // if player choses to fight, then fight


// 6. If player chooses to fight
// if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
   //7. if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    // subtract money from player for skipping
    playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  } else {
  window.alert("You need to choose a valid option. Try again!");
  }
}

//Loop
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames, [i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}
  // 8. End of game

fight (); // This executes function