import { Model, Document } from 'mongoose';

export interface IComment {
  text: string;
  user: string;
  upVotes: number;
  downVotes: number;
}

export interface ICommentDoc extends IComment, Document {
  //
}

export interface ICommentModel extends Model<ICommentDoc> {
  //
}
