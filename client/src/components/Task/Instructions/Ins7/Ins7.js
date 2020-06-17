import React from 'react';

import Button from '../../../Button/Button';

// importing movies
import vid1_2 from '../../../../Assets/movies/collaborator.mp4';


class Ins7 extends React.Component {
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
          <p>Finally, you will be asked to <b>revise</b> your initial choices based on the 7 new arrangements you created.</p>

           <p>You will receive a cash bonus of <b>5 cents</b> for each of the arrangements you guess correctly about after revising your initial choices.  This means that you can make a bonus of up to $0.05 &#215; 5 radiation types &#215; 8 test arrangements = $2.  Play the video below to continue.</p>

          <div align="center">
            <video controls style={{height:"450px"}}
              muted preload="auto"
              onEnded={() => this.setState({videoFinished: true})}>
                  <source src={vid1_2}  type="video/mp4" />
              </video>
          </div>

          <div style={{display: "flex"}}>
            {/* <Button isPrevious clicked={this.props.buttonPreClicked}><span>Previous</span></Button> */}
            {buttonContinue}
          </div>
    </div>
    );
  }
}

export default Ins7;
