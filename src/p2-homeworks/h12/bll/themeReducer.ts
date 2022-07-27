const initState:InitialStateType = {
themeColor:"some"
};
export type InitialStateType = {
    themeColor:string
}
export const themeReducer = (state = initState, action: any): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE-COLOR": {
            return {...state, themeColor:action.color};
        }
        default: return state;
    }
};
type ChangeThemeAC = {
    type: "CHANGE-COLOR"
    color:string
}
export const changeThemeAC = (color:string): ChangeThemeAC => {return{type: "CHANGE-COLOR", color}}; // fix any