import validator from 'validator';
import axios from 'axios';
import passwordValidator from '../utils/passwordValidator'

const handleSignup = async (state,setState,setHasSentOTP)=> {
    //check for all fields
    if (!(state && state?.name && state?.email && state?.password && state?.confirmPassword)) {
        alert('All fields are required')
        return false
    }
    //check if password and confirmPassword equals or not
    if (state.password !== state.confirmPassword) {
        alert('Password and Confirm Password not matched')
        return false
    }
    //isEmail?
    if (!validator.isEmail(state.email)) {
        alert('Invalid email')
        return false
    }
    //validate password
    if (!passwordValidator(state.password)) {
        alert('Invalid password')
        return false
    }
    //send verification email
    try {
        const res = await axios.post(`/api/signup/nodemailer`, { email: state.email })
        setState({ ...state, otp: res.data.data })
    } catch (error) {
        alert('An error occured')
        return false
    }
    setHasSentOTP(true)
    return true
}

export default handleSignup