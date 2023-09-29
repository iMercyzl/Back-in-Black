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
    
    mensagem_usuario = input('em que posso te ajudar?')

    if mensagem_usuario.startswitch('/'):
        comando = mensagem_usuario[1:]
        if comando == 'ajuda':
            resposta = "Eu sou um assistente virtual, e posso te ajudar em algumas tarefas. \n"
        else:
            resposta = "Não entendi o seu comando. \n"
    else:
        resposta = enviar_mensagem(mensagem_usuario)
    
    print(f"resposta do chatgpt: {resposta}")