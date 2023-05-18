import express, { Router } from 'express';
import { validate } from '../../modules/validate';
import { auth } from '../../modules/auth';
import { commentController, commentValidation } from '../../modules/comment';

const router: Router = express.Router();

router
  .route('/')
  .post(auth('generic'), validate(commentValidation.createComment), commentController.createComment)
  .get(auth('generic'), validate(commentValidation.getComments), commentController.getComments);

router
  .route('/:commentId')
  .get(auth('generic'), validate(commentValidation.getComment), commentController.getComment)
  .patch(auth('generic'), validate(commentValidation.updateComment), commentController.updateComment)
  .delete(auth('generic'), validate(commentValidation.deleteComment), commentController.deleteComment);

export default router;

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comments management and retrieval
 */

// TODO: Write swagger for this
