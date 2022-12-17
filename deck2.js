const SUITS = ["♣", "♠", "♦", "♥"] //static variable for card suits
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
] //static variable for card values



export default class Deck{
    constructor (cards = freshDeck() ) { 
         this.cards = cards 
    }

    get numberOfCards() { //creates a getter for the length of the cards array
        return this.cards.length
    }

    topCard () {
        return this.cards.shift() //shift takes from the top 
    }

    getIndex (x) {
        return this.cards[x]
    }

    puttoBottom (card) {
        this.cards.push(card)
    }

    shuffle () {
        for (let i = this.numberOfCards - 1; i > 0; i --) { //starts at the end of the deck and flips it with a card that comes earlier in the deck 
            const newIndex = Math.floor(Math.random() * (i + 1)) //will give us an index that hasn't been accessed yet, and by using Math.floor() makes sure it is an integer value because Math.random() selects any number between 1 and 0
            const currentValue = this.cards[newIndex] //swaps the card we're currently on with new card 
            this.cards[newIndex] = this.cards[i] //current value acts as a temp value, and then switches card we just got with the card at current-index i
            this.cards[i] = currentValue //makes the final swap
        }
    }
}


class Card {
    constructor(suit, value) {
         this.suit = suit
         this.value = value 
    }

    get color () {
        return this.suit === "♣" || this.suit === "♠" ? 'black' : "red"
    }

    getHTML () {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}` //backtick it 
        return cardDiv
    }
}



function freshDeck() {
    return SUITS.flatMap(suit => { //by using flatmap, we will get a single array with 52 cards instead of an array with 4 separate arrays with 13 cards. 
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}
