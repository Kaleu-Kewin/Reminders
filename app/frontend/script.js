document.addEventListener("DOMContentLoaded", inicializarApp);

function inicializarApp() {
    const botaoAgendar   = document.getElementById("agendar");
    const campoTitulo    = document.getElementById("titulo");
    const campoMensagem  = document.getElementById("mensagem");
    const campoHorario   = document.getElementById("horario");
    const campoLink      = document.getElementById("link");

    botaoAgendar.addEventListener("click", () => {
        const dados = obterDadosFormulario(campoTitulo, campoMensagem, campoHorario, campoLink);

        if (!validarCampos(dados)) {
            Notificar.exibir("Preencha todos os campos antes de agendar.", true);
            return;
        }

        Agendar.enviar(dados)
            .then(resposta => {
                const mensagem = resposta.mensagem || resposta.erro || "Erro desconhecido.";
                const erro = Boolean(resposta.erro);
                Notificar.exibir(mensagem, erro);

                if (!erro) {
                    campoTitulo.value   = "";
                    campoMensagem.value = "";
                    campoHorario.value  = "";
                    campoLink.value     = "";

                    campoTitulo.focus();
                }
            })
            .catch(() => Notificar.exibir("Erro ao agendar lembrete.", true));
    });
}

function obterDadosFormulario(campoTitulo, campoMensagem, campoHorario, campoLink) {
    return {
        titulo   : campoTitulo.value.trim(),
        mensagem : campoMensagem.value.trim(),
        horario  : campoHorario.value,
        link     : campoLink.value.trim()
    };
}

function validarCampos({ titulo, mensagem, horario }) {
    return titulo && mensagem && horario;
}

class Notificar {
    static exibir(texto, erro = false) {
        const area            = document.getElementById("notificationArea");
        const notificacao     = document.createElement("div");
        notificacao.className = "notification";

        if (erro) notificacao.classList.add("error");
        notificacao.innerText = texto;

        area.appendChild(notificacao);
        setTimeout(() => notificacao.remove(), 5000);
    }
}

class Agendar {
    static async enviar(dados) {
        const resposta = await fetch("http://localhost:5000/notificar", {
            method  : "POST",
            headers : { "Content-Type": "application/json" },
            body    : JSON.stringify(dados)
        });

        return resposta.json();
    }
}
