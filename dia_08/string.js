const nome = 'Vitor Samuel Leonel Nogueira';

nome.length; // 30
nome.charAt(0); // V
nome.toUpperCase(); // VITOR SAMUEL LEONEL NOGUEIRA
nome.toLowerCase(); // vitor samuel leonel nogueira
nome.indexOf('Nogueira'); // 24
nome.indexOf('nogueira'); // -1
nome.lastIndexOf('e'); // 29
nome.substring(0, 5); // Vitor
nome.substring(6); // Samuel Leonel Nogueira
nome.replace('Vitor', 'Vitor Samuel'); // Vitor Samuel Samuel Leonel Nogueira
nome.replace(/ /g, '-'); // Vitor-Samuel-Leonel-Nogueira
nome.replace(/-/g, ''); // VitorSamuelLeonelNogueira
nome.replace(/-/g, ' '); // Vitor Samuel Leonel Nogueira
nome.split(' '); // ["Vitor", "Samuel", "Leonel", "Nogueira"]
nome.split(' ')[0]; // Vitor
nome.slice(-7); // Nogueira
nome.slice(0, -8); // Vitor Samuel Leonel
nome.charCodeAt(0); // 86 -> Código da tabela ASCII
nome.endsWith('Nogueira'); // true
nome.includes('Samuel'); // true
nome.repeat(2); // Vitor Samuel Leonel NogueiraVitor Samuel Leonel Nogueira
nome.padStart(50, '-'); // --------------------------------Vitor Samuel Leonel Nogueira -> o método padStart() preenche a string com o caractere especificado, no início da string, até que a string atinja o tamanho fornecido. O preenchimento é aplicado antes do primeiro caractere da string.
nome.padEnd(50, '-'); // Vitor Samuel Leonel Nogueira-------------------------------- -> o método padEnd() preenche a string com o caractere especificado, no final da string, até que a string atinja o tamanho fornecido. O preenchimento é aplicado após o último caractere da string.
nome.trim(); // Vitor Samuel Leonel Nogueira -> o método trim() remove os espaços em branco do início e/ou fim de um texto.
nome.trimStart(); // Vitor Samuel Leonel Nogueira -> o método trimStart() remove os espaços em branco do início de um texto.
nome.trimEnd(); // Vitor Samuel Leonel Nogueira -> o método trimEnd() remove os espaços em branco do fim de um texto.
nome.concat(' ', 'é', ' ', 'legal'); // Vitor Samuel Leonel Nogueira é legal -> o método concat() concatena a string especificada com o texto que foi passado como parâmetro.
nome.match(/[a-z]/g); // ["i", "t", "o", "r", "a", "m", "u", "e", "l", "e", "o", "n", "e", "l", "o", "g", "u", "e", "i", "r", "a"] -> o método match() retorna um array contendo as correspondências, ou null caso não haja nenhuma.
nome.search(/[a-z]/g); // 1 -> o método search() executa uma busca por uma correspondência entre uma expressão regular e esta String. E retorna a posição da primeira correspondência encontrada na string, ou -1 se nenhuma correspondência for encontrada.
nome.search(/[0-9]/g); // -1
