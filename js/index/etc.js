function validateForm(){
    var myForm = document.forms["questionForm"];
    var title = myForm["title"].value;
    var name = myForm["user_name"].value;
    var mail = myForm["mail"].value;
    var content = myForm["content"].value;
    if(title === ""){
        alert("Title blank");
        return false;
    }
    if(name === ""){
        alert("Name blank");
        return false;
    }
    if(mail === ""){
        alert("mail-address blank");
        return false;
    }
    if(content === "" || content.length < 10){
        alert("content blank or  enter at least 10 characters");
        return false;
    }
}