import React from 'react';
var shuffle = require('shuffle-array');

export function fetchDeck() {
  return ({type:'FETCH_DECK'})
}

export function setAICards(store) {
  shuffle(store.deck);
  let card1 = store.deck.pop();
  let card2 = store.deck.pop();
  return ({type:'SET_AI_CARDS', payload: {deck:store.deck, aiCards:[card1,card2]}})
}

export function setUserCards(store) {
  shuffle(store.deck);
  let card1 = store.deck.pop();
  let card2 = store.deck.pop();
  return ({type:'SET_USER_CARDS', payload: {deck:store.deck, userCards:[card1,card2]}})
}

export function hitAI(store) {
  shuffle(store.deck);
  let card = store.deck.pop();
  return ({type:'HIT_AI', payload: {deck:store.deck, aiCards:card}})
}
export function hitUser(store) {
  shuffle(store.deck);
  let card = store.deck.pop();
  return ({type:'HIT_USER', payload: {deck:store.deck, userCards:card}})
}
