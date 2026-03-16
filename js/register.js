function registerUser() {
    let uname = document.getElementById("registerName").value.trim();
    let uemail = document.getElementById("registerEmail").value.trim();
    let upassword = document.getElementById("registerPassword").value;
    let uconfirmPassword = document.getElementById("registerConfirmPassword").value;

    try {
        if (!uname || !uemail || !upassword || !uconfirmPassword) {
            throw new Error("All fields required");
        }
        if (upassword !== uconfirmPassword) {
            throw new Error("Passwords do not match");
        }

        let user = {
            name: uname,
            email: uemail,
            password: upassword,
            role: "student"
        };

        httpRequest("http://localhost:3000/users", "POST", user).then(function(response) {
            alert("Registration Successful");
            window.location.href = "index.html";
        });
    } catch (err) {
        alert(err.message);
    }
}
