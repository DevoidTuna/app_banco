import Conta from './conta'

export default class ContaPoupanca extends Conta {
    constructor(id) {
        super(id)
        this.saldo = 480
    }
}