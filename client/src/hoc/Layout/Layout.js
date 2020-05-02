import React from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Logo from '../../components/Logo/Logo';
import Signature from '../../components/Signature/Signature';

import classes from './Layout.module.css';

const layout = ( ) => {
  return (
    <div className={classes.Layout}>
      <Signature />
      <Logo />
    </div>
  );
}
export default layout;
