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

export async function updateAluno(aluno) {
    return openDb().then(db => {
        return db.run('UPDATE Aluno SET nome=?, curso=?, idade=? WHERE id=?', [aluno.nome, aluno.curso, aluno.idade, aluno.id]);
    });
}

export async function selectAlunos() {
    return openDb().then(db => {
        return db.all('SELECT * FROM Aluno')
    });
}

export async function selectAluno(id) {
    return openDb().then(db => {
        return db.get('SELECT * FROM Aluno WHERE id=?', [id]);
    });
}

export async function deleteAluno(id) {
    return openDb().then(db => {
        return db.get('DELETE FROM Aluno WHERE id=?', [id]);
    });
}