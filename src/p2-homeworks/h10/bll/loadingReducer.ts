type InitStateType = {
    loading: boolean
}
const initState = {
    loading: false,
}
type ActionsType = LoadingACType

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'clack-clack': {
            return {loading: !state.loading}
        }
        default:
            return state
    }
}
type LoadingACType = {
    type: "clack-clack"
}
export const loadingAC = (): LoadingACType => ({type: "clack-clack"}) // fix any