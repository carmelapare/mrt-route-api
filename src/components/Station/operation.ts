import { Edge, Stations } from "./model";

class Graph {
	nodes: string[];
	adjacencyList: Map<string, Edge[]>;

	constructor() {
		this.nodes = [];
		this.adjacencyList = new Map<string, Edge[]>();
	}

	addNode(node: string) {
		this.nodes.push(node);
		this.adjacencyList.set(node, []);
	}

	addEdge(nodeFrom: string, nodeTo: string, weight: number) {
		this.adjacencyList.get(nodeFrom)?.push({node: nodeTo, weight: weight});
		this.adjacencyList.get(nodeTo)?.push({node: nodeFrom, weight: weight});
	}
}

class PriorityQueue {
	collection: Edge[];

	constructor() {
		this.collection = [];
	}

	enqueue(element: Edge) {
		if (this.isEmpty()){ 
			this.collection.push(element);
		} else {
			let added = false;
			for (let i = 1; i <= this.collection.length; i++){
				if (element.weight < this.collection[i-1].weight) {
					this.collection.splice(i-1, 0, element);
					added = true;
					break;
				}
			}

			if (!added) {
				this.collection.push(element);
			}
		}
	}

	dequeue() {
		return this.collection.shift();
	}

	isEmpty() : boolean {
		return this.collection.length == 0;
	}
}

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const peakDays = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

function getSchedule(datetime: string) {
    let schedule = new Date(datetime)
    let day = weekdays[schedule.getDay()];
    
    // Peak hours (6am-9am and 6pm-9pm on Mon-Fri)
    if (peakDays.includes(day)) {
        if ((schedule.getHours() >= 6 && schedule.getHours() <= 9) || 
        (schedule.getHours() >= 18 && schedule.getHours() <= 21)) {
            return 'peak'
        }	
    }
    // Night hours (10pm-6am on Mon-Sun)
    else if (weekdays.includes(day)) {
        if ((schedule.getHours() >= 22) || (schedule.getHours() >= 0 && schedule.getHours() < 6)) {
            return 'night'
        }	
    }
    else {
        return 'normal'
    }

}

// Peak hours (6am-9am and 6pm-9pm on Mon-Fri)
// NS and NE lines take 12 minutes per station
// All other train lines take 10 minutes
function getPeakInterval(stationCode: string, isLineTransfer: boolean) {
    if (!isLineTransfer) {
        if (['NS', 'NE'].includes(stationCode)) {
            return 12
        } 
        return 10
    }
    return 15
}

// Night hours (10pm-6am on Mon-Sun)
// DT, CG and CE lines do not operate
// TE line takes 8 minutes per stop 
// All trains take 10 minutes per stop
// Every train line change adds 10 minutes of waiting time to the journey
function getNightInterval(stationCode: string, isLineTransfer: boolean) {
    if (!isLineTransfer) {
        if (['CE','CG','DT'].includes(stationCode)) {
            return -1
        }
        if (stationCode === 'TE') {
            return 8
        } 
    }
    return 10
}

// Non-Peak hours (all other times)
// DT and TE lines take 8 minutes per stop
// All trains take 10 minutes per stop
// Every train line change adds 10 minutes of waiting time to the journey
function getNormalInterval(stationCode: string, isLineTransfer: boolean) {
    if (!isLineTransfer) {
        if (['DT', 'NT'].includes(stationCode)) {
            return 8
        }
    }
    return 10
}

function parseStationCode (stationCode: string) {
    let strippedCode = stationCode.replace(/[0-9]/g, '');
    return strippedCode
}

function getStationMap(stations: Stations, schedule: string) {
    let map = new Graph();

    // Populate graph with stations
    stations.forEach((s) =>  map.addNode(s.Code))

    // Populate graph with stations and interval
    for (let i=0; i <stations.length; i++) {
        // If last station
        if (i == stations.length-1) {
            break;
        }

        let schedule = getSchedule('2019-01-31T16:00')
        let currentStation = stations[i]
        let currentStationCode = parseStationCode(currentStation.Code)
        let nextStation = stations[i+1]
        let nextStationCode = parseStationCode(nextStation.Code)
        let isLineTransfer = (currentStationCode === nextStationCode)
        let weight

        // Map the weights of each node based on given schedule of MRT line
        switch(schedule) {
            case 'peak' : 
                weight = getPeakInterval(currentStationCode, isLineTransfer)
                break
            case 'night': 
                weight = getNightInterval(currentStationCode, isLineTransfer)
                break
            default :
                weight = getNormalInterval(currentStationCode, isLineTransfer)
                break
        }
        map.addEdge(stations[i].Code, stations[i+1].Code, weight)
    }
    return map;
}

export default function findShortestPath(nodeFrom: string, nodeTo: string, schedule: string, stations: Stations) {
   
    var map: Graph = getStationMap(stations, schedule)

    let weights: Map<string, number> = new Map<string, number>();
    let backtrace: Map<string, string> = new Map<string, string>();

    let pq = new PriorityQueue();

    weights.set(nodeFrom, 0);

    map.nodes.forEach(node => {
        if (node != nodeFrom)
            weights.set(node, Infinity);
    });

    pq.enqueue({node: nodeFrom, weight: 0});

    while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
        let currentNode = shortestStep?.node ?? '';
        map.adjacencyList.get(currentNode)?.forEach(adjacent => {
            const currentWeight = weights.get(currentNode) ?? 0;
            
            let totalweight = currentWeight + adjacent.weight;
            if (totalweight < (weights.get(adjacent.node) ?? 0)) {
                weights.set(adjacent.node, totalweight);
                backtrace.set(adjacent.node, currentNode);
                pq.enqueue({node: adjacent.node, weight: totalweight});
            }

        });
    }
    
    let path = [nodeTo];
    let lastStep = nodeTo;
    while(lastStep !== nodeFrom) {
        path.unshift(backtrace.get(lastStep) ?? '');
        lastStep = backtrace.get(lastStep) ?? '';
    }

    // Get stations included in the result path
    let finalStations = stations.filter(s => {
        return path.includes(s.Code)
    })

    return getResult(finalStations, weights)
}

function getResult(routes: Stations, weights: any) {
   let result = []
   for (let i=0; i<routes.length; i++) {
       // If last station
       if (i == routes.length-1) {
         break;
       } else {
           let currentStation = routes[i]
           let currentStationCode = parseStationCode(currentStation.Code)
           let nextStation = routes[i+1]
           let nextStationCode = parseStationCode(nextStation.Code)
           
            // If first station, add instruction
            if (i == 0) {
                result.push(`Take ${currentStationCode} line from ${currentStation.Name} to ${nextStation.Name}`)
            } else {
                // If there's a line change, add instruction containing both lines
                if (currentStationCode === nextStationCode) {
                    result.push(`Change from ${currentStationCode} line to ${nextStationCode} line`)
                } else {
                    result.push(`Take ${currentStationCode} line from ${currentStation.Name} to ${nextStation.Name}`)
                }
            } 
        }
    }
   return routes
}
