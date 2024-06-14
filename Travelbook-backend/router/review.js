import express from 'express';
import {
  createReview,
  getTourReviews,
  deleteReview,
} from "../controllers/reviewController.js";
import verifyUser  from '../utils/verifyToken.js';

const reviewRoute = express.Router();

reviewRoute.post('/:TourId' ,createReview);

reviewRoute.get('/:TourId', getTourReviews);

reviewRoute.delete('/:reviewId',verifyUser, deleteReview);

export default reviewRoute;
