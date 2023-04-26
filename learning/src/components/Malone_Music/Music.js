import React, { Component } from 'react'
import Card from './Music_Card/Card';
import './Music.css'

class Music extends Component {
  render() {
    return (
      <div>
        <h1 className="Music-title">Music</h1>
        <Card/>
      </div>
    )
  }
}

export default Music;
