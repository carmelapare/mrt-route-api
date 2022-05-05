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
		// map csv file to stations type, import type from model
		res.send(stations);
    }

	function getStationMap() {
		let map = new Graph();
		map.addNode('NS1');
		map.addNode('NS2');
		map.addNode('NS3');
		map.addNode('NS4');
		map.addNode('NS5');
		map.addNode('NS6');
		map.addNode('NS7');
		map.addNode('NS8');
		map.addNode('CC1');
		map.addNode('CC2');

		map.addEdge('NS1', 'NS2', 8);
		map.addEdge('NS2', 'NS3', 8);
		map.addEdge('NS3', 'NS4', 8);
		map.addEdge('NS4', 'NS5', 8);
		map.addEdge('NS5', 'CC1', 10);
		map.addEdge('NS5', 'NS6', 8);
		map.addEdge('NS7', 'NS8', 8);
		map.addEdge('CC1', 'CC2', 8);
		map.addEdge('CC2', 'NS8', 10);

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

