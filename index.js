    
    var link = 'negado.html';
    var si = 'principal.html'
        
    function Link(url) {

        window.location.href = url;
    
    }    

        var senha = prompt("Escreva a senha: ");
                
        if(senha==881 || senha=='senha' || senha==123){
          
            alert("Senha correta! Bem vindo a Tabela");
            Link(si);

        }else{

            Link(link);

        }