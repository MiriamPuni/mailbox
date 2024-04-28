import axios from "axios";

async function axiosReq({method = 'GET', url, body}){
    try {
        const {data:result} = await axios({
            method,
            baseURL:"http://localhost:3456/",
            url,
            data:body,
            headers:{Authorization: localStorage.token || ''}
        })
        return result
    } catch (error) {
        console.error({error});
        throw error
        // return {success:false}
    }
}
export default axiosReq