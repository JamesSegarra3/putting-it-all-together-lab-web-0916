import React from 'react';

export class AIBlackjack extends React.Component{
  render(){
    let aiCards = store.aiCards.map((card)=>{
      return <li>{card.name} - Value:{card.value}</li>
    })
    let total = store.aiCards.reduce((acc,curr)=>{
      return acc + curr.value
    },0)
    return (
      <div>
        <h1>Computer</h1>
        <h2>Total: {total}</h2>
        <ul>
          {aiCards}
        </ul>
      </div>
    )
  }
}
