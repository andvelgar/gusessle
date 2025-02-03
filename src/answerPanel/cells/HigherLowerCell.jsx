import BaseCell from "./BaseCell"
export default function HigherLowerCell({
    guess,
    correctGuess,
    format
}) {

    let isCorrect = guess == correctGuess

    let text = guess
    if (!isCorrect) {
        if (guess < correctGuess) text += " /\\"
        else text += " \\/"
    }

    return <BaseCell text={text} isCorrect={isCorrect} isWarning={!isCorrect} />
}