import React, { Component } from 'react'
import senators from '../data/senators'

export default class extends Component {
  renderSenators () {
    return senators.map(senator =>
      <div>Test</div>
    )
  }
  render () {
    const senators = this.renderSenators();
    return (
      <div>
        {senators}
      </div>
    );
  }
}