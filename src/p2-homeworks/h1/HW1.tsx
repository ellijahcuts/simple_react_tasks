import React from 'react'
import Message from "./Message";


const messageData = {
    avatar: 'https://img.kupigolos.ru/hero/5f3415d0df85d.png?p=bh&s=87424ffea9a98526b0c02b867b75c16e',
    name: 'Аанг',
    message: 'Привет, как дела? Овладел уже магией Реакта?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            --- Homeworks 1 ---
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
