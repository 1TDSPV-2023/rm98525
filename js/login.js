"use strict";



//CRIANDO OBJETOS
const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario : "00000"
}

const usuario2 = {
    nomeUsuario : "ptt01",
    senhaUsuario : "12345"
} 

//LISTA DE USUÁRIOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

addEventListener("click", (evento)=>{
     
    let userInput = document.querySelector("#idUser"); 
    let passInput = document.querySelector("#idPass"); 
        
        //MOSTRA SENHA NO OLHINHO
        if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){

            evento.target.setAttribute("style","cursor:pointer")

            if(passInput.getAttribute("type") == "password"){
                passInput.setAttribute("type","text");
                evento.target.setAttribute("class","fa fa-eye-slash")  
            }else{
                evento.target.setAttribute("style","cursor:pointer");
                evento.target.setAttribute("class","fa fa-eye");  
                passInput.setAttribute("type","password"); 
            }

        }

        if(evento.target.id == "btnSubmit"){
        
        try{
                listaDeUsuarios.forEach((usuario)=>{

                    if(userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
                        throw "USUÁRIO VALIDADO!";
                    }
                });

                throw "USUÁRIO OU SENHA INCORRETOS!";

    }catch(msg){
        if(msg == "USUÁRIO VALIDADO!"){
            console.log("USUÁRIO VALIDADO!")
        }else{
            console.log("USUÁRIO OU SENHA INCORRETOS!");
        }
    }

  }
});
