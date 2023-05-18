import httpStatus from 'http-status';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import pick from '../utils/pick';
import Question from './question.model';
import { Comment, commentInterfaces } from '../comment';

export const createQuestion = catchAsync(async (req: Request, res: Response) => {
  const question = await Question.create(req.body);
  res.status(httpStatus.CREATED).send(question);
});

export const getQuestions = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['user', 'query']);

  const findQuery: { [key: string]: any } = {};

  if (filters.user) {
    findQuery['user'] = filters.user;
  }

  if (filters.query) {
    findQuery['title'] = { $contains: filters.query.toLowerCase() };
  }

  const result = await Question.find(filters);

  res.send(result);
});

export const getQuestion = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['questionId'] === 'string') {
    const questionId = new mongoose.Types.ObjectId(req.params['questionId']);
    const question = await Question.findById(questionId);
    if (!question) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
    }
    res.send(question);
  }
});

export const updateQuestion = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['questionId'] === 'string') {
    const questionId = new mongoose.Types.ObjectId(req.params['questionId']);
    const question = await Question.findByIdAndUpdate(questionId, req.body);
    res.send(question);
  }
});

export const deleteQuestion = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['questionId'] === 'string') {
    const questionId = new mongoose.Types.ObjectId(req.params['questionId']);
    Question.findByIdAndDelete(questionId);
    res.status(httpStatus.NO_CONTENT).send();
  }
});

export const addComment = catchAsync(
  async (
    req: Request<{ questionId?: string }, unknown, { comment?: Partial<commentInterfaces.IComment> }>,
    res: Response
  ) => {
    if (typeof req.params.questionId === 'string') {
      const questionId = new mongoose.Types.ObjectId(req.params.questionId);
      const question = await Question.findById(questionId);
      if (!question) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Question not found!');
      }

      const { comment: commentPayload } = req.body;
      if (!commentPayload) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Comment not found!');
      }

      const comment = await Comment.create(commentPayload);
      question.thread.push(comment._id.toString());
      await question.save();

      res.send(question);
    }
  }
);
