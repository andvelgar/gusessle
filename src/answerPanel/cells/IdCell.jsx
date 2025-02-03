import BaseCell from "./BaseCell"
export default function IdCell({
    guess,
    correctGuess,
    format
}) {

    let isCorrect=guess == correctGuess

    let text=<div>
    <img height={"80%"} src="avatar.png"/>
    {guess}

</div>
    return <BaseCell text={text} isCorrect={isCorrect} isWrong={!isCorrect} customClassName={"id"} />
}