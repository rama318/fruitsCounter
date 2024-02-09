import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onClickMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onClickBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="sub-heading">{mango}</span> mangoes
            <span className="sub-heading">{banana}</span> bananas
          </h1>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="images"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="banana"
            />
          </div>
          <div>
            <button
              type="button"
              className="food-button"
              onClick={this.onClickMango}
            >
              Eat Mango
            </button>
            <button
              type="button"
              className="food-button"
              onClick={this.onClickBanana}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
