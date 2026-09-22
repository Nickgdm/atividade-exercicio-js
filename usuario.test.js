const { verificarMaiorIdade, validarEmail, usuarioAtivo, validarCadastro } = require("./usuario.js");
// Usuários base
const usuario = { nome: "Carlos", idade: 20, email: "carlos@email.com", ativo: true }
const usuarioInvalido = { nome: "Ana", idade: 16, email: "anaemail.com", ativo: false }
// Usuários extras
const usuarioInvalidoIdade = { nome: "User1", idade: 16, email: "user@email.com", ativo: true }
const usuarioInvalidoEmail = { nome: "User2", idade: 50, email: "useremail.com", ativo: true }
const usuarioInvalidoAtivo = { nome: "User3", idade: 18, email: "user@email.com", ativo: false }

describe('Verificando idade do usuário', () => {
    test('Deve verificar idade do usuário (18 anos)', () => {
        expect(verificarMaiorIdade(18)).toBe(true)
    });
    test('Deve verificar idade do usuário (menor de 18 anos)', () => {
        expect(verificarMaiorIdade(17)).toBe(false)
    });
    test('Deve verificar idade do usuário (maior de 18 anos)', () => {
        expect(verificarMaiorIdade(19)).toBe(true)
    });
});

describe('Verificando validez do email', () => {
    test('Deve retornar true para email válido', () => {
        expect(validarEmail('teste@teste.com')).toBe(true) // eu pensei em usar .toContain('@') mas optei por manter assim
    });
    test('Deve retornar false para email inválido', () => {
        expect(validarEmail('testeteste.com')).toBe(false)
    });
});

describe('Verificando validez do status ativo', () => {
    test('Deve retornar true para status ativo de usuário válido', () => {
        expect(usuarioAtivo(usuario)).toBe(true)
    });
    test('Deve retornar false para status ativo de usuário inválido', () => {
        expect(usuarioAtivo(usuarioInvalido)).toBe(false)
    });
});

describe('Validando cadastro do usuário', () => {
    test('Deve retornar true para cadastro válido', () => {
        expect(validarCadastro(usuario)).toBe(true)
    });
    test('Deve retornar false para cadastro inválido', () => {
        expect(validarCadastro(usuarioInvalido)).toBe(false)
    });
    test('Deve retornar false para cadastro inválido de idade', () => {
        expect(validarCadastro(usuarioInvalidoIdade)).toBe(false)
    });
    test('Deve retornar false para cadastro inválido de email', () => {
        expect(validarCadastro(usuarioInvalidoEmail)).toBe(false)
    });
    test('Deve retornar false para cadastro inválido de status', () => {
        expect(validarCadastro(usuarioInvalidoAtivo)).toBe(false)
    });
});