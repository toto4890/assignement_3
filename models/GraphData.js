var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  AvgMax: String,
  AvgMin: String
}, 
{
  collection: 'example'
});

mongoose.model('GraphData', GraphDataSchema);

