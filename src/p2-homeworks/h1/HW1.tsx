import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://i.pinimg.com/564x/c0/58/72/c05872811325f69d910bf6cbcb207385.jpg',
    name: 'Roman',
    message: 'What would you say on this Elon Musk?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
