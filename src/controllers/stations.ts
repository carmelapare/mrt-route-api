import stations from "../models/stations";

type Edge = {
	node: string;
	weight: number;
}

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
		//let oldNodeFrom = this.adjacencyList.get(nodeFrom);
		
		// oldNodeFrom?.push({
		// 	node: nodeFrom,
		// 	weight: weight
		// });

		// this.adjacencyList.set(nodeFrom, oldNodeFrom ? oldNodeFrom : []);


		//let oldNodeTo = this.adjacencyList.get(nodeTo);
		this.adjacencyList.get(nodeFrom)?.push({node: nodeFrom, weight: weight});
		this.adjacencyList.get(nodeTo)?.push({node: nodeTo, weight: weight});
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
				if (element.weight < this.collection[i-1].weight) { //element[1] would be weight of edge
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

function stationsController() {
    function getAll(res: any) {
		res.send(stations);
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

	function getStationMap() {
		let map = new Graph();

		for (let i=0; i <stations.length; i++) {
			// If last given station
			if (i == stations.length-1) {
				break;
			}
			let schedule = getSchedule('2019-01-31T16:00')
			let currentStation = stations[i]
			let nextStation = stations[i+1]
			let currentStationCode = parseStationCode(currentStation.Code)
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


		// map.addNode('NS1');
		// map.addNode('NS2');
		// map.addNode('NS3');
		// map.addNode('NS4');
		// map.addNode('NS5');
		// map.addNode('NS6');
		// map.addNode('NS7');
		// map.addNode('NS8');
		// map.addNode('CC1');
		// map.addNode('CC2');

		// map.addEdge('NS1', 'NS2', 8);
		// map.addEdge('NS2', 'NS3', 8);
		// map.addEdge('NS3', 'NS4', 8);
		// map.addEdge('NS4', 'NS5', 8);
		// map.addEdge('NS5', 'CC1', 10);
		// map.addEdge('NS5', 'NS6', 8);
		// map.addEdge('NS7', 'NS8', 8);
		// map.addEdge('CC1', 'CC2', 8);
		// map.addEdge('CC2', 'NS8', 10);

		return map;
	}

	function findShortestPath(req: any, res: any) {
		const { 
			fromStation: nodeFrom, 
			toStation : nodeTo 
		} = req.params;

		var map: Graph = getStationMap();

		let weights: Map<string, number> = new Map<string, number>();
		let recordedPath: Map<string, string> = new Map<string, string>();

		let pq = new PriorityQueue();

		weights.set(nodeFrom, 0);

		map.nodes.forEach(node => {
			if (node != nodeFrom)
				weights.set(node, Infinity);
		});

		pq.enqueue({node: nodeFrom, weight: 0});

		// console.log(pq);
		debugger;
		while (!pq.isEmpty()) {
			let shortestStep = pq.dequeue();
			let currentNode = shortestStep?.node ?? '';
			console.log('currentNode' + currentNode);
			map.adjacencyList.get(currentNode)?.forEach(adjacent => {
				console.log(adjacent);
				const currentWeight = weights.get(currentNode) ?? 0;
				let totalweight = currentWeight + adjacent.weight;
				if (totalweight < (weights.get(adjacent.node) ?? 0)) {
					weights.set(adjacent.node, totalweight);
					recordedPath.set(currentNode, adjacent.node);
					pq.enqueue({node: adjacent.node, weight: totalweight});
				}

			});

			// let shortestStep = pq.dequeue();
			// let currentNode = shortestStep[0];
			// this.adjacencyList[currentNode].forEach(neighbor => {
			//   let time = times[currentNode] + neighbor.weight;
			//   if (time < times[neighbor.node]) {
			// 	times[neighbor.node] = time;
			// 	backtrace[neighbor.node] = currentNode;
			// 	pq.enqueue([neighbor.node, time]);
			//   }
			// });
		}

		//console.log(recordedPath);

		// let path = [nodeFrom];
		// let lastStep = nodeFrom;
		// while(lastStep !== nodeTo) {
		// 	lastStep = recordedPath.get(lastStep) ?? '';
		// 	path.push(lastStep);
		// }

		// return `Path is ${path} and time is ${weights.get(nodeTo)}`
	}

    return { findShortestPath, getAll };
}

export default stationsController;

