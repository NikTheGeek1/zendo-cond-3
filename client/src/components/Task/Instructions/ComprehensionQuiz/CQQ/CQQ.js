import React from 'react';
import Aux from '../../../../../hoc/Auxiliary/Auxiliary';

const cqq = ( props ) => {
  return (
    <Aux>
      <p><b>{props.num}. </b>{props.children} &nbsp;
      <select onChange={(e) => props.changed(e)}>
         <option value="noresp" select="value"></option>
         <option value="true">True</option>
         <option value="false">False</option>
      </select>
      </p>
    </Aux>
  );
}

export default cqq;
