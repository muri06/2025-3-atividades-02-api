const axios = require('axios');

const tarefasExemplo = [
  { title: 'Estudar NestJS', description: 'Completar tutorial básico do NestJS', status: 'fazendo' },
  { title: 'Implementar CRUD', description: 'Criar operações básicas de Create, Read, Update, Delete', status: 'finalizado' },
  { title: 'Configurar banco de dados', description: 'Configurar TypeORM com SQLite', status: 'finalizado' },
  { title: 'Adicionar validações', description: 'Implementar validações com class-validator', status: 'aberto' },
  { title: 'Criar testes', description: 'Escrever testes unitários para o service', status: 'aberto' }
];

async function popularBanco() {
  console.log('Iniciando população do banco de dados...');
  for (let i = 0; i < tarefasExemplo.length; i++) {
    try {
      const response = await axios.post('http://localhost:3000/tasks', tarefasExemplo[i]);
      console.log(`Tarefa ${i + 1} criada:`, response.data.title);
    } catch (error) {
      console.error(`Erro ao criar tarefa ${i + 1}:`, error.message || error);
    }
  }
  console.log('População do banco concluída!');
}

popularBanco();
