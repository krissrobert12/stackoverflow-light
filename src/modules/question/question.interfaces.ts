import { Model, Document } from 'mongoose';

export interface IQuestion {
  title: string;
  thread: string[];
}

export interface IQuestionDoc extends IQuestion, Document {
  //
}

export interface IQuestionModel extends Model<IQuestionDoc> {
  //
}
