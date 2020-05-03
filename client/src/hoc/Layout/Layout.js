import React from 'react';

import UoeSignature from '../../components/uoeSignature/uoeSignature';

import classes from './Layout.module.css';

const layout = ( props ) => {
  return (
    <div className={classes.Layout}>
      <UoeSignature />
      <main>{props.children}</main>
    </div>
  );
}
export default layout;
