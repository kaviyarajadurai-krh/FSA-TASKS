function login(){

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");
    let result = document.getElementById("result");

    userError.innerText="";
    passError.innerText="";
    result.innerText="";

    if(username === ""){
        userError.innerText="Username required";
        return;
    }

    if(password === ""){
        passError.innerText="Password required";
        return;
    }

    fetch("http://localhost:3000/api/login",{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({username,password})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.status==="success"){
            result.style.color="green";
            result.innerText="Login Successful 🎉";
        }else{
            result.style.color="red";
            result.innerText=data.message;
        }
    })
    .catch(err=>{
        result.style.color="red";
        result.innerText="Server not reachable";
        console.log(err);
    });
}
