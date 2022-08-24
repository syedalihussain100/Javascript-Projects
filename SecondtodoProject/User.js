
function submit() {
    let name = document.getElementById("text");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (name.value != "" && email.value != "" && password.value != "") {
        let mycheck = JSON.parse(localStorage.getItem("user")) || [];
        localStorage.setItem("user", JSON.stringify(mycheck));
        console.log(mycheck)
        let flag = true;

        for (let i = 0; i < mycheck.length; i++) {
            if (mycheck[i].email == email.value && mycheck[i].password == password.value) {
                alert("This Email is already Register try another");
                flag = false
            }
        }
        if (flag == true) {
            mycheck.push({
                name: name.value,
                email: email.value,
                password: password.value
            })
            localStorage.setItem("user", JSON.stringify(mycheck));
            console.log(mycheck)
            alert("Signup Successfully");
            window.location.href = "login.html"
        }
        name.value = "";
        email.value = "";
        password.value = ""
    } else {
        alert("Please fill the data")
    }

}







function signin() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value != "" && password.value != "") {
        let myObj = {
            email: email.value,
            password: password.value
        }

        let checkLogin = JSON.parse(localStorage.getItem("user"), myObj);

        let flag = false;

        for (let i = 0; i < checkLogin.length; i++) {
            if (checkLogin[i].email === myObj.email && checkLogin[i].password === myObj.password) {
                flag = true
            }
        }

        if (flag) {
            alert("Login Successfully");
            window.location.href = "practise.html"
        } else {
            alert("Email Password Does Not match")
        }

    } else {
        alert("Please fill the data")
    }
}


// impi signup 
let signuphere = document.getElementById("signuphere");


signuphere.addEventListener("click",()=>{
    window.location.href = "Signup.html"
})