import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { auth } from '../../modules/auth';
import { questionController, questionValidation } from '../../modules/question';

const router: Router = express.Router();

router
  .route('/')
  .post(auth('generic'), validate(questionValidation.createQuestion), questionController.createQuestion)
  .get(auth('generic'), validate(questionValidation.getQuestions), questionController.getQuestions);

router
  .route('/:questionId')
  .get(auth('generic'), validate(questionValidation.getQuestion), questionController.getQuestion)
  .patch(auth('generic'), validate(questionValidation.updateQuestion), questionController.updateQuestion)
  .delete(auth('generic'), validate(questionValidation.deleteQuestion), questionController.deleteQuestion);

router
  .route('/:questionId/addComment')
  .post(auth('generic'), validate(questionValidation.addComment), questionController.addComment);

export default router;

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Question management and retrieval
 */

// TODO: Write swagger for this
