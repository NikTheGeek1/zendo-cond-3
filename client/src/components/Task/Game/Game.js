import React from 'react';

import Script from 'react-load-script';

const game = ( props ) => {
  return (
    <div id="game">
      <iframe
      src='./zendo_iframe.html'
      style={{width: "800px", height:"500px"}}
      id="game_frame"
      title="iframe_1"></iframe>
      <div id="query2"> </div>
      <Script url="./json/zendo_cases.js"/>
      <Script url="./js/group/start_game.js"/>
      <Script url="./js/group/rules.js"/>
    </div>
  );
}



export default game;
