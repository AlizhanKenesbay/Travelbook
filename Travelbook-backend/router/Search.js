import express from "express";
import { getTourBySearch } from "../controllers/searchController.js";

const searchRoute = express.Router();

searchRoute.get("/", getTourBySearch);

export default searchRoute;


