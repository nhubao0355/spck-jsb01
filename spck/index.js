const formlogin = document.getElementById("form-login");
const nameRight = "Nhu";
const addressRighgt = "admin";
const phonenumberRight = "123";

formlogin.addEventListener("submit", function () {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phonenumber = document.getElementById("phonenumber").value;
    checkUser(name, address, phonenumber);
   // alert(name + address + phonenumber);
});

function checkUser(name, address, phonenumber) {
    if (name != nameRight || address != addressRighgt || phonenumber != phonenumberRight) {
        alert(" Login fail !!");
    } else {
        alert(" Login success !!");
    }

}

