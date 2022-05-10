import * as stationList from "../../__data__/stations.json"
import { Station, Stations } from "../Station/model"
import findShortestPath from "../Station/operation"

function stationsController() {

    let stations : Stations = stationList.stations.map((i: Station) => ({
        code: i.code,
        name: i.name,
        openingDate: i.openingDate,
        interval: undefined
    } as Station))

    function getLookup(req: any, res: any) {
        res.send(stations);
    }

    function getShortestPath(req: any, res: any) {
        const { 
            fromStation, 
            toStation ,
            schedule
        } = req.params;

        const shortestPath = findShortestPath(fromStation, toStation, schedule, stations);
        res.send(shortestPath);
    }
    
    return { getLookup, getShortestPath};
}

export default stationsController;
