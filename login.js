const trials = 3;

function validate(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

if ( username == "Admin" && password == "Administration"){
        alert ("Login successfully");
        window.location = "success.html";
        return false;
    }
    else{
        trials --;
            alert("You have "+trials+" 3 trials left;");

            if( trials == 0){
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
    }
}

 