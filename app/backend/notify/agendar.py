from datetime import datetime, timedelta
from .notify import Notificar
from time import sleep

class Agendar:
    def __init__(self):
        pass

    @staticmethod
    def calcular_intervalo(horario_str):
        agora = datetime.now()
        try:
            horario = datetime.strptime(horario_str, "%H:%M").replace(
                year=agora.year, month=agora.month, day=agora.day
            )
        except ValueError:
            return None

        if horario < agora:
            horario += timedelta(days=1)

        return (horario - agora).total_seconds()

    @staticmethod
    def agendar(titulo, mensagem, horario,link=None):
        segundos = Agendar.calcular_intervalo(horario)
        if segundos is None:
            Notificar.exibir("Erro", "Formato de horário inválido.")
            return

        sleep(segundos)
        Notificar.exibir(titulo, mensagem, link)
