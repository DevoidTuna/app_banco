import ContaCorrente from "./conta_corrente"
import ContaPoupanca from "./conta_poupanca"

export default class Usuario {
    constructor(cpf, nome) {
        this.id = Usuario.numeroUsuarios
        this.cpf = cpf
        this.nome = nome
        this.contaCorrente = null
        this.contaPoupanca = null

        Usuario.numeroUsuarios++
    }

    static numeroUsuarios = 0

    criarContaPoupanca() {
        if(this.contaPoupanca == null) {
            this.contaPoupanca = new ContaPoupanca(2000 + this.id)
            return true
        } else {
            return false
        }
    }

    criarContaCorrente() {
        if(this.contaCorrente == null) {
            this.contaCorrente = new ContaCorrente(1000 + this.id)
            return true
        } else {
            return false
        }
    }
}