import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import { IQuestionDoc, IQuestionModel } from './question.interfaces';

const questionSchema = new mongoose.Schema<IQuestionDoc, IQuestionModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    thread: [
      {
        type: String,
        ref: 'Comment',
      },
    ],
    upVotes: {
      type: Number,
      required: false,
      default: 0,
    },
    downVotes: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
questionSchema.plugin(toJSON);

const Question = mongoose.model<IQuestionDoc, IQuestionModel>('Question', questionSchema);

export default Question;
