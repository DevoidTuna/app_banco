export default class Conta {
    constructor(id) {
        this.id = id
    }

    deposito(valor) {
        this.saldo += valor
        return true
    }

    saque(valor) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }
}