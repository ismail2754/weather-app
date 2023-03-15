import { h, render, Component } from 'preact';
import style from './style';
import locationIcon from './locationIcon.png';

export default class SearchBar extends Component {
  handleInputChange = (event) => {
    const value = event.target.value;
    this.props.onSearch(value);
  };

  handleOptionChange = (event) => {
    const value = event.target.value;
    this.props.onOptionChange(value);
  };

  render() {
    return (
      <div class={style.searchBarContainer}>
        
        <select onChange={this.handleOptionChange} class={style.select}>
          <option value="option1">Today</option>
          <option value="option2">Tommorow</option>
          <option value="option3">Next 10 Days</option>
        </select>

		<input type="text" placeholder="Search Location..." onChange={this.handleInputChange} class={style.input}></input>  
		<img src= {locationIcon} alt="Location Icon" class={style.icon}></img> 
		
      </div>
    );
  }
}
