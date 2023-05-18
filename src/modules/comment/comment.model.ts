import mongoose from 'mongoose';
import toJSON from '../toJSON/toJSON';
import { ICommentDoc, ICommentModel } from './comment.interfaces';

const commentSchema = new mongoose.Schema<ICommentDoc, ICommentModel>(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: String,
      required: true,
      ref: 'User',
    },
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
commentSchema.plugin(toJSON);

const Question = mongoose.model<ICommentDoc, ICommentModel>('Comment', commentSchema);

export default Question;
