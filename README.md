# Teste ArmazemPB
# ChatBot Nice

*Código modificado do site do Armazém Paraíba para inclusão do ChatBot Nice na main.
*Programa para o Desafio Armazém PB

## Installation

Faça o download do projeto e abra o arquivo Armazem_Paraíba.html
Abrir usando o navegador para visualizar o site.
Abrir usando um editor de textos para visualizar o código.

## Observações

As adições ao código estão nas linhas 168 à 190.
Foram usados scripts adicionais jquery e x-frame-bypass.
x-frame-bypass necessário pois a URL do chatbot https://andromeda.armazempb.com.br/chat tem os Responser Headers limitados em x-frame-option: same origin.
A demora para que o chatbot de fato apareça deve-se ao bypass fazendo a devida Response e o carregamento do mesmo.
Não foi feita versão para telas menores (tablet e celulares) pelo resultado já ser aceitável.

## Próximos passos

Arrumar o código do chatbot para que entre direto no quadro pedindo pelo nome e local do usuário, sem a necessidade do clique na imagem da Nice.
Modificar os botões de maximizar e minimizar a DIV por opções mais agradáveis ao usuário.
