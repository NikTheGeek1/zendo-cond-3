import React from 'react';

import Button from '../../../Button/Button';

// importing movies
import vid1_1 from '../../../../Assets/movies/construction_psi.mp4';
import vid1_2 from '../../../../Assets/movies/construction_psi.mov';


class Ins4 extends React.Component {
  state = {
    videoFinished: false
   }
  render() {
    let buttonContinue = <Button disabled clicked={this.props.buttonClicked}><span>Continue</span></Button>;
  if(this.state.videoFinished){
    buttonContinue = <Button clicked={this.props.buttonClicked}><span>Continue</span></Button>;
  }
    return (
      <div>
        <p>To design your own experiments you will add pieces to the world using a construction interface.  Watch the video below to see how this works.  Note you must watch the video before you can continue to the  next page.</p>
        <div align="center">
            <video controls
              style={{width: "400px", height:"300px"}}
              muted preload="auto"
              onEnded={() => this.setState({videoFinished: true})}>
                <source src={vid1_1} type="video/mp4" />
                <source src={vid1_2}  type="video/mov" />
                <p>Sorry.  If this video wont play you wont be able to complete the experiment.</p>
            </video>
        </div>
        <p>In the interface you can:</p>
        <ol>
            <li>Press buttons at the bottom to add cones </li>
            <li>Move the cones around by picking them up with the mouse (left clicking and holding) </li>
            <li>Turn them using the "Z" (counterclockwise) and "X" (clockwise) keys </li>
            <li>Right click on them to remove them (command + click if you are using mac trackpad) </li>
        </ol>
        <p>When you are ready, click ``Test'' to measure your chosen arrangement and see if it is emitting radiation at the current frequency.  If the arrangement follows the rule you will see stars rising to the top of the screen.  Otherwise nothing will happen.  You will be able to see your previous tests and their outcomes at the top of the screen.  Yellow stars indicate tests in which radiation <i>was</i> emitted.</p>
          <div style={{display: "flex"}}>
            {/* <Button isPrevious clicked={this.props.buttonPreClicked}><span>Previous</span></Button> */}
            {buttonContinue}
          </div>
      </div>
    );
  }
}

export default Ins4;
