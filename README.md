<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Teste para a vaga de desenvolvedor full stack na InBolso

## Instalação

```bash
$ npm install
```

## Rodando as migrations do Sequelize

Navegue até a pasta "src/database" e rode o comando abaixo

```bash
$ npx sequelize-cli db:migrate
```
## Rodando as seeds do Sequelize

Seeds criadas para adicionar os tipos de transferências ao banco.<br>
Navegue até a pasta "src/database" e rode o comando abaixo

```bash
$ npx sequelize-cli db:seed:all
```

## Rodando a aplicação

```bash
# development
$ npm run start
```

## Rotas

```bash
## Clientes

Cadastro de cliente - [POST] /clientes

{
  "nome": string,
	"cpf": string,
	"dataNascimento": Date,
	"nomePai": string | null,
	"nomeMae": string,
	"cidade": string,
	"estado": string
}

Lista de todos os clientes - [GET] /clientes

Listagem única de cliente com conta associada - [GET]: /clientes/{idCliente: number}

Atualização de dados de cliente - [PUT]: /clientes/{idCliente: number}

{
  "nome": string (Opcional),
	"cpf": string (Opcional),
	"dataNascimento": Date (Opcional),
	"nomePai": string | null (Opcional),
	"nomeMae": string (Opcional),
	"cidade": string (Opcional),
	"estado": string (Opcional)
}

Exclusão de cadastro de cliente - [Delete]: /clientes/{idCliente: number}

```

```bash
## Contas

Cadastro de conta - [POST] /contas

{
	"clienteId": number,
  "banco": string,
  "agencia": string,
  "conta": string,
  "saldo": string
}

Lista de contas cadastradas - [GET] /contas

Listagem única de conta e transferências - [GET]: /contas/{idConta: number}

Atualização de dados de conta - [PUT]: /contas/{idConta: number}

{
	"clienteId": number (Opcional),
  "banco": string (Opcional),
  "agencia": string (Opcional),
  "conta": string (Opcional)
}

Exclusão de conta - [Delete]: /contas/{idConta: number}

```

```bash
## Transferências

Cadastro de transferência - [POST] /transferencias

Tipos de transferências
1. Transferências entre contas
2. Deposito em conta
3. Deposito teste

{
	"tipoTransferenciaId": number,
	"contaOrigemId": number (null em caso de depositos),
  "contaDestinoId": number,
  "saldo": string
}

```