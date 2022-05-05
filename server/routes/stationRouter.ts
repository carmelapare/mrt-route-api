import { Router } from "express";
import stationController from "../controllers/stations";

function routes() {
    const stationRouter = Router();
    const controller = stationController();

    stationRouter
        .route("/")
		.get(controller.getAll);

    stationRouter
        .route("/findShortestPath/:fromStation/:toStation")
        .get(controller.findShortestPath);

	return stationRouter;
}

module.exports = routes;