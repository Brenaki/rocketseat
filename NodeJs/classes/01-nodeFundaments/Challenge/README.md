# Desafio 01

## Para executar o projeto

### Ubuntu

- Instale o NodeJs
```bash
sudo apt install nodejs
```

- Clone o reposítorio
```bash
git clone https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge
```

- Baixe os pacotes e execute o projeto
```bash
cd Challenge
npm i
npm run dev
```

- Abra outro terminal entre na pasta ['execute'](https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge/execute) e execute o .bash
```bash
cd execute
./upload-data.bash
```

- Assim os dados do [tasks.csv](https://github.com/Brenaki/rocketseat/blob/main/NodeJs/classes/01-nodeFundaments/Challenge/tasks.csv) vão ser inseridos no banco de dados

> Caso não seja inserido os dados no banco de dados. Volte para a pasta raiz do projeto execute o comando `node stream/fake-upload-to-http-csv.js`

### Windows

- Instale o [NodeJs](https://nodejs.org/en/download/prebuilt-installer/current)

- Clone o reposítorio
```cmd
git clone https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge
```

- Baixe os pacotes e execute o projeto
```cmd
cd Challenge
npm i
npm run dev
```

- Abra outro terminal entre na pasta ['execute'](https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge/execute) e execute o .bat ou .ps1
```cmd
cd execute
./upload-data.bat
```

- Assim os dados do [tasks.csv](https://github.com/Brenaki/rocketseat/blob/main/NodeJs/classes/01-nodeFundaments/Challenge/tasks.csv) vão ser inseridos no banco de dados

> Caso não seja inserido os dados no banco de dados. Volte para a pasta raiz do projeto execute o comando `node stream/fake-upload-to-http-csv.js`

### Sobre o desafio

Nesse desafio você desenvolverá uma API para realizar o CRUD de suas *tasks* (tarefas).

Rotas:

- [X] `POST - /tasks`
- [X] `GET - /tasks`
- [X] `PUT - /tasks/:id`
- [X] `DELETE - /tasks/:id`
- [X] `PATCH - /tasks/:id/complete`

### Repositório de consulta

Antes de acessar o [repositório](https://github.com/rocketseat-education/ignite-nodejs-01-fundamentos-nodejs-challenge) com o desafio concluído, recomendamos fortemente que tente realizar o desafio.
