import axios from "axios";
import { setCookies } from 'cookies-next';

const handleSignIn = async (state,router) => {
    if(!(state?.email && state?.password)){
        alert("All fields are required")
        return false
    }
    try {
        const rsp = await axios.post('/api/login',state)
        if(rsp?.data?.data === "No User Found"){
            router.push('/signup')
            return false
        }
        if(rsp?.data?.data === "Incorrect Password"){
            alert("Incorrect password")
            return false
        }
        setCookies("user",JSON.stringify(rsp?.data?.data),{maxAge: 3600})
        router.push('/netflix')
    } catch (error) {
        console.log(error)
        alert("An error occurred")
        return false
    }
    return true
};

export default handleSignIn