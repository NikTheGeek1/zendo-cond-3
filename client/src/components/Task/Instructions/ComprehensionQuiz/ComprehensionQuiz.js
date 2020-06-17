import React from 'react';

import CQQ from './CQQ/CQQ';
import Button from '../../../Button/Button';
import Modal from '../../../Modal/Modal';
import ModalContent from '../../../Modal/ModalContent/ModalContent';


class Ins7 extends React.Component {
  state = {
    questions:[
      {id:1, q:'You will be investigating 5 different types of radiation', selected: null},
      {id:2, q:'For each type, your job is to create arrangements that emit radiation as many times as possible', selected: null},
      {id:3, q:'After doing your experiments, you will make judgments about new arrangements', selected: null},
      {id:4, q:'The rule has only to do with the number, sizes, or colors of the cones', selected: null},
      {id:5, q:'The rule might have to do with the order in which you performed your tests', selected: null},
      {id:6, q:'You may revise your initial choices based on the 7 new arrangements you created last.', selected: null}
    ],
    isCorrect: false
  };

changedHandler = (e, idx) => {
  let stateCopy = this.state.questions;
  stateCopy[idx].selected = e.target.value;
  if(stateCopy[0].selected === 'true' &&
      stateCopy[1].selected === 'false' &&
      stateCopy[2].selected === 'true' &&
      stateCopy[3].selected === 'false' &&
      stateCopy[4].selected === 'false' &&
      stateCopy[5].selected === 'true'
    ) {
      this.setState({isCorrect: true});
    }
    this.setState({questions: stateCopy});
};

modalHandler = () => {
  this.setState({showModal: true});
}

  render() {
    let compQuizResults = (
      <ModalContent
        next="Try again!"
        clicked={this.props.ModalButtonWRONG}>Unfortunately, your answer is wrong. Please try again.</ModalContent>
      );
    if(this.state.isCorrect){
      compQuizResults = (
        <ModalContent
          next="Start game!"
          clicked={this.props.buttonClicked}>Amazing! You can now start the game.</ModalContent>
        );
    }

    const questions = this.state.questions.map((q, idx) => {
      return (
        <CQQ key={q.id} num={q.id} changed={(e) => this.changedHandler(e, idx)}>{q.q}</CQQ>
      );
    });
    return (
      <div>
        <Modal show={this.state.showModal}>
          {compQuizResults}
        </Modal>
        {questions}
          <div style={{display: "flex"}}>
            {/* <Button isPrevious clicked={this.props.buttonPreClicked}><span>Previous</span></Button> */}
            <Button clicked={this.modalHandler}><span>Continue</span></Button>
          </div>
    </div>
    );
  }
}

export default Ins7;
