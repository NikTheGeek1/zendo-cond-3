import React from 'react';


import Ethics from './Ethics/Ethics';
import Notes from './Notes/Notes';
import Instructions from './Instructions/Instructions';
import Game from './Game/Game';
import Debrief from './Debrief/Debrief';
import ThankYou from './ThankYou/ThankYou';
import classes from './Task.module.css';

class Task extends React.Component {
state = {
    showEthics: false,
    showNotes: false,
    showInstructions: false,
    showGame: false,
    showDebrief: true
}

ethicsButtonHandler = () => {
  this.setState({showEthics: false})
  this.setState({showNotes: true})
}

notesButtonHandler = () => {
  this.setState({showNotes: false})
  this.setState({showInstructions: true})
}

instructionsButtonHandler = () => {
  this.setState({showInstructions: false})
  this.setState({showGame: true})
}

gameButtonHandler = () => {
  this.setState({showGame: false})
  this.setState({showDebrief: true})
}

debriefButtonHandler = () => {
  this.setState({showDebrief: false})
  this.setState({showThankYou: true})
}


render () {

  let ethics = null;
  if (this.state.showEthics){
    ethics = <Ethics timer={this.props.timer} buttonClicked={this.ethicsButtonHandler} />;
  }

  let notes = null;
  if (this.state.showNotes){
    notes = <Notes timer={this.props.timer} buttonClicked={this.notesButtonHandler} />;
  }

  let instructions = null;
  if (this.state.showInstructions){
    instructions = <Instructions timer={this.props.timer} buttonClicked={this.instructionsButtonHandler} />
  }

  let game = null;
  if (this.state.showGame){
    // this.props.timer(0, 0, true);
    game = <Game timer={this.props.timer} buttonClicked={this.gameButtonHandler}></Game>
  }

  let debrief = null;
  if (this.state.showDebrief){
    // this.props.timer(0, 0, true);
    debrief = <Debrief timer={this.props.timer} buttonClicked={this.debriefButtonHandler}></Debrief>
  }

  let thankYou = null;
  if (this.state.showThankYou){
    // this.props.timer(0, 0, true);
    thankYou = <ThankYou timer={this.props.timer} buttonClicked={this.thankYouButtonHandler}></ThankYou>
  }
    return(
      <div className={classes.Task}>
        {ethics}
        {notes}
        {instructions}
        {game}
        {debrief}
        {thankYou}
      </div>
    );
  }
}


export default Task;
