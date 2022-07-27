type InitStateType = {
    loading: boolean
}
const initState = {
    loading: false,
}
type ActionsType = LoadingACType

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'BLA-BLA': {
            return {loading: !state.loading}
        }
        default:
            return state
    }
}
type LoadingACType = {
    type: "BLA-BLA"
}
export const loadingAC = (): LoadingACType => ({type: "BLA-BLA"}) // fix any