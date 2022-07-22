loginpagedata = JSON.parse(localStorage.getItem("loginorsignupdata")) || []
document.querySelector("#Login").addEventListener("click", login)

function login() {
    logindata = {
        givenpassword: document.querySelector("#password").value,
        givenemail: document.querySelector("#email").value,
    }
    loginpagedata.push(logindata)
    if (checkuser(logindata.givenemail, logindata.givenpassword) == true) {
        localStorage.setItem("loginmembers", JSON.stringify(logindata));
        alert("login successfull !!!");
        window.location.href = "#"
    }
    else {
        alert("credentials are wrong");
    }


    function checkuser(givenemail, givenpassword) {
        filtered = loginpagedata.filter(function (ele) {
            return ele.EMAIL == givenemail && ele.PASSWORD == givenpassword;

        })
        if (filtered.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}
