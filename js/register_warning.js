var b;
function warning_hide(){
    if (b==1){
        document.getElementById("warning").style.display="inline";
    }
    else{
        document.getElementById("warning").style.display="none";
        return b=1;
    }
}