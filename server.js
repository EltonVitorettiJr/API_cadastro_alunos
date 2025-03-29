import express from 'express'
import { createTable, insertAluno, updateAluno, selectAlunos, selectAluno, deleteAluno } from './Controller/Aluno.js';

const app = express();
app.use(express.json());

createTable();

const alunos = []

app.post('/alunos', (req, res) => {

    insertAluno(req.body);
    res.status(201).json(req.body);

});

app.put('/alunos', (req, res) => {
    
    if(req.body && !req.body.id) {
        return res.status(400).json({
            "msg": "Você precisa informar um id"
        })
    } else {
        updateAluno(req.body);
        res.status(200).json(req.body);
    }

});

app.get('/alunos', async (req, res) => {

    const alunos = await selectAlunos();
    res.status(200).json(alunos);

});

app.get('/alunos/:id', async (req, res) => {

    let aluno = await selectAluno(req.params.id);
    res.status(200).json(aluno);

});

app.delete('/alunos/:id', async (req, res) => {
    
    let aluno = await deleteAluno(req.params.id);
    res.status(200).json(aluno);

});

app.listen(3000)

/*

- cadastrar um aluno com seu curso
- listar alunos
- editar alunos
- deletar alunos

*/