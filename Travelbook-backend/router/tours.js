import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, updateTour } from "../controllers/tourController.js";
import verifyToken, { verifyAdmin } from "../utils/verifyToken.js";

const tourRoute = express.Router();

tourRoute.get("/featured", getFeaturedTour);

tourRoute.get("/:id", getSingleTour);

tourRoute.post("/", verifyToken, verifyAdmin, createTour);

tourRoute.put("/:id", verifyToken, verifyAdmin, updateTour);

tourRoute.delete("/:id", verifyToken, verifyAdmin, deleteTour);

tourRoute.get("/", getAllTour);

export default tourRoute;
