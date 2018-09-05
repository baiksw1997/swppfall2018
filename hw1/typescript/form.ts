class Form {
    constructor(
        public email: string,
        public password: string,
        public password_confirmation: string,
        public phone_number: string,
        public fname: string,
        public lname: string,
        public age: number,
        public birth_month: string,
        public birth_day: number,
        public birth_year: number) {}
    // TODO: You may fill in functions in the class.
    ok_email() : boolean {
        var iter : number = 0;
        var domain : number = 0;
        while(true){
            if (iter == this.email.length) return false;
            if (this.email[iter] == " " || this.email[iter] == ".") return false;
            if (this.email[iter] == "@") break;
            iter += 1;
        }
        iter += 1;
        while(true){
            if (iter == this.email.length) return false;
            if (this.email[iter] == " " || this.email[iter] == "@") return false;
            if (this.email[iter] == ".") break;
            iter += 1;
        }
        iter += 1;
        while(true){
            if (iter == this.email.length) break;
            if (this.email[iter] < 'a' || this.email[iter] > 'z') return false;
            if (domain > 3) return false;
            iter += 1;
            domain += 1;
        }
        if (domain < 2) return false;     
        return true;
    }

    ok_password() : boolean {
        var iter : number = 0;
        var number_flag : boolean = false;
        var uppercase_flag : boolean = false;
        var lowercase_flag : boolean = false;
        if (this.password.length < 8) return false;
        while (iter < this.password.length){
            if(!number_flag && (this.password[iter] >= '0' && this.password[iter] <= '9')) number_flag = true;
            if(!uppercase_flag && (this.password[iter] >= 'A' && this.password[iter] <= 'Z')) uppercase_flag = true;
            if(!lowercase_flag && (this.password[iter] >= 'a' && this.password[iter] <= 'z')) lowercase_flag = true;
        }
        return number_flag && uppercase_flag && lowercase_flag;
    }

    ok_password_confirmation() : boolean {
        return this.password_confirmation == this.password;
    }

    ok_phone_number() : boolean {
        for (var i: number = 0; i<13 ;i++){
            switch(i){
                case 3:
                case 8: if(this.phone_number[i] != '-') return false;
                break;
                default: if(this.phone_number[i] < '0' || this.phone_number[i] >'9') return false;
            }
        }
        return true;
    }

    ok_fname() : boolean {
        var iter : number = 1;
        if (this.fname.length < 2) return false;
        if (this.fname[0] < 'A' || this.fname[0] > 'Z') return false;
        while (iter < this.fname.length){
            if (this.fname[iter] < 'a' || this.fname[iter] > 'z') return false;
        }
        return true;
    }

    ok_lname() : boolean {
        var iter : number = 1;
        if (this.lname.length < 2) return false;
        if (this.lname[0] < 'A' || this.lname[0] > 'Z') return false;
        while (iter < this.lname.length){
            if (this.lname[iter] < 'a' || this.lname[iter] > 'z') return false;
        }
        return true;
    }

    ok_age() : boolean {
        return this.age >= 0 && this.age <= 200;
    }

    ok_birth_month() : boolean {
        switch(this.birth_month){
            case "January":
            case "February":
            case "March":
            case "April":
            case "May":
            case "June":
            case "July":
            case "August":
            case "September":
            case "October":
            case "November":
            case "December":
            break;
            default: return false;
        }
        return true;
    }

    ok_birth_day() : boolean {
        return this.birth_day > 0 && this.birth_day < 100;
    }

    ok_birth_year() : boolean {
        return this.birth_year >= 1800 && this.birth_year <= 2018;
    }
}

var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {
    var email : string = document.forms["form"]["email"].value
    // TODO: Fill in the rest of the function. Use the Form class defined above
    var password : string = document.forms["form"]["password"].value
    var password_confirmation : string = document.forms["form"]["password_confirmation"].value
    var phone_number : string = document.forms["form"]["phone_number"].value
    var fname : string = document.forms["form"]["fname"].value
    var lname : string = document.forms["form"]["lname"].value
    var age : number = document.forms["form"]["age"].value
    var birth_month : string = document.forms["form"]["birth_month"].value
    var birth_day : number = document.forms["form"]["birth_day"].value
    var birth_year : number = document.forms["form"]["birth_year"].value

    var form : Form = new Form(email
        ,password
        ,password_confirmation
        ,phone_number
        ,fname
        ,lname
        ,age
        ,birth_month
        ,birth_day
        ,birth_year)

    let alertMessage = '';
    var alert_flag : boolean = false;
    alertMessage += "You must correct:\n\n";
    if(!form.ok_email) {
        alertMessage += "Email\n";
        alert_flag = true;
    }
    if(!form.ok_password) {
        alertMessage += "Password\n";
        alert_flag = true;
    }
    if(!form.ok_password_confirmation) {
        alertMessage += "Password Confirmation\n";
        alert_flag = true;
    }
    if(!form.ok_phone_number) {
        alertMessage += "Phone number\n";
        alert_flag = true;
    }
    if(!form.ok_fname) {
        alertMessage += "First name\n";
        alert_flag = true;
    }
    if(!form.ok_lname) {
        alertMessage += "Last name\n";
        alert_flag = true;
    }
    if(!form.ok_age) {
        alertMessage += "Age\n";
        alert_flag = true;
    }
    if(!form.ok_birth_month) {
        alertMessage += "Birth date (Month)\n";
        alert_flag = true;
    }
    if(!form.ok_birth_day) {
        alertMessage += "Birth date (Day)\n";
        alert_flag = true;
    }
    if(!form.ok_birth_year) {
        alertMessage += "Birth date (Year)\n";
        alert_flag = true;
    }
    if(!alert_flag) alertMessage = "Successfully Submitted!";
    // TODO: Fill the alert message according to the validation result by following the form in README.md.
    alert(alertMessage);

    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: modify 'title' attribute of each label to display your message
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)