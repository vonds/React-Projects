import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score, name, doScore } = this.props
    const isAbled = score === undefined
    return (
      <tr className={`RuleRow RuleRow-${
        isAbled ? 'active' : 'disabled'
        }`} 
        onClick={isAbled ? doScore : null}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    )
  }
}

export default RuleRow;