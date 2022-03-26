import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

export type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
    addUserCallback:(name:string)=>void
    setError:(value:string)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, addUserCallback, error, setError,  totalUsers} // деструктуризация пропсов
) => {
    const inputClass = !name.trim() ? s.error : s.someClass // need to fix with (?:)
const errorColor= !name.trim() ? s.errorText1 : s.errorText2

    const keyEnterHandler = (e:KeyboardEvent<HTMLInputElement>)=> {
        if (e.charCode === 13) {
            if (name.trim() === "") {
                setError("name is wrong")
                setTimeout(()=>setError(""), 3000)
            }
        }
        if (e.charCode === 13) {
            if (name.trim() !== "") {
                addUserCallback(name)
                alert("hello " + name + "!")
            }
        }
    }

    return (
        <div>
            <input onKeyPress={keyEnterHandler} value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={errorColor}>{error}</span>
            <button onClick={addUser}  >add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
