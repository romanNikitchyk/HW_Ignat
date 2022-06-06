import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";
moment.locale("ru")

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
           setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
       setShow(!show)
    }
    const onMouseLeave = () => {
        setShow(!show)
    }
    const putZeroFirst = (num:number)=>num < 10 ? "0"+ num : num

    const stringTime =  <>
        <span>{putZeroFirst(date.getHours())}</span>
        :
        <span>{putZeroFirst(date.getMinutes())}</span>
        :
        <span>{putZeroFirst(date.getSeconds())}</span>
    </>


    // const stringTime = moment().format('LTS') // fix with date
    const stringDate = moment().format("LL") // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>

                   {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
