import Usuario from "./usuario"
import ContaPoupanca from "./conta_poupanca"
import ContaCorrente from "./conta_corrente"
import Conta from "./conta"

const Apresentação = `Bem vindo ao script básico de banco. Caso precise de ajuda, digite: ajuda()\n`

const ajuda = () =>
        console.log(`
        Acessar o Usuário -> listaUsuarios[n°ID] {alterar n°ID pelo número do ID}.
        -----------------
        criarUsuario(CPF, 'nome') -> Retornará o ID do Usuário caso seu CPF já esteja cadastrado,
        ou criará um novo Usuário.
        -----------------
        CPFouIDrUsuario(CPF ou ID) -> CPFouID irá o Usuário com o CPF ou o ID cadastrado.
        -----------------
        Usuario.criarContaCorrente() -> Caso o Usuário já tenha Conta Corrente, retornará o ID da sua Conta,
        caso o Usuário não tenha, será criada uma Conta Corrente com o saldo de R$ 1050.
        -----------------
        Usuario.criarContaPoupanca() -> Caso o Usuário já tenha Conta Poupança, retornará o ID da sua Conta,
        caso o Usuário não tenha, será criada uma Conta Poupança com o saldo de R$ 480.
        -----------------
        Usuario.ContaCorrente.transferencia(valor, n°ContaDoDestinatario) -> Transferências apenas de Contas
        Correntes para qualquer tipo de Conta, ao qual informa o valor da transferência em "valor" e o n° da
        Conta do Destinatário.
        EX: listaUsuarios[ID].ContaCorrente.transferencia(100, 2003) - {transferido R$ 100 para a Conta 2003}.
        -----------------
        Usuario.ContaXXX.deposito(valor) -> Deposita o "valor" na Conta informada.
        -----------------
        Usuario.ContaXXX.saque(valor) -> Saca o "valor" da Conta informada.
        \n\n`
)

console.log(Apresentação)

export const listaUsuarios = []

function criarUsuario(cpf = null, nome = null) {
    let filtro = listaUsuarios.filter(usuario => cpf == usuario.cpf)

    if(cpf == null || nome == null) {
        throw new Error('Gentileza chamar a função informando dentro dos parênteses seu CPF e NOME.')
    } else if(filtro.length == 0) {
        listaUsuarios.push(
            new Usuario(cpf, nome)
        )
        return true
    } else {
        throw new Error('Usuário já tem conta no sistema.')
    }
}

function _encontraUsuario(CPFouID) {
    let filtro = listaUsuarios.filter(usuario => CPFouID == usuario.id || CPFouID == usuario.cpf)

    if(filtro.length == 1) {
        return filtro[0]
    } else if (CPFouID == undefined) {
        throw new Error('Gentileza informar CPF ou ID do usuário.')
    } else {
        throw new Error('Usuário não encontado.')
    }
}

function deletarUsuario(CPFouID) {
    try {
        listaUsuarios.splice(listaUsuarios.indexOf(_encontraUsuario(CPFouID)), 1)
    } catch (error) {
        console.log(error)
    }
}

function buscarUsuario(CPFouID) {
    try {
        return listaUsuarios[listaUsuarios.indexOf(_encontraUsuario(CPFouID))]
    } catch (error) {
        console.log(error)
    }
}

// Criando 30 cadastros para teste
let n = 0
for(let cpf = 100; cpf < 131; cpf++) {
    
    let nome = 'teste' + n
    criarUsuario(cpf, nome)
    n++
}
