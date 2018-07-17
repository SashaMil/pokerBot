class Deck {
    constructor() {

        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = [[['Ace'], [1, 14]], ['2', [2]], ['3', [3]], ['4', [4]], ['5', [5]], ['6', [6]], ['7', [7]],
        ['8', [8]], ['9', [9]], ['10', [10]], ['Jack', [11]], ['Queen', [12]], ['King', [13]]];
        const imageSuits = ['H', 'S', 'C', 'D'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push([`${values[value][0]} of ${suits[suit]}`, values[value][1]]);
            }
        }


        let allHearts = this.deck.filter(x => x[0].includes('Hearts'));
        for (let x = 0; x < allHearts.length; x++) {
          allHearts[x].push([`images/Cards/${x+1}H.png`]);
        }

        let allSpades = this.deck.filter(x => x[0].includes('Spades'));
        for (let x = 0; x < allSpades.length; x++) {
          allSpades[x].push([`images/Cards/${x+1}S.png`]);
        }

        let allClubs = this.deck.filter(x => x[0].includes('Clubs'));
        for (let x = 0; x < allClubs.length; x++) {
          allClubs[x].push([`images/Cards/${x+1}C.png`]);
        }

        let allDiamonds = this.deck.filter(x => x[0].includes('Diamonds'));
        for (let x = 0; x < allDiamonds.length; x++) {
          allDiamonds[x].push([`images/Cards/${x+1}D.png`]);
        }

    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, i;

        // While there remain elements to shuffle…
        while (m) {
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    deal(){
        return this.deck.pop();
    }
}

module.exports = Deck;
