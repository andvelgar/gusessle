import { AttributeTypes } from "../../api/playersApi";
import HigherLowerCell from "./HigherLowerCell";
import ListCell from "./ListCell";
import BaseCell from "./BaseCell";
import ListIconCell from "./ListIconCell";
import IdCell from "./IdCell";

export default function EntryCell({
    guess,
    correctGuess,
    cellFormat
}){

    if(cellFormat.type==AttributeTypes.HigherLower) return <HigherLowerCell guess={guess} correctGuess={correctGuess} format={cellFormat}/>
    if(cellFormat.type==AttributeTypes.List) return <ListCell  guess={guess} correctGuess={correctGuess} format={cellFormat} />
    if(cellFormat.type==AttributeTypes.ListIcon) return <ListIconCell  guess={guess} correctGuess={correctGuess} format={cellFormat} />
    if(cellFormat.type==AttributeTypes.Id) return <IdCell guess={guess} correctGuess={correctGuess} format={cellFormat} />

    return <BaseCell/>
}