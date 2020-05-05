const openers = ['[', '{', '('];
const closers = [']', '}', ')'];

function hasMatch(cmp1, cmp2) {
  if (
    (cmp1 == '[' && cmp2 == ']') ||
    (cmp1 == '{' && cmp2 == '}') ||
    (cmp1 == '(' && cmp2 == ')')
  ) {
    return true;
  }
  return false;
}
function valid(brackets) {
  let result = false;
  let b = brackets.split('');
  let idPais = [];
  let idPai = 0;
  let tree = [];

  for (let i = 0; i < b.length; i++) {
    let item_id = i + 1; // gera id
    let idUltimoPai = idPais.length > 0 ? Math.max(...idPais) : 0; // último id pai
    let idxUltimoPais =
      idPais.length > 0 ? idPais.findIndex(id => id === idUltimoPai) : 0; // último index do array idPais
    let idxUltimoPai =
      idPais.length > 0 ? tree.findIndex(t => t.id === idUltimoPai) : 0; // último index do array tree

    if (openers.indexOf(b[i]) !== -1) {
      // é um opener(pai)
      idPai = idPais.length > 0 ? idUltimoPai : idPai;
      if (idPais.indexOf(item_id) === -1) {
        // ja foi cadastrado ?
        idPais.push(item_id); // sim! Adicionado a lista de pais
      }
      tree.push({
        id: item_id,
        pai: idPai,
        valor: b[i]
      });
      result = true;
    } else {
      if (hasMatch(tree[idxUltimoPai].valor, b[i])) {
        tree.push({
          id: item_id,
          pai: tree[idxUltimoPai].pai, // mesmo pai do match
          valor: b[i]
        });
        idPais.splice(idxUltimoPais, 1);
        idPai = 0;
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }
  if (idPais.length) {
    result = false;
  }

  return result;
}
