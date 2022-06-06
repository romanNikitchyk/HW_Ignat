import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    const sortingNames = (a: any, b: any) => {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
    }
    let sortedNames = initialState.sort(sortingNames)
    console.log(newState)
     expect(initialState).toBe(sortedNames)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    const sortingNamesDown = (a: any, b: any) => {
        if (a.name > b.name) {
            return -1
        } else {
            return 1
        }
    }
    let sortedNamesDown = initialState.sort(sortingNamesDown)
    expect(initialState).toBe(sortedNamesDown)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})


})
