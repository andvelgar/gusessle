import { useState } from "react"
import AnswerTable from "./answerPanel/AnswerTable"
import { guess } from "./api/playersApi"
import { Dialog,DialogContent,DialogContentText,DialogTitle,DialogActions,Button } from "@mui/material"
export default function Game({
}) {
    function getRandomPlayer(){
        return guess(Math.round(Math.random() * league?.options?.length))
    }
    const [guessList, setGuessList] = useState([])
    const [correctGuess, setCorrectGuess] = useState(getRandomPlayer())
    const [leagues,setLeagues] = useState()


    function onGuess(id) {
        if (guessList.map(g => g.id).includes(id)) return
        setGuessList([...guessList, guess(id)])
    }

    

    function handleClose(){
        setGuessList([])
        setCorrectGuess(getRandomPlayer())

    }
    const win=guessList.map(g=>g.id).includes(correctGuess?.id)
    const gameOver=guessList.length>6||win
    
    return <>
              <Dialog
        open={gameOver}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {win?"Irabazi duzu!":"Ez duzu lortu"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Aukera zuzena: {correctGuess.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {win?"PRIMERAN":"BERRIRO JOKATU"}
          </Button>
        </DialogActions>
      </Dialog>

        <div className="shadow-card">
            <AnswerTable league={league} guessList={guessList} correctGuess={correctGuess} onGuess={onGuess} showInput={!gameOver}/>
        </div>

    </>
}