let passwords = [12345, "test123", "TEST1234", 2234];
let counter = 0;
function password(passwordId) {
  for (let i = 0; i < passwords.length; i++) {
    if (passwordId == passwords[i]) {
      return true;
    }
    return false;
  }
}
function checkPassword() {
  let passwordId = document.getElementById("passwordCheck").value;
  let passFun = password(passwordId);
  if (passwordId !== passwords) {
    counter++;
    if (passFun === true) {
      location.href = "https://google.com";
    } else if (counter > 4) {
      document.querySelector("#btn").disabled = true;
      let para = document.createElement("p");
      let node = document.createTextNode("Your password is blocked");
      para.style.color = "Red";
      let divElement = document.getElementById("para");
      para.appendChild(node);
      divElement.appendChild(para);
    } else {
      alert("Wrong Password, Try Again");
    }
  }
}
