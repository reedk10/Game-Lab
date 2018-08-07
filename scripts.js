
const reply = prompt("Do you like to play?");

if (reply == "Yes" || reply == "yes" || reply == "YES" ) {
    let userHealth = 40;
    let grantHealth = 10;
    let userName = prompt("Enter your name?");
    let wins = 0;
    
    while (grantHealth > 0) {
        let rand1 = Math.floor(Math.random() * 2 + 1);
        let rand2 = Math.floor(Math.random() * 2 + 1);
        userHealth -= rand1;
        grantHealth -= rand2;
        console.log(`${userName} has ${userHealth} health left. `);
        console.log(`Grant the mighty chicken has ${grantHealth} health left.`);

        if (grantHealth <= 0) wins += 1;

        if (wins == 3  && grantHealth <= 0) {
            console.log(`${userName} you won the fight`);
            
        } else if (userHealth <= 0) {
            console.log(`Grant won!`);
            
        } else if (grantHealth <= 0) {
        console.log(`${userName} wins: ${wins}`);
            grantHealth = 10;
        }
    }
}

