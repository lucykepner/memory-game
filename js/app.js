/*
 * Create a list that holds all of your cards
 */
let cardList = document.querySelectorAll(".card");
cardList = Array.prototype.slice.call(cardList, 0)
console.log("Length:" + cardList.length);
console.log(cardList);
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
let restart = document.querySelector(".restart");
restart.addEventListener("click", function(){
  //clear the newDeck
  let deck = document.querySelectorAll(".deck");
  deck.parentNode.removeChild(deck);
  //let newCardShuffle = shuffle(cardlist);
  //for (let i = 0; i <= newCardShuffle.length; i++) {
  //  newDeck.insertAdjacentHTML('afterbegin', newCardShuffle[i].innerHTML)
})



function displayCards() {

}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cardList) {
    var currentIndex = cardList.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return cardList;
}


/*
 * set up the event listener for a card. If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
