export default function BaseCell({
    text,
    isCorrect,
    isWrong,
    isWarning,
    customClassName
}){
    let className="cell "
    if(customClassName)className+=customClassName+" "
    if(isCorrect) className+="correct"
    else if(isWrong) className+="wrong"
    else if(isWarning) className+="warning"

    return <td>
        <div className={className}>
            {text}

        </div>
    </td>
}