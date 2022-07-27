import React, {useCallback, useEffect, useState} from 'react';
import {RequestsAPI} from "./RequestsAPI";

function HW13() {
    let [inputCheck, setInputCheck] = useState<boolean>(false)
    const onChangeInputCheck = () => {
        setInputCheck(!inputCheck)
    }
let [res, setRes] = useState<string>("")
    const sendObject = () => {
        RequestsAPI.create({success: inputCheck})
            .then((response) => {
                console.log("response", response)
                setRes(response.data.errorText)
            })
            .catch((error) => {
                console.log('catch', error)
                setRes(error.response.data.errorText)
            })

    }
    return (
        <div>
            <hr/>
            homeworks 13
            <div><span>response: {res}</span></div>
            <div><input className={"checkbox"} type="checkbox" checked={inputCheck} onChange={onChangeInputCheck}/>
            </div>
            <div>
                <button onClick={sendObject}>POST</button>
            </div>

            <hr/>

        </div>
    );
};

export default HW13;