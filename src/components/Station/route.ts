import { Router } from "express";
import stationController from "../Station/controller";

function routes() {
    const stationRouter = Router();
    const controller = stationController();

    stationRouter
        .route("/")
		.get(controller.getLookup);

    stationRouter
        .route("/getShortestPath/:fromStation/:toStation/:schedule")
        .get(controller.getShortestPath);

	return stationRouter;
}

module.exports = routes;