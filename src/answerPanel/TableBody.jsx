import React from "react"
import TableRow from "./TableRow"
export default function TableBody({
    format,
    guesses,
    correctGuess
}){
    return <tbody>
            {guesses.map(g=><TableRow guess={g} correctGuess={correctGuess} format={format}/>)}
    </tbody>
}