export const isEmailValid = (email) => {
    if(!email.trim()){
        return "Please enter email first"
    }
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    if(!isValidEmail){
        return "Invalid Email"
    }
    return null
}

export const isPasswordValid = (password) => {
    if(!password.trim()){
        return "Please Enter password first"
    }
    const isValidpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isValidpassword){
        return "Invalid password"
    }
    return null
}

export const isValidFullName = (fullName) => {
    if(!fullName.trim()){
        return "Please enter Full Name First"
    }
   
    const isValidFullName = /^[a-zA-Z\s]+$/.test(fullName)
   
    if(!isValidFullName){
        return "Invalid Fullname"
    }
    return null
}