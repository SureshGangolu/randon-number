import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  // const randomNumber = () => Math.ceil(Math.random()*100)

  onClickGenerateNumber = () => {
    // const randomNumberVal = this.randomNumber()
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button
            className="generate-button"
            onClick={this.onClickGenerateNumber}
            type="button"
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
