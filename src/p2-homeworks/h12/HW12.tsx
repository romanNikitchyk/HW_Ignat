import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";


const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme =  useSelector<AppStoreType, string>((state)=> state.theme.themeColor)
const dispatch = useDispatch()
    // useDispatch, onChangeCallback
const onChangeCallback = (color:string) => {
    dispatch(changeThemeAC(color))
}


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect value={theme} options={themes}
                         onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
