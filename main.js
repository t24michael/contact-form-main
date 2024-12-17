
function check(){
    if(!document.getElementById('consent').checked){
        document.getElementById('consent').nextElementSibling.classList.add("fail");
        return false;
    }
    if(document.getElementById('consent').checked){
        document.getElementById('consent').nextElementSibling.classList.remove("fail");
        return true;
    }
}
function submitFunction(){
    if(check()){
        document.getElementById('msn').classList.toggle('hidden');
        setTimeout(() => {
            document.getElementById('msn').classList.toggle('hidden');
        }, 10000);
    }
}