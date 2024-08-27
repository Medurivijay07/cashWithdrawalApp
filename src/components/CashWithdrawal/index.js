// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  remaining = id => {
    const {denominationsList} = this.props
    const denominationObject = denominationsList.find(
      eachItem => eachItem.id === id,
    )
    this.setState(prevState => ({
      balance: prevState.balance - denominationObject.value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="withdraw-card">
          <div className="profile">
            <div className="pic">s</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p>Your Balance</p>
            <div className="balance-left">
              <p className="cash">{balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="liststyle">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denomination={eachItem}
                key={eachItem.id}
                remaining={this.remaining}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
