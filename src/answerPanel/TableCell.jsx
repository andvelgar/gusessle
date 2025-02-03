export default function TableCell({
    guess,
    correctGuess,
    type
}){
    let isCorrect=guess==correctGuess
    return <td>
        <div className={"cell "+(isCorrect?"correct":"wrong")}>
            <span>{guess}</span>
        </div>
    </td>
}