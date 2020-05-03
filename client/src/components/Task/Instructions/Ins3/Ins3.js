import React from 'react';

import Button from '../../../Button/Button';


const ins3 = ( props ) => {
  return (
    <div>
      <p>We have discovered that other arrangements of cones emit <b>5</b> other types of radiation.</p>
      <p>However, we don't yet know what conditions (arrangements of cones) cause these types of radiation to be emitted...</p>
      <p>Your job is to perform some additional experiments investigating each type of radiation.</p>
      <p>For each kind of radiation, your task has six stages:</p>
          <ol>
              <li>See <b>1</b> arrangement already known to emit radiation at this frequency.</li>
              <li>Design <b>7</b> of your own arrangements, and test each one to see if it emits this kind of radiation.</li>
              <li>See <b>8</b> other arrangements and guess which of these will emit this kind of radiation.</li>
              <li>Describe the rule that captures what arrangements will emit this radiation in your own words.</li>
              <li>See the <b>8</b> arragnements again including your initial choices and the choices of the other <b>player</b>.</li>
              <li><b>Revise</b> your initial choices under consideration of the choices of the other player.</li>
          </ol>
      <div style={{display: "flex"}}>
        <Button isPrevious clicked={props.buttonPreClicked}><span>Previous</span></Button>
        <Button clicked={props.buttonClicked}><span>Continue</span></Button>
      </div>
    </div>

  );
}

export default ins3;
