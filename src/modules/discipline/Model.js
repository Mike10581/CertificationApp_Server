const mongoose = require('mongoose');
const { Schema } = mongoose;
const DisciplineSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Discipline', DisciplineSchema);
