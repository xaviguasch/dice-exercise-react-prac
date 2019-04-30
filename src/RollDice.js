import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
  }

  render() {
    let rand = Math.floor(Math.random() * 6 + 1)
    let value = 'two'

    return (
      <div>
        <h1>This is RollDice component</h1>
        <Die face={value} />
        <Die face={value} />
        <button>Roll Dice!</button>
      </div>
    )
  }
}

export default RollDice
