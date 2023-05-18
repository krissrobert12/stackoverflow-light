import { Model, Document } from 'mongoose';

export interface IQuestion {
  title: string;
  thread: string[];
  upVotes: number;
  downVotes: number;
}

export interface IQuestionDoc extends IQuestion, Document {
  //
}

export interface IQuestionModel extends Model<IQuestionDoc> {
  //
}
