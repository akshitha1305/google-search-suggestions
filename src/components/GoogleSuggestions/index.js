// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeText = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  displaySuggestion = (id, suggestion) => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each => {
      const suggestionLower = each.suggestion.toLowerCase()
      return suggestionLower.includes(searchInput.toLowerCase())
    })
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="search-container">
          <div className="input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              value={searchInput}
              onChange={this.onChangeText}
              className="search-element"
              type="search"
              placeholder="Search Google"
            />
          </div>
          <ul className="list-container">
            {filteredList.map(each => (
              <SuggestionItem
                item={each}
                key={each.id}
                displaySuggestion={this.displaySuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
