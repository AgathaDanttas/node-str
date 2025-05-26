//colocando o javaScript para ficar mais criterioso
'use strict';

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port) //setando a porta

const server = http.createServer(app);//criando o servidor

server.listen(port); //aqui diz para o servidor ficar ouvindo nessa porta
server.on('error', onError);
server.on('listening ',onListening);

console.log('Api rodando na porta ' + port);

//função para validar se a porta está disponível
/*na função normalizePort, recebe como parâmetro um valor, converte o valor  um número inteiro, na primeira condição, se o valor não for um número ele retorna 10, se a port for maior ou igual a zero retorna a port */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;    
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// Função para tratar erros ao iniciar o servidor.
// Verifica se o erro está relacionado ao 'listen' e trata casos comuns:
// - EACESS: porta requer permissões elevadas.
// - EADDRINUSE: porta já está em uso.
// Encerra o processo em caso de erro crítico.
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;
    
    switch (error.code) {
        case 'EACESS':
            console.error(bind + ' requires elevatedprivileges')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
        
    }
}

// indicar que o servidor iniciou com sucesso, obtém o endereço/porta e imprime essa informação no console via debug()
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listing on ' + bind);
}