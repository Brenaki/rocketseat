# English

## Challenge 01

### To Run the Project

#### Ubuntu

- Install NodeJs
```bash
sudo apt install nodejs
```

- Clone the repository
```bash
git clone https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge
```

- Install the packages and run the project
```bash
cd Challenge
npm i
npm run dev
```

- Open another terminal, navigate to the ['execute'](https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge/execute) folder, and run the .bash script
```bash
cd execute
./upload-data.bash
```

- This will insert the data from [tasks.csv](https://github.com/Brenaki/rocketseat/blob/main/NodeJs/classes/01-nodeFundaments/Challenge/tasks.csv) into the database.

> If the data is not inserted into the database, go back to the root folder of the project and run the command `node stream/fake-upload-to-http-csv.js`.

#### Windows

- Install [NodeJs](https://nodejs.org/en/download/prebuilt-installer/current)

- Clone the repository
```cmd
git clone https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge
```

- Install the packages and run the project
```cmd
cd Challenge
npm i
npm run dev
```

- Open another terminal, navigate to the ['execute'](https://github.com/Brenaki/rocketseat/tree/main/NodeJs/classes/01-nodeFundaments/Challenge/execute) folder, and run the .bat or .ps1 script
```cmd
cd execute
./upload-data.bat
```

- This will insert the data from [tasks.csv](https://github.com/Brenaki/rocketseat/blob/main/NodeJs/classes/01-nodeFundaments/Challenge/tasks.csv) into the database.

> If the data is not inserted into the database, go back to the root folder of the project and run the command `node stream/fake-upload-to-http-csv.js`.

#### About the Challenge

In this challenge, you will develop an API to perform CRUD operations on your *tasks*.

Routes:

- [X] `POST - /tasks`
- [X] `GET - /tasks`
- [X] `PUT - /tasks/:id`
- [X] `DELETE - /tasks/:id`
- [X] `PATCH - /tasks/:id/complete`

#### Reference Repository

Before accessing the [repository](https://github.com/rocketseat-education/ignite-nodejs-01-fundamentos-nodejs-challenge) with the completed challenge, we strongly recommend attempting the challenge yourself.

--- 

Essa tradução mantém o conteúdo técnico e informativo de forma clara.


# Portuguese

## Desafio 01

### Para executar o projeto

#### Ubuntu

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

#### Windows

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

#### Sobre o desafio

Nesse desafio você desenvolverá uma API para realizar o CRUD de suas *tasks* (tarefas).

Rotas:

- [X] `POST - /tasks`
- [X] `GET - /tasks`
- [X] `PUT - /tasks/:id`
- [X] `DELETE - /tasks/:id`
- [X] `PATCH - /tasks/:id/complete`

#### Repositório de consulta

Antes de acessar o [repositório](https://github.com/rocketseat-education/ignite-nodejs-01-fundamentos-nodejs-challenge) com o desafio concluído, recomendamos fortemente que tente realizar o desafio.
