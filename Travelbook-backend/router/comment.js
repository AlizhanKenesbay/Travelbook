import express from 'express';
import verifyToken, {verifyAdmin} from '../utils/verifyToken.js';
import { createComment, deleteComment, getCommentsByBlogId } from '../controllers/commentController.js';

const commentRoute = express.Router();

commentRoute.post('/:BlogId', createComment);

commentRoute.get('/:BlogId', getCommentsByBlogId);

commentRoute.delete('/:commentId', verifyToken, verifyAdmin, deleteComment);

export default commentRoute;
