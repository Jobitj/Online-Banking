function register() {
    let userValue = user.value;
    let accnoValue = accno.value;
    let passValue = pass.value;

    // Check if any of the fields are empty
    if (!userValue || !accnoValue || !passValue) {
        alert("Please fill in all fields");
        return; // Stop the function if any field is empty
    }

    let Accdetails = {
        username: userValue,
        accno: accnoValue,
        password: passValue,
        accbalance: 0
    };

    console.log(Accdetails);

    if (Accdetails.accno in localStorage) {
        alert("This account already exists");
    } else {
        localStorage.setItem(Accdetails.accno, JSON.stringify(Accdetails));
        alert("Account created successfully");
        window.location = "login.html";
    }
}
