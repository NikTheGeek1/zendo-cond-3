import React from 'react';

import Ethics from './Ethics/Ethics';
import Notes from './Notes/Notes';
import Instructions from './Instructions/Instructions';

import classes from './Task.module.css';

class Task extends React.Component {
state = {
    showEthics: false,
    showNotes: false,
    showInstructions: true,
    showGame: false
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

render () {

  let ethics = null;
  if (this.state.showEthics){
    ethics = <Ethics buttonClicked={this.ethicsButtonHandler} />;
  }

  let notes = null;
  if (this.state.showNotes){
    notes = <Notes buttonClicked={this.notesButtonHandler} />;
  }

  let instructions = null;
  if (this.state.showInstructions){
    instructions = <Instructions buttonClicked={this.instructionsButtonHandler} />
  }

  let game = null;
  if (this.state.showGame){
    game = <h1>You reached the game!</h1>
  }

    return(
      <div className={classes.Task}>
        {ethics}
        {notes}
        {instructions}
        {game}
      </div>
    );
  }
}


export default Task;
