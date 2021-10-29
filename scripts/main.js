window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load

  //deal btn start
  const dealBtn = document.querySelector("#deal-button");
  dealBtn.addEventListener("click", (e) => {
    // Add new card element
    const dealerHand = document.querySelector("#dealer-hand");
    const playerHand = document.querySelector("#player-hand");
    const newCard = document.createElement("img");
    const newCard2 = document.createElement("img");
    newCard.src = "images/2_of_hearts.png";
    newCard2.src = "images/3_of_hearts.png";
    dealerHand.appendChild(newCard);
    playerHand.appendChild(newCard2);
  });
  //deal btn end

  //hit btn start
  const hitBtn = document.querySelector("#hit-button");
  hitBtn.addEventListener("click", (e) => {
    const dealerHand = document.querySelector("#dealer-hand");
    const playerHand = document.querySelector("#player-hand");
    const newCard = document.createElement("img");
    const newCard2 = document.createElement("img");
    newCard.src = "images/2_of_hearts.png";
    newCard2.src = "images/3_of_hearts.png";
    dealerHand.appendChild(newCard);
    playerHand.appendChild(newCard2);
  });
  //hit btn end

  //stand btn start
  const standBtn = document.querySelector("#stand-button");
  standBtn.addEventListener("click", (e) => {
    console.log("Stand");
  });
  //stand btn end
});

//Build Deck
function buildDeck() {
  const suites = ["spades", "diamonds", "clubs", "hearts"];
  const deck = [];

  for (i = 1; i <= suites.length; i++) {
    
  }
  console.log(deck);
}
