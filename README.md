# Lembretes

Projeto criado para aprender a criar rotas em Python e utilizar o Flask.

## Descrição

Este projeto permite agendar lembretes para horários específicos, exibindo notificações no Windows. O backend foi desenvolvido em Python com Flask, enquanto o frontend é uma aplicação web simples em HTML, CSS e JavaScript.

## Estrutura

```sh
Lembretes/
├── app/
│   ├── backend/
│   │   ├── notify/
│   │   │   ├── agendar.py
│   │   │   └── notify.py
│   │   ├── routes/
│   │   │   └── route.py
│   │   └── app.py
│   └── frontend/
│       ├── index.html
│       ├── script.js
│       └── style.css
├── .gitignore
├── README.md
└── requirements.txt
```

## Como executar

1. Criar e Iniciar um ambiente virtual:
```sh
   python -m venv venv
   venv\Scripts\activate
```

2. Instale as dependências:
```sh
   pip install -r requirements.txt
```

3. Execute o backend:
```sh
   python app.py
```

4. Abra o arquivo **app/frontend/index.html** no navegador.
