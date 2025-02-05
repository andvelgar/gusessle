import React from "react";

import { Autocomplete, TextField } from '@mui/material';
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function AnswerTable({
    league,
    correctGuess,
    guessList,
    onGuess,
    showInput
}) {

    
    

    

    return <div className="answer-table">
        <table className="guess-table">
            <TableHeader format={league?.format} />
            <TableBody guesses={guessList} correctGuess={correctGuess} format={league?.format} />
        </table>
        {showInput&&<div className="input">
        <Autocomplete
            disablePortal
            options={league.options}
            isOptionEqualToValue={(option,value)=>option?.id===value?.id}
            getOptionLabel={(option)=>option.name+", "+option.number+", "+option.age+" "}
            blurOnSelect
            clearOnBlur
            onChange={(e,newValue)=>onGuess(newValue?.id)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Player" />}
/>
            
        </div>}

    </div>
}