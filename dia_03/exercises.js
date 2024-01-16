const minimumAge = 20; // + do que 20 anos
const minumiumExperience = 6; // Mínimo 6 meses
const minimunEducation = 'Em andamento' || 'Concluído'; // Em andamento ou Concluído
const isCertified = false; // Pode ou não ter

function validateCandidates(age, experience, education, isCertified) {
  if (!age || !experience || !education) {
    return 'É necessário informar todos os parâmetros para validar o candidato.';
  }
  let points = 0;
  if (age >= minimumAge) {
    points++;
  }
  if (experience >= minumiumExperience) {
    points++;
  }
  if (education === 'Em andamento' || education === 'Concluído') {
    points++;
  }
  if (isCertified === false || isCertified === true) {
    points++;
  }

  return points >= 4
    ? 'Candidato passou para próxima fase'
    : 'Candidato não passou para a próxima fase';
}

const result = validateCandidates(20, 6, 'Em andamento', false);
console.log(result, '-- Aprovado');

const result2 = validateCandidates(19, 6, 'Em andamento', true);
console.log(result2, '-- Reprovado');
