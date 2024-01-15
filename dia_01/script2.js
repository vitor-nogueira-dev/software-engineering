let rlSync = require('readline-sync');
let nome = rlSync.question('Qual é o seu nome?\n');
let idade = rlSync.question('Qual é a sua idade?\n');

console.log(`Olá, ${nome}.\nVocê tem ${idade} anos.`);