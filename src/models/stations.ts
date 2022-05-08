import internal from "stream";

export type Stations =  {
    Code: string
    Name: string
    OpeningDate: string
    Interval?: number 
}

const stations: Stations[] = [
    {
        "Code": "NS1",
        "Name": "Jurong East",
        "OpeningDate": "10-Mar-90",
        "Interval": undefined
    },
    {
        "Code": "NS2",
        "Name": "Bukit Batok",
        "OpeningDate": "10-Mar-90",
        "Interval": undefined
    },
    {
        "Code": "NS3",
        "Name": "Bukit Gombak",
        "OpeningDate": "10-Mar-90",
        "Interval": undefined
    },
    {
        "Code": "NS4",
        "Name": "Choa Chu Kang",
        "OpeningDate": "10-Mar-90",
        "Interval": undefined
    },
    {
        "Code": "NS5",
        "Name": "Yew Tee",
        "OpeningDate": "10-Feb-96",
        "Interval": undefined
    },
    {
        "Code": "NS7",
        "Name": "Kranji",
        "OpeningDate": "10-Feb-96",
        "Interval": undefined
    },
    {
        "Code": "NS8",
        "Name": "Marsiling",
        "OpeningDate": "10-Feb-96",
        "Interval": undefined
    },
    {
        "Code": "NS9",
        "Name": "Woodlands",
        "OpeningDate": "10-Feb-96",
        "Interval": undefined
    },
    {
        "Code": "NS10",
        "Name": "Admiralty",
        "OpeningDate": "10-Feb-96",
        "Interval": undefined
    },
    {
        "Code": "NS11",
        "Name": "Sembawang",
        "OpeningDate": "10-Feb-96",
        "Interval": undefined
    },
    {
        "Code": "NS12",
        "Name": "Canberra",
        "OpeningDate": "Dec-19",
        "Interval": undefined
    },
    {
        "Code": "NS13",
        "Name": "Yishun",
        "OpeningDate": "20-Dec-88",
        "Interval": undefined
    },
    {
        "Code": "NS14",
        "Name": "Khatib",
        "OpeningDate": "20-Dec-88",
        "Interval": undefined
    },
    {
        "Code": "NS15",
        "Name": "Yio Chu Kang",
        "OpeningDate": "7-Nov-87",
        "Interval": undefined
    },
    {
        "Code": "NS16",
        "Name": "Ang Mo Kio",
        "OpeningDate": "7-Nov-87",
        "Interval": undefined
    },
    {
        "Code": "NS17",
        "Name": "Bishan",
        "OpeningDate": "7-Nov-87",
        "Interval": undefined
    },
    {
        "Code": "NS18",
        "Name": "Braddell",
        "OpeningDate": "7-Nov-87",
        "Interval": undefined
    },
    {
        "Code": "NS19",
        "Name": "Toa Payoh",
        "OpeningDate": "7-Nov-87",
        "Interval": undefined
    },
    {
        "Code": "NS20",
        "Name": "Novena",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "NS21",
        "Name": "Newton",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "NS22",
        "Name": "Orchard",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "NS23",
        "Name": "Somerset",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "NS24",
        "Name": "Dhoby Ghaut",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "NS25",
        "Name": "City Hall",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "NS26",
        "Name": "Raffles Place",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "NS27",
        "Name": "Marina Bay",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "NS28",
        "Name": "Marina South Pier",
        "OpeningDate": "23-Nov-14",
        "Interval": undefined
    },
    {
        "Code": "EW1",
        "Name": "Pasir Ris",
        "OpeningDate": "16-Dec-89",
        "Interval": undefined
    },
    {
        "Code": "EW2",
        "Name": "Tampines",
        "OpeningDate": "16-Dec-89",
        "Interval": undefined
    },
    {
        "Code": "EW3",
        "Name": "Simei",
        "OpeningDate": "16-Dec-89",
        "Interval": undefined
    },
    {
        "Code": "EW4",
        "Name": "Tanah Merah",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW5",
        "Name": "Bedok",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW6",
        "Name": "Kembangan",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW7",
        "Name": "Eunos",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW8",
        "Name": "Paya Lebar",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW9",
        "Name": "Aljunied",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW10",
        "Name": "Kallang",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW11",
        "Name": "Lavender",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW12",
        "Name": "Bugis",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "EW13",
        "Name": "City Hall",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "EW14",
        "Name": "Raffles Place",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "EW15",
        "Name": "Tanjong Pagar",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "EW16",
        "Name": "Outram Park",
        "OpeningDate": "12-Dec-87",
        "Interval": undefined
    },
    {
        "Code": "EW17",
        "Name": "Tiong Bahru",
        "OpeningDate": "12-Mar-88",
        "Interval": undefined
    },
    {
        "Code": "EW18",
        "Name": "Redhill",
        "OpeningDate": "12-Mar-88",
        "Interval": undefined
    },
    {
        "Code": "EW19",
        "Name": "Queenstown",
        "OpeningDate": "12-Mar-88",
        "Interval": undefined
    },
    {
        "Code": "EW20",
        "Name": "Commonwealth",
        "OpeningDate": "12-Mar-88",
        "Interval": undefined
    },
    {
        "Code": "EW21",
        "Name": "Buona Vista",
        "OpeningDate": "12-Mar-88",
        "Interval": undefined
    },
    {
        "Code": "EW22",
        "Name": "Dover",
        "OpeningDate": "18-Oct-01",
        "Interval": undefined
    },
    {
        "Code": "EW23",
        "Name": "Clementi",
        "OpeningDate": "12-Mar-88",
        "Interval": undefined
    },
    {
        "Code": "EW24",
        "Name": "Jurong East",
        "OpeningDate": "5-Nov-88",
        "Interval": undefined
    },
    {
        "Code": "EW25",
        "Name": "Chinese Garden",
        "OpeningDate": "5-Nov-88",
        "Interval": undefined
    },
    {
        "Code": "EW26",
        "Name": "Lakeside",
        "OpeningDate": "5-Nov-88",
        "Interval": undefined
    },
    {
        "Code": "EW27",
        "Name": "Boon Lay",
        "OpeningDate": "6-Jul-90",
        "Interval": undefined
    },
    {
        "Code": "EW28",
        "Name": "Pioneer",
        "OpeningDate": "28-Feb-09",
        "Interval": undefined
    },
    {
        "Code": "EW29",
        "Name": "Joo Koon",
        "OpeningDate": "28-Feb-09",
        "Interval": undefined
    },
    {
        "Code": "EW30",
        "Name": "Gul Circle",
        "OpeningDate": "18-Jun-17",
        "Interval": undefined
    },
    {
        "Code": "EW31",
        "Name": "Tuas Crescent",
        "OpeningDate": "18-Jun-17",
        "Interval": undefined
    },
    {
        "Code": "EW32",
        "Name": "Tuas West Road",
        "OpeningDate": "18-Jun-17",
        "Interval": undefined
    },
    {
        "Code": "EW33",
        "Name": "Tuas Link",
        "OpeningDate": "18-Jun-17",
        "Interval": undefined
    },
    {
        "Code": "CG0",
        "Name": "Tanah Merah",
        "OpeningDate": "4-Nov-89",
        "Interval": undefined
    },
    {
        "Code": "CG1",
        "Name": "Expo",
        "OpeningDate": "10-Jan-01",
        "Interval": undefined
    },
    {
        "Code": "CG2",
        "Name": "Changi Airport",
        "OpeningDate": "8-Feb-02",
        "Interval": undefined
    },
    {
        "Code": "NE1",
        "Name": "HarbourFront",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE3",
        "Name": "Outram Park",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE4",
        "Name": "Chinatown",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE5",
        "Name": "Clarke Quay",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE6",
        "Name": "Dhoby Ghaut",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE7",
        "Name": "Little India",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE8",
        "Name": "Farrer Park",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE9",
        "Name": "Boon Keng",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE10",
        "Name": "Potong Pasir",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE11",
        "Name": "Woodleigh",
        "OpeningDate": "20-Jun-11",
        "Interval": undefined
    },
    {
        "Code": "NE12",
        "Name": "Serangoon",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE13",
        "Name": "Kovan",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE14",
        "Name": "Hougang",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE15",
        "Name": "Buangkok",
        "OpeningDate": "15-Jan-06"
    },
    {
        "Code": "NE16",
        "Name": "Sengkang",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "NE17",
        "Name": "Punggol",
        "OpeningDate": "20-Jun-03",
        "Interval": undefined
    },
    {
        "Code": "CC1",
        "Name": "Dhoby Ghaut",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC2",
        "Name": "Bras Basah",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC3",
        "Name": "Esplanade",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC4",
        "Name": "Promenade",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC5",
        "Name": "Nicoll Highway",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC6",
        "Name": "Stadium",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC7",
        "Name": "Mountbatten",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC8",
        "Name": "Dakota",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC9",
        "Name": "Paya Lebar",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC10",
        "Name": "MacPherson",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC11",
        "Name": "Tai Seng",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CC12",
        "Name": "Bartley",
        "OpeningDate": "28-May-09",
        "Interval": undefined
    },
    {
        "Code": "CC13",
        "Name": "Serangoon",
        "OpeningDate": "28-May-09",
        "Interval": undefined
    },
    {
        "Code": "CC14",
        "Name": "Lorong Chuan",
        "OpeningDate": "28-May-09",
        "Interval": undefined
    },
    {
        "Code": "CC15",
        "Name": "Bishan",
        "OpeningDate": "28-May-09",
        "Interval": undefined
    },
    {
        "Code": "CC16",
        "Name": "Marymount",
        "OpeningDate": "28-May-09",
        "Interval": undefined
    },
    {
        "Code": "CC17",
        "Name": "Caldecott",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC19",
        "Name": "Botanic Gardens",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC20",
        "Name": "Farrer Road",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC21",
        "Name": "Holland Village",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC22",
        "Name": "Buona Vista",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC23",
        "Name": "one-north",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC24",
        "Name": "Kent Ridge",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC25",
        "Name": "Haw Par Villa",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC26",
        "Name": "Pasir Panjang",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC27",
        "Name": "Labrador Park",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC28",
        "Name": "Telok Blangah",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CC29",
        "Name": "HarbourFront",
        "OpeningDate": "8-Oct-11",
        "Interval": undefined
    },
    {
        "Code": "CE0",
        "Name": "Promenade",
        "OpeningDate": "17-Apr-10",
        "Interval": undefined
    },
    {
        "Code": "CE1",
        "Name": "Bayfront",
        "OpeningDate": "14-Jan-12",
        "Interval": undefined
    },
    {
        "Code": "CE2",
        "Name": "Marina Bay",
        "OpeningDate": "14-Jan-12",
        "Interval": undefined
    },
    {
        "Code": "DT1",
        "Name": "Bukit Panjang",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT2",
        "Name": "Cashew",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT3",
        "Name": "Hillview",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT5",
        "Name": "Beauty World",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT6",
        "Name": "King Albert Park",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT7",
        "Name": "Sixth Avenue",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT8",
        "Name": "Tan Kah Kee",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT9",
        "Name": "Botanic Gardens",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT10",
        "Name": "Stevens",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT11",
        "Name": "Newton",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT12",
        "Name": "Little India",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT13",
        "Name": "Rochor",
        "OpeningDate": "27-Dec-15",
        "Interval": undefined
    },
    {
        "Code": "DT14",
        "Name": "Bugis",
        "OpeningDate": "22-Dec-13",
        "Interval": undefined
    },
    {
        "Code": "DT15",
        "Name": "Promenade",
        "OpeningDate": "22-Dec-13",
        "Interval": undefined
    },
    {
        "Code": "DT16",
        "Name": "Bayfront",
        "OpeningDate": "22-Dec-13",
        "Interval": undefined
    },
    {
        "Code": "DT17",
        "Name": "Downtown",
        "OpeningDate": "22-Dec-13",
        "Interval": undefined
    },
    {
        "Code": "DT18",
        "Name": "Telok Ayer",
        "OpeningDate": "22-Dec-13",
        "Interval": undefined
    },
    {
        "Code": "DT19",
        "Name": "Chinatown",
        "OpeningDate": "22-Dec-13",
        "Interval": undefined
    },
    {
        "Code": "DT20",
        "Name": "Fort Canning",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT21",
        "Name": "Bencoolen",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT22",
        "Name": "Jalan Besar",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT23",
        "Name": "Bendemeer",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT24",
        "Name": "Geylang Bahru",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT25",
        "Name": "Mattar",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT26",
        "Name": "MacPherson",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT27",
        "Name": "Ubi",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT28",
        "Name": "Kaki Bukit",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT29",
        "Name": "Bedok North",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT30",
        "Name": "Bedok Reservoir",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT31",
        "Name": "Tampines West",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT32",
        "Name": "Tampines",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT33",
        "Name": "Tampines East",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT34",
        "Name": "Upper Changi",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "DT35",
        "Name": "Expo",
        "OpeningDate": "21-Oct-17",
        "Interval": undefined
    },
    {
        "Code": "TE1",
        "Name": "Woodlands North",
        "OpeningDate": "31-Dec-19",
        "Interval": undefined
    },
    {
        "Code": "TE2",
        "Name": "Woodlands",
        "OpeningDate": "31-Dec-19",
        "Interval": undefined
    },
    {
        "Code": "TE3",
        "Name": "Woodlands South",
        "OpeningDate": "31-Dec-19",
        "Interval": undefined
    },
    {
        "Code": "TE4",
        "Name": "Springleaf",
        "OpeningDate": "31-Dec-20",
        "Interval": undefined
    },
    {
        "Code": "TE5",
        "Name": "Lentor",
        "OpeningDate": "31-Dec-20",
        "Interval": undefined
    },
    {
        "Code": "TE6",
        "Name": "Mayflower",
        "OpeningDate": "31-Dec-20",
        "Interval": undefined
    },
    {
        "Code": "TE7",
        "Name": "Bright Hill",
        "OpeningDate": "31-Dec-20",
        "Interval": undefined
    },
    {
        "Code": "TE8",
        "Name": "Upper Thomson",
        "OpeningDate": "31-Dec-20",
        "Interval": undefined
    },
    {
        "Code": "TE9",
        "Name": "Caldecott",
        "OpeningDate": "31-Dec-20",
        "Interval": undefined
    },
    {
        "Code": "TE10",
        "Name": "Mount Pleasant",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE11",
        "Name": "Stevens",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE12",
        "Name": "Napier",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE13",
        "Name": "Orchard Boulevard",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE14",
        "Name": "Orchard",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE15",
        "Name": "Great World",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE16",
        "Name": "Havelock",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE17",
        "Name": "Outram Park",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE18",
        "Name": "Maxwell",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE19",
        "Name": "Shenton Way",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE20",
        "Name": "Marina Bay",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE21",
        "Name": "Marina South",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    },
    {
        "Code": "TE22",
        "Name": "Gardens by the Bay",
        "OpeningDate": "31-Dec-21",
        "Interval": undefined
    }
]

export default stations;