/* Criando a função MENU */

function menu() {

    opcao = parseInt(prompt(
        "----------MENU PRINCiPAL----------\n\n" +
        "1 - Cadastro de cliente\n" +
        "2 - Cadastro de Colaborador\n" +
        "3 - Cadastro de Produto\n" +
        "4 - Cadastro de Sistema"

    ));

    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro");
            document.getElementById('relatorio').innerHTML = "<p>Obrigado!!!<p>"

    }
};

/* Função Cadastrar Cliente */
function cadastrar_cliente() {
    let x = "n";
    relatorio = "* - relatório de Clientes -* <br>"
    while (x.toUpperCase() = "SS") {
        id = parseInt(prompt("Difite o id do Cliente:"))
        nome = prompt("Digite o nome do cliente:")
        endereco = prompt("digite o endereço do cliente:")

        relatorio = relatorio + "<br> +----------------------------------------+<br> <br>" +
            "ID :" + id + "<br>" +
            "NOME :" + nome + "<br>" +
            "ENDEREÇO:" + endereco +
            "<br> +----------------------------------------+<br> <br>"

        confirme = prompt("Finalizar Cadastro S - para sim ou N - Não?");
        if (confirme.toUpperCase == "S") {
            x = "S";
        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>";

    }
}
