import BaseCell from "./BaseCell"
export default function IdCell({
    guess,
    correctGuess,
    format
}) {

    let isCorrect=guess == correctGuess

    let text=<div>
    <img height={"80%"} src="avatar.png"/>
    <span style={{display:"inline-flex", justifyContent:"center"}}>
    {guess}
    </span>


</div>
    return <BaseCell text={text}  customClassName={"id"} />
}