const mongoose = require('mongoose'); // requiring the module

const trialSchema = mongoose.Schema({ // creating the schema (data structure which will save)

  trial: {type: Number, unique: false},
  data: {type: Array, unique: false},
  selected: {type: Array, unique: false},
  posteriorORprior: {type: String, unique: false},
  disp_order: {type: Array, unique: false},
  rule: {type: String, unique: false},
  ph4_answer: {type: String, unique: false},
  token_id: {type: String, unique: false}


  //userImage: {type: String, default: 'ddefault.png'}
});

module.exports = mongoose.model('trial', trialSchema); // exporting the user data
