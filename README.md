<h1 align="center">Tag-app</h1>
<p align="center">Projeto teste que mostra a análise das avaliações de livros no app e no site GoodReads.</p>

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina: <br />
Git na sua máquina para clonar o projeto: [Git](https://git-scm.com)<br />
Um gerenciador de pacotes (Yarn ou NPM, no meu caso Yarn): [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) <br />
Se possível, ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
<br />

## 🎲 Rodando a aplicação
Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:
```shell
cd "diretorio de sua preferencia"
git clone https://github.com/ogawaluan/Tag-app.git
```
<br />

## Rodando o proxy
<br />

#### Vá para o diretório do servidor:
```shell
cd "diretorio do projeto/servidor_proxy"
```

#### Instale as Dependências:
```shell
yarn install
```

#### Inicie o servidor:
```shell
yarn start
```
### O servidor iniciará na porta 3333
<br />

## Rodando o Front-end
<br />

##### Vá para o diretório do front-end:
```shell
cd "diretorio do projeto/frontend"
```

#### Instale as Dependências:
```shell
yarn install
```

#### Inicie o servidor:
```shell
yarn start
```

### O servidor iniciará na porta 3000
### Acesse: http://localhost:3000
<br />

## Para rodar os testes
```shell
yarn test
```
