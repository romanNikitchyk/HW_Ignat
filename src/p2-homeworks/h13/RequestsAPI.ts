import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})
export const RequestsAPI = {
    create (data:{success:boolean}){
return instance.post("auth/test", data)
    }
}