function mostra_outra_cidade(){
    var list_dest = document.getElementById('cidadeDest');
    if (list_dest.style.display == ''){
        list_dest.style.display = "flex"
    }else{
        list_dest.style.display = ""
    }
        console.log(list_dest.style.display)
}