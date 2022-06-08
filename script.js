
function pas(){
    if(pw_text.value=="pdf-file"){
        pdf.style.display="block";
    }
}

let pw_btn=document.querySelector("#pw-btn");
let pw_text=document.querySelector("#pw-text");
let pdf=document.querySelector(".yotei iframe");

pw_btn.onclick=pas;