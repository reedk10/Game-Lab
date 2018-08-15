function startGame() {
  const reply = prompt("Do you want to play?");
  if (reply == "Yes" || reply == "yes" || reply == "YES") {
    let userName = prompt("Enter your name");
    startCombat(userName);
  }
}

function getDamage() {
  return Math.floor(Math.random() * 5 + 1);
}

let a = function("attack", "quit"){
  let game = prompt("Do you want to attack or quit?");
   if(a == "quit")
   console.log("game over")
}else (a == "attack")
return startCombat; 

function startCombat(userName) {
  let userHealth = 40;
  let grantHealth = 10;
  let wins = 0;
  let game = prompt("Do you want to attack or quit?")

  while (grantHealth > 0) {
    userHealth -= getDamage();
    grantHealth -= getDamage();
    console.log(`${userName} has ${userHealth} health left.`);
    console.log(`Grant the mighty chicken has ${grantHealth} health left.`);

    if (grantHealth <= 0) wins += 1;

    if (wins == 3 && grantHealth <= 0) {
      console.log(`${userName} you won the fight`);

    } else if (userHealth <= 0) {
      console.log(`Grant won!`);

    } else if (grantHealth <= 0) {
      console.log(`${userName} wins: ${wins}`);
      grantHealth = 10;
    }
  }
}
startGame();
startCombat();
getDamage();








