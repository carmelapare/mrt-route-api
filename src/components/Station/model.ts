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

export type Stations = Station[]