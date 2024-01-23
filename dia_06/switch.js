const votingAge = 14;
function categorizeAge(age) {
  if (age < 16) {
    return 'UNDER_16';
  } else if (age >= 16 && age < 18) {
    return 'BETWEEN_16_AND_18';
  } else if (age >= 18 && age < 65) {
    return 'BETWEEN_18_AND_65';
  } else {
    return 'OVER_65';
  }
}

switch (categorizeAge(votingAge)) {
  case 'UNDER_16':
    console.log('Você não pode votar');
    break;
  case 'BETWEEN_16_AND_18':
    console.log('Você já pode votar, mas não é obrigatório');
    break;
  case 'BETWEEN_18_AND_65':
    console.log('Você já pode votar e é obrigatório');
    break;
  case 'OVER_65':
    console.log('Você já pode votar, mas não é obrigatório');
    break;
}
console.log('Fim do programa');
