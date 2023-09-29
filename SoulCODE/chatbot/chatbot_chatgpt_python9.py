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

conversa_anterior = """
Você: Olá, eu sou o assistente virtual da SoulCODE Academy. Como posso te ajudar?
Modelo: você é pica!
"""
mensagem_usuario = input('em que posso te ajudar?')
conversa_atual = conversa_anterior + "Você: " + mensagem_usuario
resposta = enviar_mensagem(conversa_atual)
print(f"resposta do chatgpt: {resposta}")