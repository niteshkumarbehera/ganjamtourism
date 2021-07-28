var a;
function success_hide(){
    if (a==1){
        document.getElementById("success").style.display="inline";
    }
    else{
        document.getElementById("success").style.display="none";
        return a=1;
    }
}

