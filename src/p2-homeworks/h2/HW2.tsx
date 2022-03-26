import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "low" | "middle" | "high"

export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
}

export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: Array<AffairType> = [
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
   if(filter === "all"){
       return affairs
   }
    return affairs.filter((affair) => affair.priority === filter)

}

export const deleteAffair = (affairs: Array<AffairType>, id: number): any => {
    return affairs.filter((a) => a.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
