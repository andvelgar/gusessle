import BaseCell from "./BaseCell"
export default function ListCell({
    guess,
    correctGuess,
    format
}) {

    let isCorrect = guess == correctGuess

    return <BaseCell text={guess} isCorrect={isCorrect} isWrong={!isCorrect} />
}