// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {key1: true, key2: true}

  onFirstname = () => {
    this.setState(prevState => ({key1: !prevState.key1}))
  }

  onLastname = () => {
    this.setState(prevState => ({key2: !prevState.key2}))
  }

  render() {
    const {key1, key2} = this.state
    let firstname
    let lastname

    if (key1 === true) {
      firstname = (
        <div className="card-container">
          <p className="btn"> Joe </p>
        </div>
      )
    }
    if (key2 === true) {
      lastname = (
        <div className="card-container">
          <p className="btn"> Jonas</p>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button className="btn" onClick={this.onFirstname}>
            Show/Hide Firstname
          </button>

          <button className="btn" onClick={this.onLastname}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="cards-container">
          {firstname}
          {lastname}
        </div>
      </div>
    )
  }
}

export default ShowHide
