type ActionType = {
    type: string
    payload: any
}
// export type UserType =
export type initialPeopleType = {
    _id: number
    name: string
    age: number
}
export const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state: Array<initialPeopleType> = initialPeople, action: ActionType) => { // need to fix any
    switch (action.type) {
        case 'sort':
            if (action.payload === 'up') {
                const newState = [...state]
                newState.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }
                })
                return newState
            } else if (action.payload === 'down') {
                const newState = [...state]
                newState.sort((a: any, b: any) => {
                    if (a.name > b.name) {
                        return -1
                    } else {
                        return 1
                    }
                })
                return newState
            } else {
                return state
            }

        case 'check': {
            const newState = [...state]
            return newState.filter((p: initialPeopleType) => p.age > action.payload)
        }
        default:
            return state
    }
}