import React from 'react';

import Frame from '../../Frame/Frame';
import Button from '../../Button/Button';

const notes = ( props ) => {
  return (
    <Frame frameTitle="Thank you for joining our experiment">
      <p>Please note that:</p>
        <ul>
          <li>On the next page, you will register with a username of your choice.</li>
          <li>You will complete instructions and comprehension questions.</li>
          <li>Afterwards, you will wait in a lobby for another player to join you.</li>
          <li>Once you are matched with another player, the main task will start.</li>
          <li>You will be eligible for full payment (up to $7) once both you and the other player complete the hit.</li>
          <li>Please minimize the chances of possible distractions - switch off messengers, music, etc.</li>
          <li>Please use full-screen mode.</li>
          <li>You <b>can not</b> use a mobile phone or tablet.</li>
          <li>Do <b>not refresh</b> this page during the experiment.</li>
        </ul>
        <Button clicked={props.buttonClicked}>Start the task</Button>
    </Frame>
  );
}

export default notes;
