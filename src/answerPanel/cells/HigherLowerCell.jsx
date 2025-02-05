import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BaseCell from "./BaseCell"
import { faDAndD } from "@fortawesome/free-brands-svg-icons"
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons"
export default function HigherLowerCell({
    guess,
    correctGuess,
    format
}) {

    let isCorrect = guess == correctGuess

    let text = <>
        {guess}
        {!isCorrect&&<FontAwesomeIcon icon={guess>correctGuess?faAnglesDown:faAnglesUp} />}
    </>

    
    return <BaseCell text={text} isCorrect={isCorrect} isWarning={!isCorrect} />
}