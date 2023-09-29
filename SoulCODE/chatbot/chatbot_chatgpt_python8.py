import openai
import requests
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
def obter_resposta_da_api(pergunta):
    reposta = requests.get(f'https://api.duckduckgo.com/?q={pergunta}&format=json&pretty=1')
    return reposta.json()['reposta']

mensagem_usuario = "Qual a capital da frança?"

if mensagem_usuario.startswith('/api'):
    pergunta = mensagem_usuario[5:]
    resposta = obter_resposta_da_api(pergunta)
else:
    reposta = enviar_mensagem(mensagem_usuario)
print(f"resposta do chatgpt: {resposta}")