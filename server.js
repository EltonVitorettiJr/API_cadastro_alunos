import express from 'express'
//import { openDb } from './configdb.js'
import { createTable } from './Controller/Aluno.js';
import { insertAluno } from './Controller/Aluno.js';

const app = express();
app.use(express.json());

createTable();

const alunos = []

app.post('/alunos', (req, res) => {

    insertAluno(req.body);
    res.status(201).json(req.body);

});

app.get('/alunos', (req, res) => {

    res.status(200).json(alunos);

});

app.listen(3000)

/*

- cadastrar um aluno com seu curso
- listar alunos
- editar alunos
- deletar alunos

*/