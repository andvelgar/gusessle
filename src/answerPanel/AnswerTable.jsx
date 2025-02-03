import React from "react"
import { useState } from "react";
import { guess, guesses, format, getGuessList } from "../api/playersApi";

import { Autocomplete, MenuItem, Select, TextField } from '@mui/material';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function AnswerTable({
    league
}) {

    const [guessList, setGuessList] = useState([])
    const [suggestions, setSuggestions] = useState([])



    function resetInput() {
    }
    function onGuess(id) {
        let guessObj = guess(id)
        resetInput()
        setGuessList([...guessList, guessObj])
    }


    return <div className="shadow-card">
        <Select defaultValue={''} onChange={(e)=>onGuess(e.target.value)}>
            {league.options.map(g=>{
                return <MenuItem key={g.id} value={g.id}>{g.name}</MenuItem>
            })}
        </Select>
        <table className="guess-table">
            <TableHeader format={format()} />
            <TableBody guesses={guessList} correctGuess={guess(2)} format={format()} />
        </table>
    </div>
}