import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import preloader from "./bll/loading-loader-svgrepo-com.svg"

function HW10() {

    let loading = useSelector<AppStoreType, boolean>((state) => state.loading.loading)
    let dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => dispatch(loadingAC()), 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <img src={preloader}/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
