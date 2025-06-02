function rollTheDice() {
    // Generate random numbers between 1 and 6 for both dice
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Set the image sources based on the random numbers
    document.querySelector(".img1").setAttribute("src", "assets/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "assets/dice" + randomNumber2 + ".png");
    
    // Change the heading based on the result
    let heading = document.querySelector("h1");
    heading.style.fontSize = "4rem"; // Reduce the size of the heading
    
    if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.innerHTML = "Player 2 Wins! 🚩";
    } else {
        heading.innerHTML = "It's a Draw!";
    }
}
