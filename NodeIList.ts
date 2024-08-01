import { Transacao } from './transacao';
export default class NodeIList {
    element: Transacao;
    next: null;
    constructor(element: Transacao) {
        this.element = element;
        this.next = null;
    }
}