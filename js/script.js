function entrarPagina(){

    var Senha_Usuário, Nome_Usuário;

    Nome_Usuário = document.getElementById('inpUsuário').value;
    Senha_Usuário = document.getElementById('inpSenha').value;

    if (Nome_Usuário === "kaua" && Senha_Usuário === "123"){
        alert("login realizado com sucesso!.");
        window.location.href = "/html/home.html";
    }
    else {
        alert("Senha e/ou Usuário incorretos. Tente Novamente")
    }
}           