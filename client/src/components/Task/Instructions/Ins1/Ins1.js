import React from 'react';
import Img1 from '../../../../Assets/Images/instructions/ins1_1.png'
import Img2 from '../../../../Assets/Images/instructions/ins1_2.png'
import Button from '../../../Button/Button';

const ins1 = ( props ) => {
  return (
    <div>
      <p>Thank you for agreeing to participate!</p>
          <p>In this task you will be using your scientific investigation skills.</p>
          <p>You have arrived on a bizarre alien planet where the only objects you can see are colored cones clumped into small groups in an otherwise empty landscape (Figure 1).</p>
          <div align="center">
             <img src={Img1} alt="ex1" style={{width:'600px'}} />
             <figcaption>Figure 1 - Bizarre alien planet.</figcaption>
         </div>
         <br />
          <p>You have brought a scientific measuring device.  It can be tuned to detect different types of radiation.  At particular settings, it reveals that some of the clumps of cones emit colorful radiation, while others do not do not (Figure 2).</p>
          <div align="center">
              <img src={Img2} alt="ex1" style={{width:'600px'}} />
              <figcaption>Figure 2 - Testing for radiation.  Only the arrangement on the left emits this kind of radiation.</figcaption>
          </div>
          <br />
          <p>Your job is to come up with experiments to help work out what makes a set of cones emit radiation. </p>
            <div style={{display: "flex"}}>
              <Button clicked={props.buttonClicked}><span>Continue</span></Button>
            </div>
      </div>
  );
}

export default ins1;
