import express from 'express';
import { createBooking, getAllBookings, getBooking } from '../controllers/bookingController.js';
import verifyToken, { verifyAdmin } from "../utils/verifyToken.js";

const bookingRoute = express.Router();

bookingRoute.post('/', createBooking);

bookingRoute.get('/:id', getBooking);

bookingRoute.get('/', verifyToken, verifyAdmin, getAllBookings);

export default bookingRoute
