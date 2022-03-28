if(localStorage.getItem("userData") === null) {
    localStorage.setItem("userData" , JSON.stringify([]))
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    let name = profile.getName()
    let email = profile.getEmail()
    let image = profile.getImageUrl();

    let obj = {
        name: name,
        email: email,
        img:image
    }
    
    let getlocal = JSON.parse(localStorage.getItem("userData"))
    getlocal.push(obj)

    if(getlocal.length > 1) {
        window.location.href = "index.html"
    }
    
    localStorage.setItem("userData" , JSON.stringify(getlocal))

}
