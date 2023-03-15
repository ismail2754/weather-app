import { h, Component } from 'preact';
import style from './style';
import cloudy from './cloudy.png';


export default class Temperature extends Component {
  constructor() {
    super();
    
  }

  
  render() {
//creates a random variable number 
    const randomNumber = Math.floor(Math.random() * 11);

    //creates a container that allows me to seperate elments in a row left from right
    //print random temperature for now until a fixed live data value is pulled
    //cloudy icon for now but needs to be changed when neccessary to match the true weather 
    return (
      <div class={style.temperatureContainer}>
        <div class={style.temperature}>{randomNumber}&deg;C</div>
          <div class={style.labelContainer}>
          <img src= {cloudy} alt="image" class={style.temperatureImage} />
            <div class={style.label}>Cloudy</div>
          </div>
      </div>
    );
  }
}
