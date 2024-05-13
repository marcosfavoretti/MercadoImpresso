import axios from "axios"
import { config } from "rxjs"
import { configfile } from "./configfile"
export const axiosClient = axios.create({
    baseURL: configfile.sever,
    withCredentials: true
})