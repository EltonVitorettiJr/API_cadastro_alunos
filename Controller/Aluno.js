import { openDb } from "../configdb.js";

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Aluno ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, curso TEXT NOT NULL, idade INTEGER NOT NULL);')
    });
}

export async function insertAluno(aluno) {
    openDb().then(db => {
        db.run('INSERT INTO Aluno (nome, curso, idade) VALUES (?, ?, ?)', [aluno.nome, aluno.curso, aluno.idade]);
    });
}