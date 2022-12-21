// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, displaySuggestion} = props
  const {suggestion, key} = item

  const onClickButt = () => {
    displaySuggestion(key, suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button onClick={onClickButt} className="button" type="button">
        <img
          alt="arrow"
          className="arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
