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

mensagem1 = "Olá, como posso ajudar?"
mensagem2 = "Qual é o seu nome?"
mensagem3 = "onde posso encontrar informações sobre o produto?"

resposta1 = enviar_mensagem(mensagem1)
resposta2 = enviar_mensagem(mensagem2)
resposta3 = enviar_mensagem(mensagem3)

print(f'resposta 1: {resposta1}')
print(f'resposta 2: {resposta1}')
print(f'resposta 3: {resposta1}')