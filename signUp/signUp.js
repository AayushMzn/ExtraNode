function validation(user, email, pass) {
    let loginInfo = [
        { user: "ABC", email: "abc@gmail.com", pass: "@123" },
    ];
    for (let i = 0; i < loginInfo.length; i++) {
        if (user == loginInfo[i].user) {
            return "User name already exists";
        }

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(validRegex)) {
            return "InValid email address!";
        }

        if(pass == null){
            return "enter password";
        }
    }
    return "signup success";
}
module.exports = { validation };