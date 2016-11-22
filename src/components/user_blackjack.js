import React from 'react';
export class UserBlackjack extends React.Component{
  render(){
    let userCards = store.userCards.map((card)=>{
      return <li>{card.name} - Value:{card.value}</li>
    })
    let total = store.userCards.reduce((acc,curr)=>{
      return acc + curr.value
    },0)
    return (
      <div>
        <h1>Player One</h1>
        <h2>Total: {total}</h2>
        <ul>
          {usercards}
        </ul>

        <form>
          <button type="submit" onSubmit={hitMe.bind(this)}>Hit Me</button>
        </form>

        <form>
          <button type="submit" onSubmit={stay.bind(this)}>Stay</button>
        </form>
      </div>
    )
  }
}
