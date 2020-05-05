import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
// import Timer from '../../../containers/Timer/Timer';

import Ins1 from './Ins1/Ins1';
import Ins2 from './Ins2/Ins2';
import Ins3 from './Ins3/Ins3';
import Ins4 from './Ins4/Ins4';
import Ins5 from './Ins5/Ins5';
import Ins6 from './Ins6/Ins6';
import Ins7 from './Ins7/Ins7';
import Ins8 from './Ins8/Ins8';
import CompQuiz from './ComprehensionQuiz/ComprehensionQuiz';



class Instructions extends React.Component {
  state = {
    showIns1: true,
    showIns2: false,
    showIns3: false,
    showIns4: false,
    showIns5: false,
    showIns6: false,
    showIns7: false,
    showIns8: false,
    showCompQuiz: false
  }
  componentDidMount() {
    this.props.timer(15, 0, false);
  }
  // navigation ins 1
  ins1ButtonHandler = () => {
    this.setState({showIns1: false, showIns2: true})
  };

  // navigation ins 2
  ins2ButtonHandler = () => {
    this.setState({showIns2: false, showIns3: true})
  };
  ins2ButtonPreHandler = () => {
    this.setState({showIns2: false, showIns1: true})
  };

  // navigation ins 3
  ins3ButtonHandler = () => {
    this.setState({showIns3: false, showIns4: true})
  };
  ins3ButtonPreHandler = () => {
    this.setState({showIns3: false, showIns2: true})
  };

  // navigation ins 4
  ins4ButtonHandler = () => {
    this.setState({showIns4: false, showIns5: true})
  };
  ins4ButtonPreHandler = () => {
    this.setState({showIns4: false, showIns3: true})
  };

  // navigation ins 5
  ins5ButtonHandler = () => {
    this.setState({showIns5: false, showIns6: true})
  };
  ins5ButtonPreHandler = () => {
    this.setState({showIns5: false, showIns4: true})
  };

  // navigation ins 6
  ins6ButtonHandler = () => {
    this.setState({showIns6: false, showIns7: true})
  };
  ins6ButtonPreHandler = () => {
    this.setState({showIns6: false, showIns5: true})
  };

  // navigation ins 7
  ins7ButtonHandler = () => {
    this.setState({showIns7: false, showIns8: true})
  };
  ins7ButtonPreHandler = () => {
    this.setState({showIns7: false, showIns6: true})
  };

  // navigation ins 8
  ins8ButtonHandler = () => {
    this.setState({showIns8: false, showCompQuiz: true})
  };
  ins8ButtonPreHandler = () => {
    this.setState({showIns8: false, showIns7: true})
  };

  // navigation compQuiz
  compQuizModalButtonWRONG = () => {
    this.setState({showCompQuiz: false, showIns1: true})
  };
  // We don't need this one as we have the button handler from above (Task.js)
  // since this page is the last of the instructions and then the game begins
  // compQuizModalButtonCORRECT = () => {
  //   this.setState({showcompQuiz: false, showIns8: true})
  // };
  compQuizButtonPreHandler = () => {
    this.setState({showCompQuiz: false, showIns8: true})
  };

  render() {
    let ins1 = null;
    if (this.state.showIns1){
      ins1 = (
        <Ins1 buttonClicked={this.ins1ButtonHandler}/>
      );
    }

    let ins2 = null;
    if (this.state.showIns2){
      ins2 = (
        <Ins2 buttonPreClicked={this.ins2ButtonPreHandler}
          buttonClicked={this.ins2ButtonHandler}/>
      );
    }

    let ins3 = null;
    if (this.state.showIns3){
      ins3 = (
        <Ins3 buttonPreClicked={this.ins3ButtonPreHandler}
          buttonClicked={this.ins3ButtonHandler}/>
      );
    }

    let ins4 = null;
    if (this.state.showIns4){
      ins4 = (
        <Ins4 buttonPreClicked={this.ins4ButtonPreHandler}
          buttonClicked={this.ins4ButtonHandler}/>
      );
    }

    let ins5 = null;
    if (this.state.showIns5){
      ins5 = (
        <Ins5 buttonPreClicked={this.ins5ButtonPreHandler}
          buttonClicked={this.ins5ButtonHandler}/>
      );
    }

    let ins6 = null;
    if (this.state.showIns6){
      ins6 = (
        <Ins6 buttonPreClicked={this.ins6ButtonPreHandler}
          buttonClicked={this.ins6ButtonHandler}/>
      );
    }

    let ins7 = null;
    if (this.state.showIns7){
      ins7 = (
        <Ins7 buttonPreClicked={this.ins7ButtonPreHandler}
          buttonClicked={this.ins7ButtonHandler}/>
      );
    }
    let ins8 = null;
    if (this.state.showIns8){
      ins8 = (
        <Ins8 buttonPreClicked={this.ins8ButtonPreHandler}
          buttonClicked={this.ins8ButtonHandler}/>
      );
    }
    let compQuiz = null;
    if (this.state.showCompQuiz){
      compQuiz = (
        <CompQuiz
          ModalButtonWRONG={this.compQuizModalButtonWRONG}
          buttonPreClicked={this.compQuizButtonPreHandler}
          buttonClicked={this.props.buttonClicked}/>
      );
    }
    return (
          <Aux>
            {ins1}
            {ins2}
            {ins3}
            {ins4}
            {ins5}
            {ins6}
            {ins7}
            {ins8}
            {compQuiz}
          </Aux>
    );
  }
}


export default Instructions;
