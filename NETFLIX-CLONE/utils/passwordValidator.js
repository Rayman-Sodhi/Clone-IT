const passwordValidator = (password) => {
    var data = {
        upper: 0,
        lower: 0,
        number: 0,
    }
    if(password.length < 8)return false
    for(let i = 0; i < password.length; i++){
        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
            data.upper  = data.upper + 1
        }
        if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
            data.lower  = data.lower + 1
        }
        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            data.number  = data.number + 1
        }
    }
    if(data.upper < 1 && data.lower < 1 && data.number < 1)return false
    return true
}

export default passwordValidator