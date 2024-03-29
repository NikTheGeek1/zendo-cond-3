// Start the game
function StartIframe() {
  //rules = ["Rule1", "Rule2", "Rule3", "Rule4", "Rule5", "Rule6", "Rule7", "Rule8", "Rule9", "Rule10"];

  // rules = [Rule1, Rule2, Rule3, Rule4, Rule5, Rule6, Rule7, Rule8, Rule9, Rule10];
  // rule_names = ['Zeta' ,'Phi' ,'Upsilon' ,'Iota' ,'Kappa' ,'Omega' ,'Mu' ,'Nu' ,'Xi', 'Psi'];

  // trials_order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  rules = [Rule1, Rule3, Rule4, Rule5, Rule6];
  rule_names = ['Zeta', 'Upsilon', 'Iota', 'Kappa', 'Omega'];
  rules_idx_in_zendo_cases = [0, 2, 3, 4, 5];

  trials_order = [0, 1, 2, 3, 4];
  trials_order.sort(function () { return 0.5 - Math.random() });


  rand_counter_order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  rand_counter_order.sort(function () { return 0.5 - Math.random() });


  // these are data from inside zendo. The randomised positions of the prior posterior answers
  posit_ix = [8, 9, 10, 11, 12, 13, 14, 15];
  posit_ix.sort(function () { return 0.5 - Math.random() });

  console.log(zendo_cases);
  console.log("Got trial data");

  StartIframe2();


  // $.ajax({
  //     dataType: "json",
  //     url: "/json/zendo_cases.json",
  //     async: false,
  //     success: function(data) {
  //
  //         console.log("Got trial data");
  //
  //         zendo_cases = data;
  //         StartIframe2();
  //     }
  // });
};


function StartIframe2(isFirstTrial = true) {

  //rand_trial = Math.floor(Math.random()*9);
  //rand_trial = trials_order[Math.floor(Math.random()*trials_order.length)];
  rand_trial = trials_order.pop();
  rand_counter = rand_counter_order.pop();

  if (typeof (rand_trial) === 'undefined') {
    // just so the following code doesn't break...
    trials_order.length = 5; // we define the length so the following if statement will not break and go to debrief
    rand_trial = 4;
    rand_counter = 4;

  }
  prompt_phase1 = '<p id="prompt2" align="left">&#8226 Here are some objects.<br>' +
    '&#8226 Click "<b>Test</b>" to see if they emit <b>' +
    rule_names[rand_trial] + '</b> waves.</p>';

  prompt_phase2 = '<p id="prompt2" align="left">&#8226 Now choose your own arrangement.  Click on the squares at the bottom to add objects to the scene.<br>' +
    '&#8226 Once added, <b>left hold click</b> on objects to move them, use "<b>Z</b>"/"<b>X</b>" to rotate, and <b>right click</b> to remove.<br>' +
    '&#8226 When you have the arrangement you want, click "<b>Test</b>" to see if it emits <b>' +
    rule_names[rand_trial] + '</b> waves.<br>' +
    '&#8226 Outcomes of your previous tests are shown at the top.  You get <b>8</b> tests in total.<br>' +
    '&#8226 A yellow star means your arrangement did follow the rule,  an empty star means it did not.</p>';

  prompt_phase3 = '<p id="prompt2" align="left">&#8226 Here are 8 new arrangements<br>' +
    '&#8226 Select which ones you think emit <b>' +
    rule_names[rand_trial] + '</b> waves<br>' +
    '&#8226 You must select at least 1 and less than all 8.<b>';

  prompt_phase4 = '<p id="prompt2"><b>Please describe in your own words what makes a scene emit radiation.<br></b></p>' +
    '&#8226 Try to make your description as <b>specific</b> as possible<br>' +
    '&#8226 Use <b>unambiguous</b> phrases like "There must be at least..." / "There are at most.." / "There is exactly one..."<br>' +
    '&#8226 <b>Remember:</b> the rule could be to do with any of the properties of the cones or their relationships, ' +
    'but has nothing to do with the name or what you did on previous tests<br>' +
    '&#8226 If you can think of more than one rule that could be true, please list them<br>' +
    '&#8226 If you cannot think of any rule that could be true, please say so<br>' +
    '&#8226 Type your answer (at least 15 characters) in the box below to continue<br>'
  //Prep data
  examples = zendo_cases[rules_idx_in_zendo_cases[rand_trial]].t.slice(0, 1);
  test_cases = zendo_cases[rules_idx_in_zendo_cases[rand_trial]].t.slice(1).concat(zendo_cases[rules_idx_in_zendo_cases[rand_trial]].f.slice(1));

  // start iframe from here if this is not the first trial (if it's the first trial, iframe starts from groupchat)
  trial_num = (5 - trials_order.length);
  if (trial_num > 0 && trial_num < 6) { // if the first trials is finisheed
    console.log("Starting trial ", trial_num);
    // game frame
    var iframe = document.getElementById("game_frame");
    iframe.style.border = 'ridge';


    //document.getElementById('waiting_area').style.display = "none";
    if (iframe) {
      var iframeContent = (iframe.contentWindow || iframe.contentDocument);
      //iframeContent.location.reload(); // restarting iframe
      // pausing to fully reload the iframe

      iframeContent.Start(rules[rand_trial], examples, test_cases, rule_names[rand_trial], rand_counter, posit_ix, trial_num, false, isFirstTrial);

    }
  } else if (trial_num === 6) {// closing of if statement
    // display debriefing
    document.getElementById('debrief').style.display = "block";
    document.getElementById('game').style.display = "none";
    document.getElementById('images-div').style.display = "none";
  }

}
