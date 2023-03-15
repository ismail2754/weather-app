import { h, Component } from 'preact';
import style from './style';


export default class Details extends Component {

  //generate a random number
  generateStat = () => {
    return Math.floor(Math.random() * 100); // generating a random number between 0 and 100
  }

  //create variables with randomimzed values and then use them as placeholders for now until API is connected 
  render() {
    const humidity = this.generateStat();
    const pressure = this.generateStat();
    const uvIndex = this.generateStat();
    const visibility = this.generateStat();

    return (
      <div className={style.details}>
        <h2>Current Details</h2>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} mBar</p>
        <p>UV Index: {uvIndex}</p>
        <p>Visibility: {visibility}km</p>
      </div>
    )
  }
}
