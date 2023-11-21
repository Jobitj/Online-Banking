function reg(){
    window.location = './register.html'
  }

  function log(){
    window.location = './login.html'
  }


  function register(){


    uname = uname.value
    acno = acno.value
    pswd = rpwd.value
  
    console.log(acno,uname,pswd);

    accountDetails = {
      acno,
      uname,
      pswd
    }

  
    if(acno in localStorage){
    alert("Account alredy exist...")
    }
    else{
      localStorage.setItem(acno, JSON.stringify(accountDetails));
      alert('Account Created successfully...');
      window.location = './login.html'
    }
}


function login(){
  
    acno= acno1.value
    pwd= pwd1.value
    console.log(acno,pwd);

  if(acno in localStorage){
    accountDetails = JSON.parse(localStorage.getItem(acno))
    if(pwd == accountDetails.pswd){
      alert("Login successful")
      window.location="./main.html"
    }
  else{
    alert("Incorrect password")
}
  }
  else{
    alert("Invalid account number")
  }
}



// Deposit

let balance = 0;
let amnt = 0;
let withdraw = 0;
let totalbalance = 0;
let pwd = '';


counter  = 0;
function deposit() {
  let depositAmount = parseFloat(damnt.value);
  let depositPwd = dpwd.value.toString();

  let accountDetails = JSON.parse(localStorage.getItem(depositPwd));

  if (accountDetails && depositAmount > 0) {
      balance += depositAmount;
      alert("Amount added successfully");
      document.getElementById("balance").innerHTML = `<div class="text-light">Your current balance is Rs.${balance}</div>`;
  } else {
      if (!accountDetails) {
          alert('Enter the fields');
      } else {
          alert('Invalid deposit amount');
      }
  }
}

function withdraw_balance() {
  let withdrawAmount = parseFloat(wamnt.value);
  let withdrawPwd = wpwd.value.toString();

  let accountDetails = JSON.parse(localStorage.getItem(withdrawPwd));

  if (accountDetails && withdrawAmount > 0 && withdrawAmount <= balance) {
      balance -= withdrawAmount;
      alert("Amount withdrawn successfully");
      document.getElementById("wbalance").innerHTML = `<div class="text-light">Your current balance is Rs.${balance}</div>`;
  } else {
      if (!accountDetails) {
          alert('Enter the fields');
      } else if (withdrawAmount <= 0) {
          alert('Invalid withdrawal amount');
      } else {
          alert('Insufficient funds');
      }
  }
}
