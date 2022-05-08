export type Edge = {
	node: string
	weight: number
}

export type Station =  {
    Code: string
    Name: string
    OpeningDate: string
    Interval?: number 
}

export type Stations = Station[]