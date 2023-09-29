import openai
openai.api_key = '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'

def enviar_mensagem(mensagem):
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
conversa_com_contexto = mensagem_inicial + 'Você: ' + mensagem_usuario
resposta = enviar_mensagem(conversa_com_contexto)
