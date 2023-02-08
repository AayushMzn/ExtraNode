const { request } = require("http");
const httpStatus = require("http-status");

//-----------calculation function in different file---------------------
((calculationHelper) =>{

    calculationHelper.sum= function(a,b){
        
        return a+b;
    }

    calculationHelper.diff= function(a,b){
        setTimeout(() => {
            console.log("timeOut");
            // const diff = a-b;
        }, 5000);
        return a-b;
    }

    calculationHelper.login = async(request) =>{
        const isValid = await calculationHelper.loginValidation(request);
        if(isValid==false){
            return {
                status: httpStatus.BAD_GATEWAY, message:"username is required"
            }
        }
        if(request.user=="abc"){
            console.log("success");
            const response = "success";
            return response;
        }
        else{
            console.log("unsuccess");
            const response="unsuccessful";
            return response;
        }
    }

    calculationHelper.loginValidation= async(request) =>{
        if(request.user){
            return true;
        }
        return false;
    }
})(module.exports)
