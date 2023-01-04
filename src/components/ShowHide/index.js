// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  lastName = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="card">
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {first ? (
              <div className="name-card">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="card">
            <button className="button" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {last ? (
              <div className="name-card">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
