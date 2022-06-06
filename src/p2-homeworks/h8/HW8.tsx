import React, {useState} from 'react'
import {homeWorkReducer, initialPeople, initialPeopleType} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'



function HW8() {
    const [people, setPeople] = useState<Array<initialPeopleType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: initialPeopleType) => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
    return (
        <div>
            <hr/>
            homeworks 8
            {finalPeople}
            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={sortAge}>check 18</SuperButton>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
