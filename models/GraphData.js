
var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  Sales: String,
  Expenses: String
}, 
{
  collection: 'example'
});

mongoose.model('GraphData', GraphDataSchema);