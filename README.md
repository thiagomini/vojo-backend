# Vojo Backend
Projeto backend desenvolvido em [NestJS](https://docs.nestjs.com/) TypeScript para a aplicação VOJO.

## Instalação

```bash
$ yarn
```

## Rodado o projeto

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Scripts adicionais

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Endpoints inicialmente disponíveis
* **POST** `/v3/auth/register` : cadastro de novo usuário, sem retorno de dados.
* **POST** `/v3/auth/login` : login de usuário, retorna o token em header `Vojo-Authorization`.
* **GET** `/v3/auth/me` : rota autenticada com header `Authorization Bearer Token`, retorna os dados do usuário autenticado.

## Endpoints implementados
* **GET** `/v3/jobs` : listagem de vagas disponíveis.
* **PUT** `/v3/jobs/:id` : atualização de vaga específica (Nessa rota, é necessário enviar apenas o campo que deseja atualizar, e não o objeto inteiro.
Por exemplo, se desejar atualizar o campo "education", deve ser enviado apenas { "education": "\<novo valor\>" }

## Notas adicionais e observações

* Job está com o atributo createdAt como string no banco de dados (proposital?)
* Jobs possui 3 propriedades de ativo: *isActive*,  *active* e *open*. Utilizei apenas o *active* para indicar que o trabalho está disponível
* Jobs possui description e descriptions: Utilizei o description pois os registros no banco estavam com esse campo preenchido, apesar de o outro fazer mais sentido,
já que é um array
* Modifiquei a fábrica de erros de validação dos DTOs, pois não era especificado o que se esperava de um campo. Por exemplo, caso um campo devesse ser
uma string em vez de um número, isso não ficava explícito na mensagem de retorno
