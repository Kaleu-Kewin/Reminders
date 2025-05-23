from routes import configurar_rotas
from flask_cors import CORS
from flask import Flask

app = Flask(__name__)
CORS(app)
configurar_rotas(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
