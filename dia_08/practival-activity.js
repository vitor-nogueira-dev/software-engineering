const names = ['John', 'Jane', 'Mark', 'Bob Markle', 'Betsy'];
const nameLengths = (name) => (name.length < 5 ? name.toUpperCase() : name);
const mappedNames = names.map(nameLengths);

console.log(mappedNames); // [ 'JOHN', 'JANE', 'MARK', 'Bob Markle', 'Betsy' ]
