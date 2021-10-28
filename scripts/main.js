window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load

  //deal btn start
  const dealBtn = document.querySelector("#deal-button");
  dealBtn.addEventListener("click", (e) => {
    // Add new card element
    const dealerHand = document.querySelector("#dealer-hand");
    const newCard = document.createElement("img");
    img = "images/2_of_clubs.png";
    dealerHand.appendChild(newCard);
  });

  //deal btn end

  //hit btn start
  const hitBtn = document.querySelector("#hit-button");
  hitBtn.addEventListener("click", (e) => {
    console.log("Hit");
  });
  //hit btn end

  //stand btn start
  const standBtn = document.querySelector("#stand-button");
  standBtn.addEventListener("click", (e) => {
    console.log("Stand");
  });
  //stand btn end
});
