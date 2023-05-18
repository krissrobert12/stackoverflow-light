import Joi from 'joi';
import { objectId } from '../validate/custom.validation';

const createQuestionBody = {
  title: Joi.string().required(),
  user: Joi.string().required(),
  // thread does not exist yet
};

export const createQuestion = {
  body: Joi.object().keys(createQuestionBody),
};

export const getQuestions = {
  query: Joi.object().keys({
    query: Joi.string().optional(),
    user: Joi.string().optional(),
  }),
};

export const getQuestion = {
  params: Joi.object().keys({
    questionId: Joi.string().custom(objectId),
  }),
};

export const updateQuestion = {
  params: Joi.object().keys({
    questionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().email(),
    })
    .min(1),
};

export const deleteQuestion = {
  params: Joi.object().keys({
    questionId: Joi.string().custom(objectId),
  }),
};

export const addComment = {
  params: Joi.object().keys({
    questionId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    comment: Joi.object().required(),
  }),
};
