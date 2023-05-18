import Joi from 'joi';
import { objectId } from '../validate/custom.validation';

const createCommentBody = {
  text: Joi.string().required(),
  user: Joi.string().required(),
  // thread does not exist yet
};

export const createComment = {
  body: Joi.object().keys(createCommentBody),
};

export const getComments = {
  query: Joi.object().keys({
    query: Joi.string().optional(),
    user: Joi.string().optional(),
  }),
};

export const getComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};

export const updateComment = {
  params: Joi.object().keys({
    commentId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      text: Joi.string(),
      // cannot change user
      upVotes: Joi.number().optional(),
      downVotes: Joi.number().optional(),
    })
    .min(1),
};

export const deleteComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};
