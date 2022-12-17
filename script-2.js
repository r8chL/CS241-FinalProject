 import Deck from  "./deck.js" 



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
 const playerPairSlot = document.querySelector('.player-pair-deck')
 const playerCardSlot = document.querySelector('.player-card-slot')
 const playerCardSlot2 = document.querySelector('.player-card-slot2')
 const playerCardSlot3 = document.querySelector('.player-card-slot3')
 const playerCardSlot4 = document.querySelector('.player-card-slot4')
 const playerCardSlot5 = document.querySelector('.player-card-slot5')
 const playerCardSlot6 = document.querySelector('.player-card-slot6')
 const playerCardSlot7 = document.querySelector('.player-card-slot7')
 const playerCardSlot8 = document.querySelector('.player-card-slot8')
 const playerCardSlot9 = document.querySelector('.player-card-slot9')
 const playerCardSlot10 = document.querySelector('.player-card-slot10')
 const playerCardSlot11 = document.querySelector('.player-card-slot11')
 const playerCardSlot12 = document.querySelector('.player-card-slot12')
 const playerCardSlot13 = document.querySelector('.player-card-slot13')
 const playerCardSlot14 = document.querySelector('.player-card-slot14')
 const playerCardSlot15 = document.querySelector('.player-card-slot15')
 const playerDeckElement = document.querySelector('.player-deck')
 const computer1DeckElement = document.querySelector(".computer1-deck")
 //const computer2DeckElement = document.querySelector(".computer2-deck")
 //const computer3DeckElement = document.querySelector(".computer3-deck")
 const restofDeckDeckElement = document.querySelector(".restofDeck-deck")
 const text = document.querySelector('.text')


 let playerDeck, computer1Deck, computer2Deck, computer3Deck, restofDeck, inRound, myTurn, playerPoints, computerPoints //globalizes variable


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
    deck.shuffle() //can do this because javascript is dynamically typed, will change deck value at runtime 
    const playerHand = Math.ceil((deck.numberOfCards - 38) /2)
    playerDeck = new Deck(deck.cards.slice(0, playerHand))
    computer1Deck = new Deck(deck.cards.slice(playerHand, playerHand * 2))
    restofDeck = new Deck(deck.cards.slice(playerHand * 2, 52))


    playerPoints = 0
    computerPoints = 0
    inRound = false
    myTurn = true 

    
    console.log(playerDeck)
    console.log(computer1Deck)
   // console.log(computer2Deck) 
    //console.log(computer3Deck) 
    console.log(restofDeck)
    cleanBeforeRound()
}

const playerCard = playerDeck.getIndex(0) 
const playerCard2 = playerDeck.getIndex(1)
const playerCard3 = playerDeck.getIndex(2) 
const playerCard4 = playerDeck.getIndex(3) 
const playerCard5 = playerDeck.getIndex(4) 
const playerCard6 = playerDeck.getIndex(5) 
const playerCard7 = playerDeck.getIndex(6) 
//const playerCard8 = playerDeck.getIndex(7) 
//const playerCard9 = playerDeck.getIndex(8)
//const playerCard10 = playerDeck.getIndex(9) 
//const playerCard11 = playerDeck.getIndex(10) 
//const playerCard12 = playerDeck.getIndex(11) 
//const playerCard13 = playerDeck.getIndex(12) 
//const playerCard14 = playerDeck.getIndex(13) 
//const playerCard15 = playerDeck.getIndex(14) 


playerCardSlot.appendChild(playerCard.getHTML())
playerCardSlot2.appendChild(playerCard2.getHTML())
playerCardSlot3.appendChild(playerCard3.getHTML())
playerCardSlot4.appendChild(playerCard4.getHTML())
playerCardSlot5.appendChild(playerCard5.getHTML())
playerCardSlot6.appendChild(playerCard6.getHTML())
playerCardSlot7.appendChild(playerCard7.getHTML()) 
//playerCardSlot8.appendChild(playerCard8.getHTML())   
//playerCardSlot9.appendChild(playerCard9.getHTML())
//playerCardSlot10.appendChild(playerCard10.getHTML())
//playerCardSlot11.appendChild(playerCard11.getHTML())
//playerCardSlot12.appendChild(playerCard12.getHTML())
//playerCardSlot13.appendChild(playerCard13.getHTML())
//playerCardSlot14.appendChild(playerCard14.getHTML()) 
//playerCardSlot15.appendChild(playerCard15.getHTML())   

function cleanBeforeRound () {
    inRound = false
    playerCardSlot.innerHTML = " "
    playerCardSlot2.innerHTML = " "
    playerCardSlot3.innerHTML = " "
    playerCardSlot4.innerHTML = " "
    playerCardSlot5.innerHTML = " "
    playerCardSlot6.innerHTML = " "
    playerCardSlot7.innerHTML = " "
    playerCardSlot8.innerHTML = " "
    playerCardSlot9.innerHTML = " "
    playerCardSlot10.innerHTML = " "
    playerCardSlot11.innerHTML = " "
    playerCardSlot12.innerHTML = " "
    playerCardSlot13.innerHTML = " "
    playerCardSlot14.innerHTML = " "
    playerCardSlot15.innerHTML = " "

    text.innerText = " "

    updateDeckCount()
}


function flipCards () {
    inRound = true
    toFindPlayerPair(playerDeck)

    const playerCard = playerDeck.getIndex(0) 
    const playerCard2 = playerDeck.getIndex(1)
    const playerCard3 = playerDeck.getIndex(2) 
    const playerCard4 = playerDeck.getIndex(3) 
    const playerCard5 = playerDeck.getIndex(4) 
    const playerCard6 = playerDeck.getIndex(5) 
    const playerCard7 = playerDeck.getIndex(6)   
    //const playerCard8 = playerDeck.getIndex(7)
    const computer1Card = computer1Deck.topCard()
    //const computer2Card = computer2Deck.topCard()
    //const computer3Card = computer3Deck.topCard()
    const restofDeckCard = restofDeck.topCard()

    playerCardSlot.appendChild(playerCard.getHTML())
    playerCardSlot2.appendChild(playerCard2.getHTML())
    playerCardSlot3.appendChild(playerCard3.getHTML())
    playerCardSlot4.appendChild(playerCard4.getHTML())
    playerCardSlot5.appendChild(playerCard5.getHTML())
    playerCardSlot6.appendChild(playerCard6.getHTML())
    playerCardSlot7.appendChild(playerCard7.getHTML())  
    


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
    //playerDeckElement.innerText = playerDeck.numberOfCards
    computer1DeckElement.innerText = computer1Deck.numberOfCards
   //computer2DeckElement.innerText = computer2Deck.numberOfCards
    //computer3DeckElement.innerText = computer3Deck.numberOfCards
    restofDeckDeckElement.innerText = restofDeck.numberOfCards
    playerPairSlot.innerText = playerPoints

}



function wasitCaught (cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] === CARD_VALUE_MAP[cardTwo.value]
}

function toFindPlayerPair (deck1) {
    let foundPair = false;
    for (let i = 0; i <= deck1.numberOfCards; i++) {
        for (let j = 0; j <= deck1.numberOfCards; j++) {
            if (i!== j) {
                if (deck1[i] === deck1[j]){
                    foundPair = true;
                    playerPoints = playerPoints + 1;
                    deck1.cards.splice(i,i);
                    deck1.cards.splice(j,j);
                    break;
                }
            }
        }
        if (foundPair){
            break;
        }
    }
}

