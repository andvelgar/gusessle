import { matchSorter } from "match-sorter";

const parse=require('autosuggest-highlight/parse');

export const AttributeTypes = {
    "HigherLower": "HigherLower",
    "List": "List",
    "ListIcon": "ListIcon",
    "Id":"Id"
};
let league = {
    options: [
        {
            "id": 1,
            "name": "Martinez",
            "number": 7,
            "team": "txitxiki",
            "age": 34
        },
        {
            "id": 2,
            "name": "Smith",
            "number": 10,
            "team": "cabj",
            "age": 28
        },
        {
            "id": 3,
            "name": "Kowalski",
            "number": 15,
            "team": "txitxiki",
            "age": 22
        },
        {
            "id": 4,
            "name": "Garcia",
            "number": 9,
            "team": "cabj",
            "age": 31
        },
        {
            "id": 5,
            "name": "Nguyen",
            "number": 4,
            "team": "txitxiki",
            "age": 29
        },
        {
            "id": 6,
            "name": "Brown",
            "number": 12,
            "team": "cabj",
            "age": 26
        },
        {
            "id": 7,
            "name": "Lee",
            "number": 18,
            "team": "txitxiki",
            "age": 33
        },
        {
            "id": 8,
            "name": "Taylor",
            "number": 5,
            "team": "cabj",
            "age": 27
        },
        {
            "id": 9,
            "name": "Anderson",
            "number": 21,
            "team": "txitxiki",
            "age": 30
        },
        {
            "id": 10,
            "name": "Wilson",
            "number": 14,
            "team": "cabj",
            "age": 24
        },
        {
            "id": 11,
            "name": "Davis",
            "number": 6,
            "team": "txitxiki",
            "age": 32
        },
        {
            "id": 12,
            "name": "Moore",
            "number": 19,
            "team": "cabj",
            "age": 28
        },
        {
            "id": 13,
            "name": "Jackson",
            "number": 8,
            "team": "txitxiki",
            "age": 29
        },
        {
            "id": 14,
            "name": "White",
            "number": 22,
            "team": "cabj",
            "age": 26
        },
        {
            "id": 15,
            "name": "Harris",
            "number": 3,
            "team": "txitxiki",
            "age": 31
        },
        {
            "id": 16,
            "name": "Clark",
            "number": 11,
            "team": "cabj",
            "age": 27
        },
        {
            "id": 17,
            "name": "Lewis",
            "number": 17,
            "team": "txitxiki",
            "age": 30
        },
        {
            "id": 18,
            "name": "Robinson",
            "number": 20,
            "team": "cabj",
            "age": 25
        },
        {
            "id": 19,
            "name": "Walker",
            "number": 13,
            "team": "txitxiki",
            "age": 29
        },
        {
            "id": 20,
            "name": "Hall",
            "number": 16,
            "team": "cabj",
            "age": 28
        },
        {
            "id": 21,
            "name": "Allen",
            "number": 2,
            "team": "txitxiki",
            "age": 33
        },
        {
            "id": 22,
            "name": "Young",
            "number": 23,
            "team": "cabj",
            "age": 26
        },
        {
            "id": 23,
            "name": "King",
            "number": 24,
            "team": "txitxiki",
            "age": 27
        },
        {
            "id": 24,
            "name": "Wright",
            "number": 25,
            "team": "cabj",
            "age": 29
        },
        {
            "id": 25,
            "name": "Scott",
            "number": 26,
            "team": "txitxiki",
            "age": 30
        },
        {
            "id": 26,
            "name": "Green",
            "number": 27,
            "team": "cabj",
            "age": 31
        },
        {
            "id": 27,
            "name": "Baker",
            "number": 28,
            "team": "txitxiki",
            "age": 28
        },
        {
            "id": 28,
            "name": "Adams",
            "number": 29,
            "team": "cabj",
            "age": 26
        },
        {
            "id": 29,
            "name": "Nelson",
            "number": 30,
            "team": "txitxiki",
            "age": 29
        },
        {
            "id": 30,
            "name": "Carter",
            "number": 31,
            "team": "cabj",
            "age": 27
        },
        {
            "id": 31,
            "name": "Mitchell",
            "number": 32,
            "team": "txitxiki",
            "age": 30
        },
        {
            "id": 32,
            "name": "Perez",
            "number": 33,
            "team": "cabj",
            "age": 28
        },
        {
            "id": 33,
            "name": "Roberts",
            "number": 34,
            "team": "txitxiki",
            "age": 29
        },
        {
            "id": 34,
            "name": "Turner",
            "number": 35,
            "team": "cabj",
            "age": 26
        },
        {
            "id": 35,
            "name": "Phillips",
            "number": 36,
            "team": "txitxiki",
            "age": 31
        },
        {
            "id": 36,
            "name": "Campbell",
            "number": 37,
            "team": "cabj",
            "age": 27
        },
        {
            "id": 37,
            "name": "Parker",
            "number": 38,
            "team": "txitxiki",
            "age": 30
        },
        {
            "id": 38,
            "name": "Evans",
            "number": 39,
            "team": "cabj",
            "age": 28
        },
        {
            "id": 39,
            "name": "Edwards",
            "number": 40,
            "team": "txitxiki",
            "age": 29
        },
        {
            "id": 40,
            "name": "Collins",
            "number": 41,
            "team": "cabj",
            "age": 26
        },
        {
            "id": 41,
            "name": "Stewart",
            "number": 42,
            "team": "txitxiki",
            "age": 31
        },
        {
            "id": 42,
            "name": "Sanchez",
            "number": 43,
            "team": "cabj",
            "age": 27
        },
        {
            "id": 43,
            "name": "Morris",
            "number": 44,
            "team": "txitxiki",
            "age": 30
        },
        {
            "id": 44,
            "name": "Rogers",
            "number": 45,
            "team": "cabj",
            "age": 28
        },
        {
            "id": 45,
            "name": "Reed",
            "number": 46,
            "team": "txitxiki",
            "age": 29
        },
        {
            "id": 46,
            "name": "Cook",
            "number": 47,
            "team": "cabj",
            "age": 26
        },
        {
            "id": 47,
            "name": "Morgan",
            "number": 48,
            "team": "txitxiki",
            "age": 31
        },
        {
            "id": 48,
            "name": "Bell",
            "number": 49,
            "team": "cabj",
            "age": 27
        },
        {
            "id": 49,
            "name": "Murphy",
            "number": 50,
            "team": "txitxiki",
            "age": 30
        },
        {
            "id": 50,
            "name": "Bailey",
            "number": 51,
            "team": "cabj",
            "age": 28
        }
    ],
    format: [
        {
            key: "name",
            header: "JOKALARIA",
            type: AttributeTypes.Id
        },
        {
            key: "number",
            header: "ZENBAKIA",
            type: AttributeTypes.HigherLower
        },
        {
            key: "team",
            header: "TALDEA",
            type: AttributeTypes.ListIcon,
            list: {
                txitxiki: "/txitxiki.png",
                cabj:"cabj.png"
            }
        },
        {
            key: "age",
            header: "ADINA",
            type: AttributeTypes.HigherLower
        },


    ]
}


export function format() {
    return league.format
}

export function guess(id) {
    return league.options.find(g => g.id == id)
}
export function getLeague(){
    return league
}
export function guesses(name) {
    return matchSorter(league.options,name,{keys:["name"]})
}