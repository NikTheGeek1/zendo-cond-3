import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Button from '../../Button/Button';
import classes from './Debrief.module.css';


const reducer = (state, action) => {
    switch (action.type) {
        case 'GENERAL_COMMENT':
            return { ...state, generalComment: action.value }
        case 'AGE':
            return { ...state, age: action.value }
        case 'GENDER':
            return { ...state, gender: action.value }
        case 'INITIAL_STRATEGY':
            return { ...state, initialStrategy: action.value }
        case 'FINAL_STRATEGY':
            return { ...state, finalStrategy: action.value }
        case 'ENGAGING':
            return { ...state, engaging: action.value }
        case 'DIFFICULTY':
            return { ...state, difficulty: action.value }
        case 'POLITICAL_ORIENTATION':
            return { ...state, politicalOrientation: action.value }

        default:
            throw new Error('You should not be here');
    }
};

const Debrief = props => {
    const { timer } = props;
    const [allValid, setAllValid] = useState(false);
    const [state, dispatchState] = useReducer(reducer, {
        generalComment: null,
        age: null,
        gender: null,
        initialStrategy: null,
        finalStrategy: null,
        engaging: null,
        difficulty: null,
        politicalOrientation: null
    });
    useEffect(() => {
        timer(0, 0, true);
    }, [timer]);

    useEffect(() => {
        if (state.generalComment && state.age && state.difficulty && state.gender && state.initialStrategy && state.finalStrategy && state.politicalOrientation && state.engaging) {
            setAllValid(true);
        }
    }, [
        state.generalComment,
        state.age,
        state.difficulty,
        state.gender,
        state.initialStrategy,
        state.finalStrategy,
        state.politicalOrientation,
        state.engaging
    ]);

    const changeHandler = (actionType, e) => {
        dispatchState({
            type: actionType,
            value: e.target.value
        });
    };

    const doneButtonHandler = () => {
        const data = {
            date: new Date(),
            generalComment: state.generalComment,
            age: state.age,
            gender: state.gender,
            initial_strategy: state.initialStrategy,
            final_strategy: state.finalStrategy,
            task_duration: Math.round((( (new Date() - props.startTime) % 86400000) % 3600000) / 60000), // duration in minutes
            engaging: state.engaging,
            difficult: state.difficulty,
            pol_orient: state.politicalOrientation,
            token_id: props.tokenId,
        }
        axios.post('http://localhost:5000/storeDebrief', data)
            .catch(function (error) {
                console.log(error);
            });
            props.buttonClicked();
        }

    let validStatusEngaging = classes.InvalidInput;
    if (state.engaging) {
        validStatusEngaging = '';
    }
    let validStatusDifficulty = classes.InvalidInput;
    if (state.difficulty) {
        validStatusDifficulty = '';
    }
    let validStatusAge = classes.InvalidInput;
    if (state.age) {
        validStatusAge = '';
    }
    let validStatusFinalStrategy = classes.InvalidInput;
    if (state.finalStrategy) {
        validStatusFinalStrategy = '';
    }
    let validStatusInitialStrategy = classes.InvalidInput;
    if (state.initialStrategy) {
        validStatusInitialStrategy = '';
    }
    let validStatusGender = classes.InvalidInput;
    if (state.gender) {
        validStatusGender = '';
    }
    let validStatusGeneralComment = classes.InvalidInput;
    if (state.generalComment) {
        validStatusGeneralComment = '';
    }
    let validStatusPoliticalOrientation = classes.InvalidInput;
    if (state.politicalOrientation) {
        validStatusPoliticalOrientation = '';
    }
    let button = <Button disabled clicked={doneButtonHandler}>Done</Button>;
    if (allValid) {
        button = <Button clicked={doneButtonHandler}>Done</Button>;
    }
    return (
        <div id="debrief" className={classes.Debrief}>
            <h1>Demographics and Debrief</h1>
            <p>You are finished!  Thank you for your contributions to science. Please answer the following questions to receive your compensation.</p>

            <div className="instructions well">
                <form id="postquiz">
                    <p>Do you have any comments regarding the experiment?</p>
                    <textarea name="feedback" onChange={changeHandler.bind(this, 'GENERAL_COMMENT')} className={[classes.TextArea, validStatusGeneralComment].join(' ')} ></textarea>
                    <br />
                    <p>How did you decide which scenes emit radiation during your <b>initial choices</b>? Did you have a specific strategy?</p>
                    <textarea name="init_strat" onChange={changeHandler.bind(this, 'INITIAL_STRATEGY')} id="init_strat" className={[classes.TextArea, validStatusInitialStrategy].join(' ')} ></textarea>
                    <br />
                    <p>How did you decide which scenes emit radiation during your <b>final choices choices</b> (after seeing the choices of the other player)? Did you have a specific strategy?</p>
                    <textarea name="final_strat" onChange={changeHandler.bind(this, 'FINAL_STRATEGY')} id="final_strat" className={[classes.TextArea, validStatusFinalStrategy].join(' ')} ></textarea>
                    <br />
                    <p><b>1.</b> How old are you?:&nbsp;&nbsp;
                    <input id="ageinput" onChange={changeHandler.bind(this, 'AGE')} className={[classes.Input, validStatusAge].join(' ')} type="number" maxLength="3" name="age" min="18" max="100" step="1" /> years
                    </p>
                    <p><b>2.</b> What is your gender?&nbsp;&nbsp;
                            <select onChange={changeHandler.bind(this, 'GENDER')} id="sex" name="sex" className={validStatusGender}>
                            <option value="noresp" defaultValue></option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                            <option value="noresponse">I’d prefer not to respond</option>
                        </select>
                    </p>
                    <br />
                    {/* //  beginning of a question */}
                    <div className="row question">
                        <div className="col-md-8">
                            <b>3.</b>On a scale of 0-10 (where 10 is completely engaging), please rate how <b>ENGAGING</b> you found the task:
                        </div>
                        <div className="col-md-4">
                            <select name="engagement" onChange={changeHandler.bind(this, 'ENGAGING')} className={validStatusEngaging}>
                                <option value="--" defaultValue> </option>
                                <option value="10">10 - Very engaging</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5 - Moderately engaging</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                                <option value="0">0 - Not engaging</option>
                            </select>
                        </div>
                    </div>
                    {/* <!-- end of a question -->
             <!-- beginning of a question --> */}
                    <div className="row question">
                        <div className="col-md-8">
                            <b>4.</b>On a scale of 0-10 (where 10 is the most difficult), please rate how <b>DIFFICULT</b> you found the learning task:
                 </div>
                        <div className="col-md-4">
                            <select id="difficulty" onChange={changeHandler.bind(this, 'DIFFICULTY')} name="difficulty" className={validStatusDifficulty}>
                                <option value="--" defaultValue></option>
                                <option value="10">10 - Very difficult</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5 - Moderately difficult</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                                <option value="0">0 - Not difficult at all</option>
                            </select>
                        </div>
                    </div>
                    {/* <!-- end of a question -->
             <!-- beginning of a question --> */}
                    <div className="row question">
                        <div className="col-md-8">
                            <b>4.</b>On a scale of 1-7 (where 1 is very liberal and 7 is very conservative), please rate your <b>POLITICAL ORIENTATION</b>:
                 </div>
                        <div className="col-md-4">
                            <select id="pol_orientation" onChange={changeHandler.bind(this, 'POLITICAL_ORIENTATION')} name="pol_orientation" className={validStatusPoliticalOrientation}>
                                <option value="--" defaultValue></option>
                                <option value="7">7 - Very conservative</option>
                                <option value="6">6 - Conservative</option>
                                <option value="5">5 - Moderately conservative</option>
                                <option value="4">4 - Neutral</option>
                                <option value="3">3 - Moderately liberal</option>
                                <option value="2">2 - Liberal</option>
                                <option value="1">1 - Very liberal</option>
                            </select>
                        </div>
                    </div>
                    {/* <!-- end of a question --> */}
                </form>
                <br />
                {button}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        startTime: state.startTime,
        tokenId: state.tokenId
    };
};

export default connect(mapStateToProps)(Debrief);