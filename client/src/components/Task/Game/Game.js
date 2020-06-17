import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Script from 'react-load-script';
import classes from './Game.module.css';
import Button from '../../Button/Button';

import generateTokenHelper from '../../../utility/generateTokenHelper';

class Game extends React.Component {
  state = {
    trial: 1,
    isPosterior: false,
    textArea: {
      value: "",
      isValid: false
    }
  }
  componentDidMount() {
    this.props.timer(0, 0, true);
    if (!this.props.startTime) {
      this.props.onStoringStartTime(new Date());
    }
    if (!this.props.tokenId) {
      this.props.onStoringTokenId(generateTokenHelper(5));
    }
  }

  isValid = (text) => {
    return text.length > 14;
  }

  continueHandler = (e) => {
    // validation for the text area
    const ruleResponse = document.getElementById('ruleTextResponse').value;
    const textAreaState = this.state.textArea;
    if (this.isValid(ruleResponse)) {
      textAreaState.isValid = false;
      this.setState({ textArea: textAreaState });

      // setting up the data
      var iframe = document.getElementById("game_frame");
      var iframeContent = (iframe.contentWindow || iframe.contentDocument);
      const data = {
        posteriorORprior: this.state.isPosterior ? 'post' : 'prior',
        token_id: this.props.tokenId,
        ph4_answer: ruleResponse,
        rule: iframeContent.rule_name,
        dispOrder: iframeContent.posit_ix,
        selected: iframeContent.selected,
        trial: iframeContent.trial_num,
        data: iframeContent.trialdata,
      };
      console.log(iframeContent.selected, 'Game', '55');
      this.sendDataToServer(data);
      if (!this.state.isPosterior) {
        this.goToPosterior(data);
      } else {
        if (this.state.trial === 5) {
          this.props.buttonClicked();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          this.setState(prevState => {
            return { trial: prevState.trial + 1 }
          });
          this.advanceTrial(data);
        }
      }


      document.getElementById('ruleTextResponse').value = ""
      // store the data somewhere heree
      this.setState((prevState) => {
        return { isPosterior: !prevState.isPosterior };
      });


    } else {
      textAreaState.isValid = false;
      this.setState({ textArea: textAreaState });
      e.preventDefault();
    }

  };

  sendDataToServer = data => {
    axios.post('https://zendo-cond-3.herokuapp.com/storeData', data)
      .catch(function (error) {
        console.log(error);
      });
  };

  advanceTrial = () => {
    document.getElementById('ruleTextResponse-div').style.display = "none";
    var iframe = document.getElementById("game_frame");
    var iframeContent = (iframe.contentWindow || iframe.contentDocument);
    for (var i = 0; i < iframeContent.trial_pics.length; i++) {
      iframeContent.stage.removeChild(iframeContent.trial_pics[i]);
    }
    iframeContent.selected = [false, false, false, false, false, false, false, false];
    iframeContent.cbtn.visible = false;
    iframeContent.stage.removeChild(iframeContent.t1);
    document.getElementById('query2').innerHTML = "<b style='text-align:center; color:red'>This is a NEW trial. This is a new rule!</b>";
    iframeContent.advanceTrial();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  goToPosterior = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.getElementById('ruleTextResponse-div').style.display = "none";
    var iframe = document.getElementById("game_frame");
    var iframeContent = (iframe.contentWindow || iframe.contentDocument);
    for (var i = 0; i < iframeContent.trial_pics.length; i++) {
      iframeContent.stage.removeChild(iframeContent.trial_pics[i]);
    }
    iframeContent.selectedPrior = [...iframeContent.selected];
    iframeContent.selected = [false, false, false, false, false, false, false, false];
    iframeContent.cbtn.visible = false;
    iframeContent.stage.removeChild(iframeContent.t1);
    let isPosterior = true;

    iframeContent.Start(iframeContent.rule,
      iframeContent.start_state,
      iframeContent.test_trials,
      iframeContent.rule_name,
      iframeContent.ct_balance,
      iframeContent.posit_ix,
      iframeContent.trial_num,
      isPosterior);
    iframeContent.DrawHistory(
      iframeContent.trialdata,
      true,
      iframeContent.phase);

    document.getElementById('query2').innerHTML = "<p style='text-align:center; color:red'><b>Re-create 7 more scenes following the same rule</b>" + document.getElementById('query2').innerHTML

  };

  changedHandler = (e) => {
    const textAreaState = this.state.textArea;
    textAreaState.isValid = this.isValid(e.target.value);
    this.setState({ textArea: textAreaState });
  };

  render() {
    let textArea = (
      <div id="ruleTextResponse-div" style={{ display: "none" }}>
        <textarea
          className={classes.TextBoxInvalid}
          id="ruleTextResponse"
          placeholder="Please enter your answer here"
          rows="4"
          cols="112"
          onChange={e => this.changedHandler(e)} ></textarea>
        <Button
          type="button"
          name="button"
          style={{ display: "block" }}
          clicked={e => { this.continueHandler(e) }}>Continue</Button>
      </div>
    );
    if (this.state.textArea.isValid) {
      textArea = (
        <div id="ruleTextResponse-div" style={{ display: "none" }}>
          <textarea
            id="ruleTextResponse"
            placeholder="Please enter your answer here"
            rows="4"
            cols="112"
            onChange={e => this.changedHandler(e)} ></textarea>
          <Button
            type="button"
            name="button"
            style={{ display: "block" }}
            clicked={e => { this.continueHandler(e) }}>Continue</Button>
        </div>
      );
    }

    return (
      <div id="game">
        <iframe
          src='./zendo_iframe.html'
          style={{ width: "800px", height: "500px" }}
          id="game_frame"
          title="iframe_1"></iframe>
        <div id="query2"> </div>
        {textArea}
        <Script url="./json/zendo_cases.js" />
        <Script url="./js/group/start_game.js" />
        <Script url="./js/group/rules.js" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tokenId: state.tokenId,
    startTime: state.startTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStoringStartTime: (time) => dispatch({ type: 'START_TIME', startTime: time }),
    onStoringTokenId: (tokenId) => dispatch({ type: 'TOKEN_ID', tokenId: tokenId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
