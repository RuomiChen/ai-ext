import { httpPost } from "../utils/request";

export const chat = async (data:any)=> await httpPost('/api/chat',{data})