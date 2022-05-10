export type Edge = {
	node: Station
	weight: number
}

export type Station =  {
    Code: string
    Name: string
    OpeningDate: string
    Interval?: number 
}

export type Stations = Station[]