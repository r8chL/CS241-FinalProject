import Deck from  "./deck.js" 

 const point = 0

 const CARD_VALUE_MAP = { //what is a map in javascript 
    "2": 2,
    "3": 3, 
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
 }

 const playerCardSlot = document.querySelector('.player-card-slot')
 const playerDeckElement = document.querySelector('.player-deck')
 const computer1DeckElement = document.querySelector(".computer1-deck")
 const computer2DeckElement = document.querySelector(".computer2-deck")
 const computer3DeckElement = document.querySelector(".computer3-deck")
 const restofDeckDeckElement = document.querySelector(".restofDeck-deck")
 const text = document.querySelector('.text')


 let playerDeck, computer1Deck, computer2Deck, computer3Deck, restofDeck, inRound, myTurn //globalizes variable

document.addEventListener('click', () => {
    if (inRound) {
        cleanBeforeRound()
    }
    else {
        flipCards ()
    }


})

 startGame()
function startGame () {
    const deck = new Deck()
    deck.shuffle() //can do this because javascript is dynamically types, will change deck value at runtime 
    const playerHand = Math.ceil((deck.numberOfCards - 32) /4)
    playerDeck = new Deck(deck.cards.slice(0, playerHand))
    computer1Deck = new Deck(deck.cards.slice(playerHand, playerHand * 2))
    computer2Deck = new Deck(deck.cards.slice(playerHand * 2, playerHand * 3))
    computer3Deck = new Deck(deck.cards.slice(playerHand * 3, playerHand * 4))
    restofDeck = new Deck(deck.cards.slice(playerHand * 4, deck.numberOfCards))



    inRound = false
    myTurn = true 


    console.log(playerDeck)
    console.log(playerCardSlot)
    console.log(computer1Deck)
    console.log(computer2Deck) 
    console.log(computer3Deck) 
    console.log(restofDeck)
    cleanBeforeRound()
}

function cleanBeforeRound () {
    inRound = false
    playerCardSlot.innerHTML = " "
    text.innerText = " "

    updateDeckCount()
}


function flipCards () {
    inRound = true

    const playerCard = playerDeck.topCard() 
    const computer1Card = computer1Deck.topCard()
    //const computer2Card = computer2Deck.topCard()
    //const computer3Card = computer3Deck.topCard()
    const restofDeckCard = restofDeck.topCard()

    playerCardSlot.appendChild(playerCard.getHTML()) 

    updateDeckCount()

    if ((wasitCaught(playerCard,computer1Card)) && myTurn === true) {
        playerDeck.puttoBottom(playerCard)
        playerDeck.puttoBottom(computer1Card)
        myTurn === false
    }
        else if ((wasitCaught(computer1Card, playerCard)) && myTurn === false) {
            computer1Deck.puttoBottom(computer1Card)
            computer1Deck.puttoBottom(playerCard)
            myTurn === true 
        }
        
        else if ((!wasitCaught(computer1Card, playerCard)) && myTurn == true ){
        playerDeck.puttoBottom(playerCard)
        playerDeck.puttoBottom(restofDeckCard)
        computer1Deck.puttoBottom(computer1Card)
        myTurn = false
    }
    else {
        playerDeck.puttoBottom(playerCard)
        computer1Deck.puttoBottom(restofDeckCard)
        computer1Deck.puttoBottom(computer1Card)
        myTurn = true
    }

}

function updateDeckCount () {
    playerDeckElement.innerText = playerDeck.numberOfCards
    computer1DeckElement.innerText = computer1Deck.numberOfCards
    computer2DeckElement.innerText = computer2Deck.numberOfCards
    computer3DeckElement.innerText = computer3Deck.numberOfCards
    restofDeckDeckElement.innerText = restofDeck.numberOfCards

}


function wasitCaught (cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] === CARD_VALUE_MAP[cardTwo.value]
}

function checkDeck (deck1, deck2) {
    let selected = 0 //curent place holder value, get card at the top of the deck
    for (let i = 0; deck1.numberOfCards -1 > i; i++) {
        if (deck1.cards[i] === deck2.cards[selected]){
            deck2.puttoBottom(deck.cards[i])
        }
    }
}
