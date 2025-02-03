import BaseCell from "./BaseCell"
export default function ListIconCell({
    guess,
    correctGuess,
    format
}) {

    let isCorrect = guess == correctGuess
    console.log(guess,correctGuess)
    return <BaseCell text={<img height={"100%"} src={format.list[guess]}/>} isCorrect={isCorrect} isWrong={!isCorrect} />
}