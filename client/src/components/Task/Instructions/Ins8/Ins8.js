import React from 'react';

import Button from '../../../Button/Button';

const ins8 = ( props ) => {
  return (
    <div>
      <ol>
        <li>Your task is to work out what rule determines whether an arrangement of cones will emit radiation<br/><br/> </li>
        <li>You will do this for 5 different types of radiation waves (5 different rules)<br/><br/> </li>
        <li>You will see one positive example and then create 7 more of your own each time<br/><br/> </li>
        <li>You will then get a chance to demonstrate your understanding by guessing about whether 8 new arrangements will emit this type of arrangements<br/><br/> </li>
        <li>You will describe the rule in your own words before moving on to the next type of radiation<br/><br/> </li>
        <li>You will then see the choices the other player and revise your initial choices. Make sure you consider their choices carefully, they might help improve your accuracy to increase your overall bonus </li>
      </ol>
      <div style={{display: "flex"}}>
        <Button isPrevious clicked={props.buttonPreClicked}><span>Previous</span></Button>
        <Button clicked={props.buttonClicked}><span>Continue</span></Button>
      </div>
    </div>

  );
}

export default ins8;
