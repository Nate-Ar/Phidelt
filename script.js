var password = false;
var check = false
if (password == true){
    var ui = prompt("ENtEr PasSworD")
    if (ui == "Morison"){
        check = true
        console.log(check)
    }else if (ui != "Morison") {
        while (check == false){
            ui=prompt("EnterPasWorD")
            if (ui == "Morison"){
                check = true;
                console.log(check)
            }else{
                console.log("Wrong Passowrd")
            }
        }
    }
}else if (password == false){
    console.log("Password Not Required")
}