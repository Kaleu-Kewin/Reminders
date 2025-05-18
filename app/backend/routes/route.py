from flask import request, jsonify
from notify import Agendar
import threading

def configurar_rotas(app):
    @app.route('/notificar', methods=['POST'])
    def notificar():
        dados    = request.get_json()
        titulo   = dados.get("titulo")
        mensagem = dados.get("mensagem")
        horario  = dados.get("horario")
        link     = dados.get("link")

        if not titulo or not mensagem or not horario:
            return jsonify({"erro": "Campos 'titulo', 'mensagem' e 'horario' são obrigatórios."}), 400

        threading.Thread(target=Agendar.agendar, args=(titulo, mensagem, horario, link)).start()

        return jsonify({"mensagem": "Lembrete agendado com sucesso!"})
