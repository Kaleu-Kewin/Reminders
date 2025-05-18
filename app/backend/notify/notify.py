from win10toast_click import ToastNotifier
from webbrowser import open

class Notificar:
    def __init__(self):
        pass

    @staticmethod
    def exibir(titulo, mensagem, link=None):
        ToastNotifier().show_toast(
            titulo,
            mensagem,
            duration=15,
            threaded=True,
            callback_on_click=lambda: Notificar.abrir_link(link)
        )

    @staticmethod
    def abrir_link(link):
        if link:
            open(link)
