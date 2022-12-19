import Deck from  "./deck.js" 
import Card from "./deck.js"

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}



class GoFishAI {
    constructor(hand,difficulty){
        this.difficulty=difficulty
        this.hand=hand
        this.allPairs=[]
        this.oppMoves=[]
        this.prevMoves=[]
    }
  }
  
function makeMove() {
    if (difficulty==1){
        var cardNum=Math.floor(Math.random() * 14)+1;
        return cardNum
    }
    else if (difficulty==2){
        if (prevMoves.length == 0){
            var cardNum=Math.floor(Math.random() * 14)+1;
            prevMoves.push(cardNum);
            return cardNum 
        }
        else{
            var cardNum=Math.floor(Math.random() * 14)+1;
            while (prevMoves.include(cardNum!=False)){
                var cardNum=Math.floor(Math.random() * 14)+1;
            }
            prevMoves.push(cardNUm)
            return cardNum
        }
    }
    else if (difficulty == 3){//main AI difficulty wit most AI components
        var counter=0
        if (counter<=14){//maximum nuumber of unique cards in hand is 14, so after 14 moves it is acceptable to ask previously guessed cards- so reset prevMoves
            var cardNum=Math.floor(Math.random() * 14)+1;
            while ((oppMoves.include(cardNum!=True)) && (prevMoves.include(cardNum!=True))&& pairsList(cardNum,allPairs)!=True && hand.include(cardNum)==True){
                var cardNum=Math.floor(Math.random() * 14)+1;
            }
            counter+=1;
            prevMoves.push(cardNum)
            return cardNum
        }
        else if (counter>14){
            prevMoves=[]
            counter=0
            var cardNum=Math.floor(Math.random() * 14)+1;
            while ((oppMoves.include(cardNum!=True)) && (prevMoves.include(cardNum!=False)) && pairsList(cardNum,allPairs)!=True && hand.include(cardNum)==True){
                var cardNum=Math.floor(Math.random() * 14)+1;
            }
            counter+=1;
            prevMoves.push(cardNum)
            return cardNum
        }
    }

    function cleanUp(){
        for (let i = 0; i < hand.length; i++){
            for (let j=0; i<hand.length; i++){
                if (hand[i]==hand[j] && j!=i){
                    //put down the pair of cards from hand (remove from hand and put into pairs deck)--code from script.js
                }
            }
        }
    }

    function pairsList(cardNum,allPairs){
        var allGone=False
        var counter =0
        var freq={}
        for (let n=1; n<15;n++){
            freq[n]=0
        }
        for (let i = 0; i<pairsList.length;i++){
            freq[pairsList[i]]+=1;
        }
        
        if (freq[cardNum]==4){//if all of a number from the deck are paired, return true, else return false
            return True
        }
        else{
            return False
        }
    }
    
  };
  
 
