// Write your code here
// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {key1: false, key2: false}

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
        <div className="container">
          <div className="button-container">
            <button className="btn" type="button" onClick={this.onFirstname}>
              Show/Hide Firstname
            </button>
            {firstname}
          </div>
          <div className="button-container">
            <button className="btn" type="button" onClick={this.onLastname}>
              Show/Hide Lastname
            </button>
            {lastname}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
