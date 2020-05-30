import React from 'react';
import { connect } from 'react-redux';

import classes from './ThankYou.module.css';

const ThankYou = props => {
    return (
        <div className={classes.ThankYou}>
            <h1>Well done, you have completed the task!</h1>
            <p>Your completion code is: <strong>{props.tokenId}</strong>. Please copy this number to mTurk</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tokenId: state.tokenId
    };
};

export default connect(mapStateToProps)(ThankYou);