import Conta from './conta'
import { listaUsuarios } from '.'

export default class ContaCorrente extends Conta {
    constructor(id) {
        super(id)
        this.saldo = 1050
    }

    transferencia(valor, destinatarioConta) {
        let filtroCorrente = listaUsuarios.filter(conta => (conta.contaCorrente != null) && destinatarioConta == conta.contaCorrente.id)
        let filtroPoupanca = listaUsuarios.filter(conta => (conta.contaPoupanca != null) && destinatarioConta == conta.contaPoupanca.id)

        if(filtroCorrente.length > 0 || filtroPoupanca.length > 0) {

            if(valor <= this.saldo) {
                if(filtroCorrente.length > 0) {
                    filtroCorrente[0].contaCorrente.deposito(valor)

                } else if(filtroPoupanca.length > 0) {
                    filtroPoupanca[0].contaPoupanca.deposito(valor)
                }
                this.saque(valor)
                return true

            } else if(valor >= this.saldo) {
                return false
            }
        } else {
            return 'Conta do destinatário não encontrada, gentileza conferir as informações.'
        }
    }
}