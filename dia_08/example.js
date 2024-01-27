const url =
  'http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Joao,Maria';

const params = url.split('?')[1];
const values = params.split('&');

for (let index = 0; index < values.length; index++) {
  if (values[index].startsWith('atores=')) {
    values[index] = 'atores=' + values[index].substring(7).toUpperCase();
    console.log(values[index]) // atores=LUCAS,JOAO,MARIA
  }
}
