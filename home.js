function deposit() {
    let pass = document.getElementById("pass").value
    // console.log(userDetails);
    let userDetails = JSON.parse(localStorage.getItem("userid"))
    let amount = Number(document.getElementById("depo").value)
    document.getElementById("myform").reset()
    if (amount == 0) {
        alert("Please Enter the amount you want to deposit")
    } else {
        if (pass == userDetails.password) {
            userDetails.accbalance += amount;
            // console.log(userDetails);
            localStorage.setItem("userid", JSON.stringify(userDetails))
            alert(`Rs.${amount} is added to your account number ${userDetails.accno}`)
            let notify1 = document.getElementById("notify1")
            notify1.style.position = "relative"
            notify1.innerHTML = `Your account balance is Rs.${userDetails.accbalance}`
        } else {
            alert("Wrong password")
        }
    }

}
function withdraw() {
    let pass2 = document.getElementById("pass2").value
    let amount = document.getElementById("withdraw1").value
    let userDetails = JSON.parse(localStorage.getItem("userid"))
    console.log(userDetails);

    if (amount == 0) {
        alert("Please Enter the amount you want withdraw")
    } else {
        if (pass2 == userDetails.password) {
            if (amount > userDetails.accbalance) {
                alert("Insufficiant balance")
            } else {
                userDetails.accbalance -= amount
                localStorage.setItem("userid", JSON.stringify(userDetails))

                alert(`Rs.${amount} is withdrawed frow your account number ${userDetails.accno}`)
                let notify2 = document.getElementById("notify2")
                notify2.style.position = "relative"
                notify2.innerHTML = `Your account balance is Rs.${userDetails.accbalance}`
            }
        } else {
            alert("wrong password")
        }
    }
}

function del() {
    localStorage.removeItem("userid")
    window.location = "index.html"
}