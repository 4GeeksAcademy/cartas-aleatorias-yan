import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomSuit() {
    const suits = {
        'hearts': '&hearts;',
        'spades': '&spades;',
        'clubs': '&clubs;'
    };
    const suitKeys = Object.keys(suits);
    const randomSuit = suitKeys[Math.floor(Math.random() * suitKeys.length)];
    return { symbol: suits[randomSuit], color: randomSuit === 'hearts' ? '#ff0000' : '#000' };
}

function getRandomValue() {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'K', 'M'];
    return values[Math.floor(Math.random() * values.length)];
}

function createCard() {
    const card = document.createElement('div');
    card.className = 'card green-border';

    const topSuit = document.createElement('div');
    topSuit.className = 'suit top-left';
    const bottomSuit = document.createElement('div');
    bottomSuit.className = 'suit bottom-right';
    const number = document.createElement('div');
    number.className = 'number';

    card.appendChild(topSuit);
    card.appendChild(bottomSuit);
    card.appendChild(number);

    document.getElementById('cardContainer').appendChild(card);
    return { card, topSuit, bottomSuit, number };
}

function updateCard(elements) {
    const suit = getRandomSuit();
    const value = getRandomValue();

    elements.topSuit.innerHTML = suit.symbol;
    elements.topSuit.style.color = suit.color;
    elements.bottomSuit.innerHTML = suit.symbol;
    elements.bottomSuit.style.color = suit.color;
    elements.number.innerHTML = value;
}

let cardElements = createCard();
updateCard(cardElements);

document.getElementById('newButton').addEventListener('click', () => {
    document.getElementById('cardContainer').innerHTML = '';
    cardElements = createCard();
    updateCard(cardElements);
});