import React from 'react';

import Frame from '../../Frame/Frame';
import Button from '../../Button/Button';

const Notes = ( props ) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // React.useEffect(() => props.timer(1, 5, false), []);

  return (
    <Frame frameTitle="Thank you for joining our experiment">
      <p>Please note that:</p>
        <ul>
          <li>You will complete instructions and comprehension questions.</li>
          <li>Once you finish correctly the comprehension quiz the main task will start.</li>
          <li>You will be eligible for full payment (up to $6) once you complete the hit.</li>
          <li>Please minimize the chances of possible distractions - switch off messengers, music, etc.</li>
          <li>Please use full-screen mode.</li>
          <li>You <b>can not</b> use a mobile phone or tablet.</li>
          <li>Do <b>not refresh</b> this page during the experiment.</li>
        </ul>
        <Button clicked={props.buttonClicked}>Start the task</Button>
    </Frame>
  );
}

export default Notes;
