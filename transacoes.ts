import { Transacao } from "./transacao";

export class Transacoes {
    private transacoesTransferencia: Transacao[] = [];
    private transacoesDeposito: Transacao[] = [];

    add(transacao: Transacao) {
        if (transacao.tipoTransacao == 'Depósito') {
            this.transacoesDeposito.push(transacao)
        }

        if (transacao.tipoTransacao === 'Transferência') {
            this.transacoesTransferencia.push(transacao)
        }
    }

    listaTranferencias(): readonly Transacao[] {
        console.log(this.transacoesTransferencia)
        return this.transacoesTransferencia;
    }

    listaDepositos(): readonly Transacao[] {
        console.log(this.transacoesDeposito)
        return this.transacoesDeposito;
    }
}