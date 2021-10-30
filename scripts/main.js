window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load

  //deal btn start
  const dealBtn = document.querySelector("#deal-button");
  dealBtn.addEventListener("click", (e) => {});
  //deal btn end

  //hit btn start
  const hitBtn = document.querySelector("#hit-button");
  hitBtn.addEventListener("click", (e) => {});
  //hit btn end

  //stand btn start
  const standBtn = document.querySelector("#stand-button");
  standBtn.addEventListener("click", (e) => {});

  //stand btn end

  //Build Deck
  function buildDeck() {
    let deck = [];
    const suits = ["hearts", "spades", "clubs", "diamonds"];

    //makes suits
    for (let i = 0; i < suits.length; i++) {
      //makes rank
      for (let r = 1; r <= 13; r++) {
        const card = {
          rank: r,
          suit: suits[i],
        };
        deck.push(card);
      }
    }
    return deck;
  }
  myDeck = buildDeck();

  //Get card image
  function getCardImage(card) {
    const cardImage = document.createElement("img");

    if (card.rank === 1) {
      cardImage.setAttribute("src", `images/ace_of_${card.suits}.png`);
    } else if (card.rank === 13) {
      cardImage.setAttribute("src", `images/king_of_${card.suits}.png`);
    } else if (card.rank === 12) {
      cardImage.setAttribute("src", `images/queen_of_${card.suits}.png`);
    } else if (card.rank === 11) {
      cardImage.setAttribute("src", `images/jack_of_${card.suits}.png`);
    } else {
      cardImage.setAttribute("src", `images/${card.rank}_of_${card.suits}.png`);
    }
    return cardImage;
  }

  //Deal the Deck
  let playerHand = [];
  let dealerHand = [];

  function dealCard() {
    playerHand.push(myDeck.pop());
    return playerHand;
    console.log(playerHand[0]);
  }
});
