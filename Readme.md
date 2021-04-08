# Vue.js

Vue JS é um framework Javascript open source, lançado em Fevereiro de 2014 por Evan You, desenvolvedor que atuava em um dos projetos do Google Creative Labs, em 2014.

Vue JS é muito utilizado para criar aplicações single page (Single Page Aplications) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário.

Apostando em uma arquitetura enxuta, Vue requer uma configuração mínima na criação de um projeto (menos de 100 Kbytes) e pode ser facilmente integrado com uma aplicação já existente através de uma simples tag script. 


Link Oficial em Português/BR : https://br.vuejs.org/

## Instalação e uso :

### Inclusão direta:

Simplesmente faça o download e inclua a tag `<script>` com o caminho correto:

`<script src="vue.js"></script>`

Link para Download : https://br.vuejs.org/v2/guide/installation.html

### CDN 
Para propósitos de prototipação ou aprendizado, você pode usar a versão mais recente com:

`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`

## Vue CLI

Para otimizar o processo de desenvolvimento, Vue também proporciona uma interface CLI onde é possível executar diferentes funções comuns a projetos para front-end. 

Para instalar o Vue CLI:

`npm install -g @vue/cli`

Uma das funções mais conhecidas é o `vue create <nome do projeto>` que é utilizado para iniciar um novo projeto pré-configurado com ferramentas comuns e indispensáveis, tais como: 

* Babel – transpilador
* Typescript – tipagem estática
* Vuex – gerente de estados aplicação
* Router – gerente de rotas
* Eslint – formatador de código
* Jest – testes

Vue-cli também proporciona uma arquitetura de plugins onde é possível acoplar diferentes funcionalidades como análise de métricas, build otimizado e deploy a diferentes provedores.

## Vue DevTools

Vue-devtools é outra ferramenta desenvolvida para facilitar o processo de desenvolvimento de aplicações que utilizam Vue JS, funciona como uma extensão do browser e serve para visualizar o estado de cada componente que está sendo renderizado. 

Esta função dá ao desenvolvedor a capacidade de debugar a aplicação de maneira rápida e visual.

## IDE e Extensões 

Os editores de texto mais utilizados também proporcionam ferramentas para que a experiência de desenvolvimento com Vue seja a melhor possível, provendo syntax highlighting, snippets  e inteliSense. 

A extensão mais utilizada para essa funcionalidade é chamada Vetur além da Vue Snippets ambas  utilizadas juntamente com o VSCode.