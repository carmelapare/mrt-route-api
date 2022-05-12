export type Edge = {
	node: Station
	weight: number
}

export type Station =  {
    code: string
    name: string
    openingDate: string
    interval?: number 
}

export type ShortestPath =  {
    instructions : string[],
    route : string[],
    steps: number,
    stationsTraveled : number,
    travelTime: number
}

export type Stations = Station[]