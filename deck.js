const SUITS = ["♥", "♦", "♠", "♣"]
const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]

class Deck{//needs 2 b flexible enough for a full deck of cards and someone's hand in cards
    constructor(cards){
        this.cards = []//is an empty array
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}

function freshDeck(){//makes 

}