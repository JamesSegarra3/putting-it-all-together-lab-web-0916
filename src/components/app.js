import React from 'react';
import ReactDOM from 'react-dom';
import UserBlackjack from '../components/user_blackjack';
import AIBlackjack from '../components/ai_blackjack';

export class App extends React.Component{
  render(){
    return (
      <div>
        <AIBlackjack />
        <UserBlackjack />
      </div>
    )
  }
}

function hitMe() {
  if (this instanceof userBlackjack) {
    store.dispatch('HIT_USER')
  }else {
    store.dispatch('HIT_AI')
  }
}
function calculateAIScore() {
  return store.getState().aiCards.reduce((acc,curr)=>{
    return acc + curr.value
  },0)
}
function calculateUserScore() {
  return store.getState().userCards.reduce((acc,curr)=>{
    return acc + curr.value
  },0)
}
function stay() {
}
