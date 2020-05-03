import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const modalContent = ( props ) => {
  return (
    <div style={{textAlign:"center"}}>
      <h3>{props.children}</h3>
      <button onClick={props.clicked}>{props.next}</button>
    </div>
  );
}

export default modalContent;
