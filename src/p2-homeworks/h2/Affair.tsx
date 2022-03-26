import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {

    return (
        <div>{props.affair.name}
            // show some text

            <button onClick={() => props.deleteAffairCallback(props.affair.id)}>X</button>
        </div>
    )
}

export default Affair
