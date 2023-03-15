import { h, Component } from 'preact';
//gives me access to all png files in folder
import style from './style';
import cloudy from './cloudy.png';
import rain from './rain.png'

export default class HourlyUpdates extends Component {

  //code to retieve the current live hour
  getCurrentHour = () => {
    const now = new Date();
    return now.getHours();
  }

  render() {
    //creating varibales to use for now, wont be needed once variables are linked with live API
    const currentHour = this.getCurrentHour();
    const upcomingHour = currentHour + 1;
    const randomNumber = Math.floor(Math.random() * 100);
    const randomRainChance = Math.floor(Math.random()*100);

    return (
      //creating the row as my first div so everything is in the row
      //following div creates each seperate column
      //current hour is set to run fine, does not need editing
      //random number and random rain chain are placeholders for variables which will be retrived once API us connected
      //cloud icon should be changed dependent on real life weather circumstances 
      <div className={style.row}>  
        <div className={`col-sm ${style.column}`}>
          <h3>{currentHour}:00</h3>
          <p>{randomNumber}&deg;C</p>
          <img src= {cloudy} alt="Cloudy Icon" class={style.icon}></img>
          <p>-weather icon for later times-</p>
          <br></br>
          <img src= {rain} alt="Rain Icon" class={style.icon}></img>
          <p>-display chance of rain- eg {randomRainChance}%</p>
        </div>
        <div className={`col-sm ${style.column}`}>
          <h3>{upcomingHour}:00</h3>
          <p>{randomNumber}&deg;C</p>
          <img src= {cloudy} alt="Cloudy Icon" class={style.icon}></img>
          <p>-weather icon for later times-</p>
          <br></br>
          <img src= {rain} alt="Rain Icon" class={style.icon}></img>
          <p>-display chance of rain- eg {randomRainChance}%</p>
        </div>
        <div className={`col-sm ${style.column}`}>
          <h3>{upcomingHour+1}:00</h3>
          <p>{randomNumber}&deg;C</p>
          <img src= {cloudy} alt="Cloudy Icon" class={style.icon}></img>
          <p>-weather icon for later times-</p>
          <br></br>
          <img src= {rain} alt="Rain Icon" class={style.icon}></img>
          <p>-display chance of rain- eg {randomRainChance}%</p>
        </div>
        <div className={`col-sm ${style.column}`}>
          <h3>{upcomingHour+2}:00</h3>
          <p>{randomNumber}&deg;C</p>
          <img src= {cloudy} alt="Cloudy Icon" class={style.icon}></img>
          <p>-weather icon for later times-</p>
          <br></br>
          <img src= {rain} alt="Rain Icon" class={style.icon}></img>
          <p>-display chance of rain- eg {randomRainChance}%</p>
        </div>
      </div>
    );
  }
}
