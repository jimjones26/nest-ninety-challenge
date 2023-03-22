import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  id: String,
  name: String,
  isComplete: Boolean,
});
