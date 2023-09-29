import openai
openai.api_key = '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'

def enviar_mensagem(mensagem, temperature):
    resposta = openai.Completion.create(
        engine="text-davinci-003",
        prompt=mensagem,
        max_tokens=50,
        temperature=0.7,
        n=1,
        stop=None
    )
    return resposta.choices[0].text.strip()

mensagem_inicial = """
Você: Olá, tudo bem?
Modelo: Eu estou bem, e você?
Você: Estou bem também. O que você faz?
Modelo: Eu sou um chatbot. E você?
"""

mensagem_usuario = 'Qual é o seu nome?'

resposta = enviar_mensagem(mensagem_usuario, temperature =  0.5)
