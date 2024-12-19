type Name = {
    first : string;
    last : string;
}

interface Address{
    flatNo : number;
    buildingName : string;
    roadName :  string;
}

type Person = {
    name : Name;
    address: Address;
}