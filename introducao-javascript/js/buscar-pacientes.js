//Buscando o botão que adiciona os pacientes
var botaoAdicionar = document.querySelector("#buscar-pacientes");

//Adicionando um evento de clique
botaoAdicionar.addEventListener("click", function() {

    //Guardando a api
    var xhr = new XMLHttpRequest();

    //Abrindo o caminho da api
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //Evento para quando a api carregar
    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        //Se a api carregar corretamente
        if (xhr.status == 200) {

            //Adicionando a classe invisivel para a mensagem de erro
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;

            //Passando a resposta para o formato JSON
            var pacientes = JSON.parse(resposta);

            //Adicionando os pacientes na tabela
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });

        //Se a api retornar qualquer código além de 200
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    //Enviando a requisição
    xhr.send();
});
