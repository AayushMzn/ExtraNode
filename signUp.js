const dbHelper = require("./dbHelper");
function validation(loginIn) {
    let msg = "signup success";;
    let x = true;
    const user=loginIn.user;
    const email=loginIn.email;
    const pass=loginIn.pass;
    const name=loginIn.name;
    const phone=loginIn.phone;

    let loginInfo = [
        { user: "ABC", email: "abc@gmail.com", pass: "@123" },
    ];
    for (let i = 0; i < loginInfo.length; i++) {
        if (user == loginInfo[i].user) {
            x = false;
            msg =  "User name already exists";
        }

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(validRegex)) {
            x = false;
            msg = "InValid email address!";
        }

        if(pass == null){
            x = false;
            msg = "enter password";
        }
    }
    if(x){
        let req = `insert into login values('${name}','${email}','${phone}','${user}','${pass}')`;
        const response = dbHelper.query(req);
        return msg;
    }else{
        return msg;
    }
    
}
module.exports = { validation };