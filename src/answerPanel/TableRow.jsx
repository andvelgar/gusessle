import React from "react"
import EntryCell from "./cells/EntryCell"
export default function TableRow({
    format,
    guess,
    correctGuess,
}){
    return <tr>
        {format.map(f=><EntryCell guess={guess[f.key]} correctGuess={correctGuess[f.key]} cellFormat={f}/>)}
    </tr>
}