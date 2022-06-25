import axios from "axios"

const login = async credenciales =>{
    const {data} = await axios.post("/login", credenciales)
    return data
}

export default login