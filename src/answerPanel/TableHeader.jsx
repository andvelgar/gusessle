
import React from "react"
export default function TableHeader({
    format
}){
    return <thead>
        <tr>
            {format.map(f=><th>{f.header.toUpperCase()}</th>)}
        </tr>
    </thead>
}