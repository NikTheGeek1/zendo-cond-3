import React from 'react';

import Button from '../../../Button/Button';

// importing movies
import vid1_1 from '../../../../Assets/movies/selection_mu.mp4';
import vid1_2 from '../../../../Assets/movies/selection_mu.mov';
import { connect } from 'react-redux';


class Ins5 extends React.Component {
  state = {
    videoFinished: false
   }
  render() {
    let buttonContinue = <Button disabled clicked={this.props.buttonClicked}><span>Continue</span></Button>;
    if(this.state.videoFinished || this.props.restartedInstructions){
    buttonContinue = <Button clicked={this.props.buttonClicked}><span>Continue</span></Button>;
  }
    return (
      <div>
          <p>After your experiments, you will be tested on the cause of this kind of radiation.  You will be shown 8 new arrangements.  Select which you think emit radiation when tested.  <i>You must select at least one and less than all eight.</i></p>
          <div align="center">
              <video controls style={{height:"300px"}}
              muted preload="auto"
              onEnded={() => this.setState({videoFinished: true})}>
                  <source src={vid1_1}  type="video/mp4" />
                  <source src={vid1_2}  type="video/mov" /> 
                   <p>Sorry.  If this video wont play you wont be able to complete the experiment.</p>
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


const mapStateToProps = state => {
  return {
    restartedInstructions: state.restartedInstructions,
  };
};

export default connect(mapStateToProps)(Ins5);
