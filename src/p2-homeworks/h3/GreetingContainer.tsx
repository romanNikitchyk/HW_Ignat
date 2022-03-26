import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {GreetingPropsType} from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const addUser = () => {
        if(!name.trim()){
            setError( "name is wrong")
            setTimeout(()=>setError(""), 3000)
        }
        if (name.trim()) {
            addUserCallback(name)
            alert("hello " + name + "!")
        }
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addUserCallback={addUserCallback}
            setError={setError}
        />
    )
}

export default GreetingContainer
