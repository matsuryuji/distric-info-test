# `District Info Test`

This repository contains a test project to a frontend developer role.

## `Setup`

1. Para rodar este projeto primeiramente:

`yarn` or `npm install`

2. Após instalar dependência, podemos rodar o comando:

`yarn` or `npm start`

Abrirá na porta http://localhost:3000 dentro do seu browser.

3. Como este projeto foi utilizado JSON-server é necessario utilizar os comandos para abrir dois arquivos json:

`npx json-server --watch  ./src/api/populacao_bairros.json -p 3333` e `npx json-server --watch ./src/api/geometrias_bairros.json -p 4444`

Abrirá na porta http://localhost:3333 e http://localhost:4444.

## `O que foi feito neste projeto`

- Página onde com uma rota mostrando todos os componentes pedido pelo teste;
- Filtro para escolher qual bairro o usuário deseja;
- Botão para acessar ao polígono do bairro;
- Manipulação de pseudo api;
- Gráfico de linha mostrando a evolução populacional do bairro escolhido;

## `O que eu gostaria que fosse feito`

- Estilização com um UI melhor;
- Validações de trativa de erro caso a api não conseguir ser chamado (exemplo: tratar erro 400);
- Loader para as requisições;
- Certificar de que o projeto funcione bem em todos os navegadores (cross-browser), como Safari, Opera, Edge, etc.
- Responsividade;
- Incluir mais animações CSS na alteração de elementos DOM;

## `Feedback`

Projeto feito na correria, pois ocorreram muitos imprevistos ao longo do tempo do teste prático e com isso não conseguir tudo que eu poderia melhorar dentro do teste, mas de todas as formas tentei dar o meu melhor neste projeto :) .
