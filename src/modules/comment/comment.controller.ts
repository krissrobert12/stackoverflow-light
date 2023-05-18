import httpStatus from 'http-status';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync';
import ApiError from '../errors/ApiError';
import pick from '../utils/pick';
import Comment from './comment.model';

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const comment = await Comment.create(req.body);
  res.status(httpStatus.CREATED).send(comment);
});

export const getComments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['user', 'query']);

  const findQuery: { [key: string]: any } = {};

  if (filters.user) {
    findQuery['user'] = filters.user;
  }

  if (filters.query) {
    findQuery['text'] = { $contains: filters.query.toLowerCase() };
  }

  const result = await Comment.find(filters);

  res.send(result);
});

export const getComment = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['commentId'] === 'string') {
    const commentId = new mongoose.Types.ObjectId(req.params['commentId']);
    const comment = await Comment.findById(commentId);
    if (!comment) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
    }
    res.send(comment);
  }
});

export const updateComment = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['commentId'] === 'string') {
    const commentId = new mongoose.Types.ObjectId(req.params['commentId']);
    const comment = await Comment.findByIdAndUpdate(commentId, req.body);
    res.send(comment);
  }
});

export const deleteComment = catchAsync(async (req: Request, res: Response) => {
  if (typeof req.params['commentId'] === 'string') {
    const commentId = new mongoose.Types.ObjectId(req.params['commentId']);
    Comment.findByIdAndDelete(commentId);
    res.status(httpStatus.NO_CONTENT).send();
  }
});
