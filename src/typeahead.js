import React from 'react';
import cls from 'classnames';
import KeyEvent from './keyevent';

class Typeahead extends React.Component {
  constructor(props) {
    super(props)

    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleOptionMouseOver = this.handleOptionMouseOver.bind(this)
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)

    this._navigateUp = this._navigateUp.bind(this)
    this._navigateDown = this._navigateDown.bind(this)
    this._setOptionSelected = this._setOptionSelected.bind(this)
    this._hideResults = this._hideResults.bind(this)

    this.state = {
      value: this.props.defaultValue || '',
      filteredOptions: this.props.options,
      resultsListVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue != this.props.defaultValue) {
      var newValue = nextProps.defaultValue;
    } else {
      var newValue = this.state.value || nextProps.defaultValue
    }

    this.setState({
      filteredOptions: nextProps.options || this.state.filteredOptions,
      value: newValue
    })
  }

  handleOptionClick(evt) {
    this._setOptionSelected()
  }

  handleOptionMouseOver(newIndex) {
    this.setState({
      selectedIndex: newIndex
    })
  }

  handleInputKeyUp(evt) {
    evt.preventDefault()

    switch (evt.keyCode) {
    case KeyEvent.DOM_VK_UP:
      this._navigateUp()
      break;
    case KeyEvent.DOM_VK_DOWN:
      this._navigateDown()
      break;
    case KeyEvent.DOM_VK_ESCAPE:
      this._hideResults()
      break;
    case KeyEvent.DOM_VK_RETURN:
    case KeyEvent.DOM_VK_ENTER:
      this._setOptionSelected()
      break;
    }
  }

  handleInputChange(evt) {
    evt.preventDefault()
    let value = evt.target.value

    let filteredOptions = this.props.options.filter((opt) => {
      return opt.toLowerCase().includes(value.toLowerCase())
    })

    let showResultsList = filteredOptions.length > 0 && !!value
    let selectedIndex = showResultsList ? this.state.selectedIndex : undefined

    this.setState({
      filteredOptions: filteredOptions,
      value: value,
      resultsListVisible: showResultsList,
      selectedIndex: selectedIndex
    }, () => {
      this.props.onInputChange(value)
    })
  }

  handleInputBlur(evt) {
    this._hideResults()
    this.props.onBlur(evt)
  }

  _navigateDown() {
    let newIndex = this.state.selectedIndex + 1 || 0
    if (newIndex > this.state.filteredOptions.length - 1) {
      newIndex = 0
    }

    this.setState({
      selectedIndex: newIndex,
      resultsListVisible: true
    })
  }

  _navigateUp() {
    let newIndex = this.state.selectedIndex - 1 || 0
    if (newIndex < 0) {
      newIndex = this.state.filteredOptions.length - 1
    }

    this.setState({
      selectedIndex: newIndex,
      resultsListVisible: true
    })
  }

  _setOptionSelected() {
    if (Number.isInteger(this.state.selectedIndex)) {
      var opt = this.state.filteredOptions[this.state.selectedIndex]
    } else {
      var opt = this.props.options.filter((opt) => {
        return opt.toLowerCase().includes(this.state.value.toLowerCase())
      }).pop()
    }

    this.setState({
      value: opt,
      resultsListVisible: false,
      selectedIndex: undefined
    }, () => {
      this.props.onOptionSelected(opt)
    })
  }

  _hideResults() {
    this.setState({
      selectedIndex: undefined,
      resultsListVisible: false
    })
  }

  render() {
    let resultsClassNames = cls(this.props.styles.typeaheadResults,
                                { [this.props.styles.hidden]: !this.state.resultsListVisible })

    let optionsItems = this.state.filteredOptions.map((opt, i) => {
      let classNames = cls(
        this.props.styles.typeaheadResult,
        { [this.props.styles.typeaheadResultFocused]: this.state.selectedIndex === i }
      )

      return (
        <li className={classNames} key={i}
            onClick={this.handleOptionClick}
            onMouseOver={(e) => { this.handleOptionMouseOver(i) }}
            ref={`option-${i}`}>
            {opt}
        </li>
      )
    })

    return (
      <div className={this.props.styles.typeahead}>
        <input type="text"
               value={this.state.value}
               placeholder={this.props.placeholder}
               onChange={this.handleInputChange}
               onKeyUp={this.handleInputKeyUp}
               onBlur={this.handleInputBlur}
               onFocus={this.props.onFocus}
               className={this.props.styles.typeaheadInput} />
        <ul className={resultsClassNames}>
          {optionsItems}
        </ul>
      </div>
    )
  }
};

Typeahead.defaultProps = {
  onOptionSelected: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onInputChange: () => {},
  styles: {}
}

Typeahead.propTypes = {
  defaultValue: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.string),

  onOptionSelected: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onInputChange: React.PropTypes.func,

  styles: React.PropTypes.object
};

export default Typeahead;
