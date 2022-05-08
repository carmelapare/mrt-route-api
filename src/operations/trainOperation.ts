import stations from "../models/stations";
import Graph from  "../controllers/Graph";

type Edge = {
	node: string;
	weight: number;
}

type Route = {
    source: string;
    destination: string;
    schedule: string;
}

function getTrainOperations() {
    if (!stations) {
        return "Empty stations"
    }


    let map = new Graph();

}