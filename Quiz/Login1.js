const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("Forkert Kode")
    }
})



function authentication(username,password){
    if(username === "Agramkow User" && password === "Agramkow123456!"){
        return true
    }else{
        return false
    }
}