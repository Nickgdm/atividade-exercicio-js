// Objeto representando um usuário válido
// Este usuário deve passar na validação final
const usuario = {
  nome: "Carlos",
  idade: 20,
  email: "carlos@email.com",
  ativo: true
}

// Objeto representando um usuário inválido
// Este usuário NÃO deve passar na validação final
const usuarioInvalido = {
  nome: "Ana",
  idade: 16,
  email: "anaemail.com",
  ativo: false
}

// DESAFIO
// Implemente esta função para verificar se o usuário é maior de idade.
//
// Regras:
// - Deve retornar true se a idade for maior ou igual a 18
// - Caso contrário, retornar false
//
// Exemplo:
// verificarMaiorIdade(20) -> true
// verificarMaiorIdade(15) -> false
function verificarMaiorIdade(idade) {
  return idade >= 18
}

// Função pronta
// Esta função verifica se o email possui o caractere "@"
function validarEmail(email) {
  return email.includes("@")
}

// DESAFIO
// Implemente esta função para verificar se o usuário está ativo.
//
// Regras:
// - Deve retornar true se o usuário estiver ativo
// - Caso contrário, retornar false
//
// Dica: utilize a propriedade "ativo" do objeto usuário
function usuarioAtivo(usuario) {
  return Boolean(usuario.ativo)
}

// Esta função combina todas as validações do cadastro
// Ela só retorna true se TODAS as regras forem válidas
function validarCadastro(usuario) {

  const maiorIdade = verificarMaiorIdade(usuario.idade)
  const emailValido = validarEmail(usuario.email)
  const ativo = usuarioAtivo(usuario)

  // operador lógico AND (&&)
  // todas as condições precisam ser verdadeiras
  return maiorIdade && emailValido && ativo
}

// Execução no console para validar o exercício
// Após implementar as funções, execute:
//
// node usuario.js
//
// Resultado esperado:
// Usuário 1 válido? true
// Usuário 2 válido? false

console.log("Usuário 1 válido?", validarCadastro(usuario))
console.log("Usuário 2 válido?", validarCadastro(usuarioInvalido))

// NÃO ALTERAR
// Essas exportações serão usadas no próximo módulo
// para criar testes automatizados com Jest
module.exports = {
  verificarMaiorIdade,
  validarEmail,
  usuarioAtivo,
  validarCadastro
}