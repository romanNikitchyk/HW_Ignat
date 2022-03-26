import React from 'react';
import MessageModule from "./Message.module.css"

type MessageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: MessageDataPropsType,) {
    return (
        <div className={MessageModule.message}>

            <img className={MessageModule.avatar} src={props.avatar} alt={"avatar"}/>

            <div className={MessageModule.angle}/>

            <div className={MessageModule.content}>
                <div className={MessageModule.name}>{props.name}</div>
                <div className={MessageModule.text}>{props.message},</div>
                <div className={MessageModule.time}> {props.time},</div>
            </div>
        </div>
    )
}

export default Message
