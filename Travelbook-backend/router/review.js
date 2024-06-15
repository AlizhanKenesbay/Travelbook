import express from 'express';
import {
  createReview,
  getTourReviews,
  deleteReview,
} from "../controllers/reviewController.js";
import verifyToken, {verifyAdmin} from "../utils/verifyToken.js";

const reviewRoute = express.Router();

reviewRoute.post('/:TourId', createReview);

reviewRoute.get('/:TourId', getTourReviews);

reviewRoute.delete('/:reviewId', verifyToken, verifyAdmin, deleteReview);

export default reviewRoute;
