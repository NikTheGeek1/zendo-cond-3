import React from 'react';

import Timer from '../../containers/Timer/Timer';
import UoeSignature from '../../components/uoeSignature/uoeSignature';
import Task from '../../components/Task/Task';

import classes from './Layout.module.css';

class Layout extends React.Component {
  state = {
    minutes: null,
    seconds: null,
    disableTimer: false
  }
  timerHandler = (min, sec, disableTimer=false) => {
    this.setState({minutes: min, seconds: sec, disableTimer: disableTimer});
  }
  componentDidUpdate(){
    // console.log(this.state);
  }
  render(){
    return (
      <div className={classes.Layout}>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} disableTimer={this.state.disableTimer}/>
        <UoeSignature />
        <main><Task timer={this.timerHandler}/></main>
      </div>
    );
  }
}
export default Layout;
