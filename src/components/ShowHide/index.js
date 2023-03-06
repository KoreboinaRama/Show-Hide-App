/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  onFirst = () => {
    const {isFirst} = this.state
    this.setState(pre => ({isFirst: !pre.isFirst}))
  }

  onLast = () => {
    const {isLast} = this.state
    this.setState(pre => ({isLast: !pre.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state

    return (
      <div className="con">
        <h1 className="head">Show/Hide</h1>
        <div className="btn-con">
          <button className="btn-1" type="button" onClick={this.onFirst}>
            Show/Hide Firstname
          </button>

          {isFirst ? <p className="para">Joe</p> : ''}

          <button className="btn-1" type="button" onClick={this.onLast}>
            Show/Hide Lastname
          </button>

          {isLast ? <p className="para">Jonas</p> : ''}
        </div>
      </div>
    )
  }
}

export default ShowHide
