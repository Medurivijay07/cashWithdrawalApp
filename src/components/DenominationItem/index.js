// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, remaining} = props
  const {value, id} = denomination
  const withdraw = () => {
    remaining(id)
  }
  return (
    <li className="list-type">
      <button type="button" className="denomination" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
