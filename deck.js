const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
];

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  shuffle() {
    const { cards } = this;
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value);
    });
  });
}

const deck = new Deck(freshDeck());
deck.shuffle();
console.log(deck.cards);