import React from 'react';

import Button from '../../../Button/Button';

import img1 from '../../../../Assets/Images/instructions/ins2_1.png';
import img2 from '../../../../Assets/Images/instructions/ins2_2.png';
import img3 from '../../../../Assets/Images/instructions/ins2_3.png';
import img4 from '../../../../Assets/Images/instructions/ins2_4.png';
import img5 from '../../../../Assets/Images/instructions/ins2_5.png';

const ins2 = ( props ) => {
  return (
    <div>
      <p>There are a few kinds of radiation for which we have already established the cause.</p>
      <p>Study the list below to help you get started.  For each type of radiation we give several examples. The examples with the yellow stars <b>do</b> emit this kind of radiation, those with white stars <b>do not</b>.</p>
          <ol>
              <li>Alpha waves: <i>Whenever there is at least one small cone</i></li><br/><br/>
                  <img src={img1} alt="ex1" style={{width:"600px"}}/>
                  <br/><br/>
              <li>Beta waves: <i>If all cones are all the same color</i></li><br/><br/>
                  <img src={img2} alt="ex1" style={{width:"600px"}}/>
                  <br/><br/>
              <li>Delta waves: <i>If none of the cones are touching</i></li><br/><br/>
                  <img src={img3} alt="ex1" style={{width:"600px"}}/>
                  <br/><br/>
              <li>Gamma waves: <i>If all the cones point in the same direction</i></li><br/><br/>
                  <img src={img4} alt="ex1" style={{width:"600px"}}/>
                  <br/><br/>
              <li>Epsilon waves: <i>If there is a a blue cone that is larger than any red cones</i></li><br/><br/>
                  <img src={img5} alt="ex1" style={{width:"600px"}}/>
                  <br/><br/>
          </ol>
      <p>So, as you can see, the radiation works quite differently here than on Earth.  It might be caused by many different things such as the cones&#39; number, sizes, colors, positions, orientations, as well as more complicated relationships between them.</p>
        <div style={{display: "flex"}}>
          <Button isPrevious clicked={props.buttonPreClicked}><span>Previous</span></Button>
          <Button clicked={props.buttonClicked}><span>Continue</span></Button>
        </div>
    </div>

  );
}



export default ins2;
