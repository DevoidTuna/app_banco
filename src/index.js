import Usuario from "./usuario"
import ContaPoupanca from "./conta_poupanca"
import ContaCorrente from "./conta_corrente"

const Apresentação = `Bem vindo ao script básico de banco. Caso precise de ajuda, digite: ajuda()\n`

const ajuda = () =>
        console.log(`
        Acessar o Usuário -> listaUsuarios[n°ID] {alterar n°ID pelo número do ID}.
        -----------------
        criarUsuario(CPF, 'nome') -> Retornará o ID do Usuário caso seu CPF já esteja cadastrado,
        ou criará um novo Usuário.
        -----------------
        cpfOuIDrUsuario(CPF ou ID) -> cpfOuID irá o Usuário com o CPF ou o ID cadastrado.
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

const listaUsuarios = []

function criarUsuario(cpfInformado, nome) {
    let filtro = listaUsuarios.filter(usuario => cpfInformado == usuario.cpf)

    if(filtro.length == 0) {
        listaUsuarios.push(
            new Usuario(cpfInformado, nome)
        )
        // Usuario.numeroUsuarios++
        return true
    } else if(cpfInformado == undefined || nome == undefined) {
        throw new Error('Gentileza chamar a função informando dentro dos parênteses seu CPF e NOME.')
    } else {
        throw new Error('Usuário já tem conta no sistema.')
    }
}

function buscaUsuario(cpfOuID) {
    let filtro = listaUsuarios.filter(usuario => cpfOuID == usuario.id || cpfOuID == usuario.cpf)

    try {
        if(filtro.length == 1) {
            return filtro[0]
        } else {
            throw new Error('Usuário não encontado.')
        }
    } catch (error) {
        console.log(error)
    }
}

let n = 0
for(let cpf = 100; cpf < 131; cpf++) {
    
    let nome = 'teste' + n
    criarUsuario(cpf, nome)
    n++
}

console.log(buscaUsuario(30))
console.log(buscaUsuario(20))
console.log(buscaUsuario(10))

console.log(listaUsuarios)
