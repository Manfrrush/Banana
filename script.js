// Conciencia e Profundidade\\


/* Isso daqui é basicamente a árvore DOM, essa parte nos concede pegar um id e usar no js ;) */

const tela = document.getElementById("tela")

/* Essa funçãozinha aqui, faz adicionar um valor quando for preciso */

function add_value(valor) {
    tela.value += valor
}

function limpar() {
    tela.value = ""
}

function rebeca() {
    tela.value = tela.value.slice(0, -1)
}

/* ele vai se esforçar, não significa nada */

function resultado() {
    try {
        tela.value = eval(tela.value)
    }


    catch (erro) {
        tela.value = "Erro"
    }
}



/* Adicionando o evento no teclado */

document.addEventListener("keydown", function (evento) {
    const tecla = evento.key

    if ("0123456789+-/*.".includes(tecla)) {
        add_value(tecla)
    }
    if (tecla === "Enter" || tecla === "=") {
        resultado()
    }

}



)


if (tecla === "Escape")
    limpar(); 