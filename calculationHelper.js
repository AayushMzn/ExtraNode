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
})(module.exports)
