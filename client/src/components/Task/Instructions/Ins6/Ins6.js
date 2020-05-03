import React from 'react';

import Button from '../../../Button/Button';

import img1 from '../../../../Assets/Images/instructions/free_response.png'

const ins6 = ( props ) => {
  return (
    <div>
      <p>Therafter, you will be asked to <b>describe in your own words</b> what you think is the hidden rule that causes the radiation to be emitted at this frequency.  For instance you might write, "I think all the cones have to be large".  You should be as specific as possible with this.  Try to use unambiguous phrases like "There must be at least..." / "There are at most.." / "There is exactly one..."</p>
      <div align="center">
          <img src={img1} alt="ex1" style={{width:"400px"}} />
      </div>
      <p><b>Note:</b> The true rule has <i>nothing to do with:</i> the radiation's name; <i>nor</i> the way radiation might work on Earth; <i>nor</i> the order in which you perform your tests <i>nor</i> with what was true for the other frequencies of radiation.  I.e., on this planet, all types of radiation operate independently.</p><br/><br/>

      <div style={{display: "flex"}}>
        <Button isPrevious clicked={props.buttonPreClicked}><span>Previous</span></Button>
        <Button clicked={props.buttonClicked}><span>Continue</span></Button>
      </div>
    </div>

  );
}

export default ins6;
