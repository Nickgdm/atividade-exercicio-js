# Testes Unitários com JavaScript e Jest

Projeto de testes unitários desenvolvido durante a formação em Quality Assurance (QA) na EBAC. A atividade usa funções de validação de cadastro de usuário para praticar testes automatizados e análise de cobertura.

## Objetivos
- Validar o comportamento das funções implementadas em JavaScript.
- Criar cenários para diferentes entradas e resultados esperados.
- Praticar testes de caixa branca e análise de cobertura.

## Tecnologias
- JavaScript
- Node.js e npm
- Jest

## Pré-requisitos
- Node.js e npm instalados.

## Instalação e execução
```bash
npm install
npm test
```
Consulte `package.json` para os scripts disponíveis. A pasta `coverage` contém artefatos de cobertura versionados, quando presentes.

## Estrutura do projeto
```text
atividade-exercicio-js/
├── usuario.js
├── usuario.test.js
├── package.json
├── package-lock.json
├── coverage/
└── README.md
```

## Desafios práticos
Definir testes para as funções de usuário, cobrir diferentes caminhos de execução e conferir se os resultados correspondem às regras implementadas.

## Boas práticas adotadas
- Separação entre implementação e arquivo de testes.
- Cenários automatizados executáveis por comando.
- Uso de cobertura como apoio à análise, sem tratá-la isoladamente como garantia de qualidade.

## 📚 Aprendizados
Esta atividade permitiu praticar a criação de testes automatizados com Jest, desde a definição dos cenários até a análise da cobertura de código. Também foram aplicados conceitos de **caixa branca**, observando condições e decisões da implementação para exercitar diferentes caminhos do código.

## Considerações finais
O projeto é um exercício educacional de testes unitários. Para avaliar sua cobertura e comportamento, execute os testes no ambiente local e consulte os relatórios gerados.

---

## 🎓 Formação
Atividade desenvolvida durante a formação profissionalizante em **Quality Assurance (QA) pela EBAC — Escola Britânica de Artes Criativas e Tecnologia**.