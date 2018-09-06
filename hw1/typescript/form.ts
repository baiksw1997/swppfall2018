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
            if (this.email[iter] == ' ') return false;
            if (this.email[iter] == '@') break;
            iter += 1;
        }
        iter += 1;
        while(true){
            if (iter == this.email.length) return false;
            if (this.email[iter] == ' ' || this.email[iter] == '@') return false;
            if (this.email[iter] == '.') break;
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
            iter += 1;
	}
        return number_flag && uppercase_flag && lowercase_flag;
    }

    ok_password_confirmation() : boolean {
        return this.password_confirmation == this.password;
    }

    ok_phone_number() : boolean {
	if (this.phone_number.length != 13) return false;
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
            iter += 1;
	}
        return true;
    }

    ok_lname() : boolean {
        var iter : number = 1;
        if (this.lname.length < 2) return false;
        if (this.lname[0] < 'A' || this.lname[0] > 'Z') return false;
        while (iter < this.lname.length){
            if (this.lname[iter] < 'a' || this.lname[iter] > 'z') return false;
            iter += 1;
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
    var password_confirmation : string = document.forms["form"]["password-confirmation"].value
    var phone_number : string = document.forms["form"]["phone-number"].value
    var fname : string = document.forms["form"]["fname"].value
    var lname : string = document.forms["form"]["lname"].value
    var agecheck = document.forms["form"]["age"].value
    var age : number = document.forms["form"]["age"].value
    if (agecheck == "" || agecheck == null) age = -1
    var birth_month : string = document.forms["form"]["birth-month"].value
    var birth_day : number = document.forms["form"]["birth-day"].value
    var birth_year : number = document.forms["form"]["birth-year"].value

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
    if(!form.ok_email()) {
        alertMessage += "Email\n";
	document.getElementById("email-label").innerHTML = "<ta title=\"characters@characters.domain (characters other than @ or whitespace followed by an @ sign, followed by more characters (not \'@\', \'.\', or whitespace: co.kr is not allowed in this case), and then a &#34.&#34. After the &#34.&#34, you can only write 2 to 3 letters from a to z).\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("email-label").innerHTML = "";
    if(!form.ok_password()) {
        alertMessage += "Password\n";
	document.getElementById("password-label").innerHTML = "<ta title=\"Must Contain at least one number and one uppercase and one lowercase letter, and least 8 or more characters.\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("password-label").innerHTML = "";
    if(!form.ok_password_confirmation()) {
        alertMessage += "Password Confirmation\n";
	document.getElementById("password-confirmation-label").innerHTML = "<ta title=\"Must match password.\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("password-confirmation-label").innerHTML = "";
    if(!form.ok_phone_number()) {
        alertMessage += "Phone number\n";
	document.getElementById("phone-number-label").innerHTML = "<ta title=\"nnn-nnnn-nnnn: three numbers, then &#34-&#34, followed by four numbers and a &#34-&#34, then four numbers.\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("phone-number-label").innerHTML = "";
    if(!form.ok_fname()) {
        alertMessage += "First name\n";
	document.getElementById("fname-label").innerHTML = "<ta title=\"Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets(A-Z, a-z)\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("fname-label").innerHTML = "";
    if(!form.ok_lname()) {
        alertMessage += "Last name\n";
	document.getElementById("lname-label").innerHTML = "<ta title=\"Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets(A-Z, a-z)\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("lname-label").innerHTML = "";
    if(!form.ok_age()) {
        alertMessage += "Age\n";
	document.getElementById("age-label").innerHTML = "<ta title=\"Must be a number between 0 and 200 (inclusive).\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("age-label").innerHTML = "";
    if(!form.ok_birth_month()) {
        alertMessage += "Birth date (Month)\n";
	document.getElementById("birth-month-label").innerHTML = "<ta title=\"Must be one of &#34January&#34, &#34February&#34, ..., &#34December&#34\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("birth-month-label").innerHTML = "";
    if(!form.ok_birth_day()) {
        alertMessage += "Birth date (Day)\n";
	document.getElementById("birth-day-label").innerHTML = "<ta title=\"Must be a number of one or two digits.\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("birth-day-label").innerHTML = "";
    if(!form.ok_birth_year()) {
        alertMessage += "Birth date (Year)\n";
	document.getElementById("birth-year-label").innerHTML = "<ta title=\"Must be a number between 1800 and 2018 (inclusive)\">X</ta>";
        alert_flag = true;
    }
    else document.getElementById("birth-year-label").innerHTML = "";
    if(!alert_flag) alertMessage = "Successfully Submitted!";
    // TODO: Fill the alert message according to the validation result by following the form in README.md.
    alert(alertMessage);

    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: modify 'title' attribute of each label to display your message
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)
