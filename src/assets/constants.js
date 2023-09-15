export const MinerStatus = {
    0: "Idle",
    1: "Traveling",
    2: "Mining",
    3: "Transfering"
};

export const MinerColumns = [
    {
        field: "_id", isRowKey: true, hidden: true
    },
    {
        field: "name", label: "Name", width: 80,
        cellStyle: (data) => {
            return {color: 'white', textDecoration: 'underline'}
        }
    },
    {
        field: "planetName", label: "Planet", width: 100,
    },
    {
        field: "displayCapacity", label: "CarryCapacity", width: 100,
        cellStyle: (data) => {
            if (data.carryCapacity === 200)
                return {color: '#00CF67'}
        }
    },
    {
        field: "travelSpeed", label: "TravelSpeed", width: 80,
    },
    {
        field: "miningSpeed", label: "MiningSpeed", width: 80,
    },
    {
        field: "displayPosition", label: "Position", width: 80,
    },
    {
        field: "displayStatus", label: "Status", width: 80,
    }
];

export const AsteroidColumns = [
    {
        field: "_id", isRowKey: true, hidden: true
    },
    {
        field: "name", label: "Name", width: 80
    },
    {
        field: "displayMinerals", label: "Minerals", width: 80,
        cellStyle: (data) => {
            if (data.minerals === 0)
                return {color: '#EB5757'}
        }
    },
    {
        field: "displayCurrenMiner", label: "CurrentMiner", width: 80
    },
    {
        field: "displayPosition", label: "Position", width: 80
    }
];

export const PlanetsColumns = [
    {
        field: "_id", isRowKey: true, hidden: true
    },
    {
        field: "name", label: "Name"
    },
    {
        field: "miners", label: "Miners"
    },
    {
        field: "displayMinerals", label: "Minerals",
        cellStyle: (data) => {
            if (data.minerals > 1000)
                return {color: '#00CF67'}
        }
    },
    {
        isAction: true
    }
];
