const sum = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2
const mult = (n1, n2) => n1 * n2
const div = (n1, n2) => (n2 === 0) ? 'Não da pra dividir por Zero!' : n1 / n2

export { sum, sub, mult, div }