const ValidateInfo=(values)=>{

    let errors={};
    if(!values.username.trim()){
        errors.username="Username is required";
    }
    if(!values.password){
        errors.password="Password is required";
    } else if(values.password.length<6){
        errors.password="Passwords need to be at least 6 characters"
    }

    if(!values.cpassword){
        errors.cpassword="Please confirm your password";
    }else if(values.password!==values.cpassword){
        errors.cpassword="Password do not match"
    }
    if(!values.email){
        errors.password="Email required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

return errors;
}

export default ValidateInfo;