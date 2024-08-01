import { Transacoes } from './transacoes';
import NodeIList from "./NodeIList";
import { Transacao } from "./transacao";

class List {
    head: any;
    constructor() {
        this.head = null;
    }

    searchElement(element: Transacao): Boolean {
        let pointer: any = this.head;

        while (pointer && element != pointer.element) {
            pointer = pointer.next;
        }
        return pointer;
    }

    insertingValues(element: Transacao): Boolean {
        if (this.searchElement(element)) {
            return false;
        }
        let newNode = new NodeIList(element)

        if (!this.head || element.id < this.head.element.id) {
            newNode.next = this.head;
            this.head = newNode;
        } 
        else {
            let pointer = this.head;
            while(pointer.next && element.id > pointer.next.element.id) {
                pointer = pointer.next;
            }
            newNode.next = pointer.next;
            pointer.next = newNode;
        }
        return true;
    }

    printList() {
        let pointer = this.head;
        while (pointer) {
            console.log(pointer.element);
            pointer = pointer.next;
        }
    }

    removeValues(element: Transacao) {
        if (!this.searchElement(element)) {
            return false;
        }
        let pointer: any = this.head;
        if (pointer && element == pointer.element) {
            pointer = pointer.next;
        } 
        else {
            while (pointer.next && element != pointer.next.element) {
                pointer = pointer.next
            }
            if (pointer.next) {
                pointer.next = pointer.next.next;
            }
        }
        return true;
    };
};

// const lista1 = new List;
const array: Transacao = new Transacao(1, "joão", 200, "Depósito");
const array2: Transacao = new Transacao(2, "pedro", 200, "Depósito");
const array3: Transacao = new Transacao(3, "dany", 200, "Depósito");
const array4: Transacao = new Transacao(4, "lu", 200, "Transferência");


// lista1.insertingValues(array);
// lista1.insertingValues(array2);
// lista1.insertingValues(array3);
// lista1.removeValues(array2);
// lista1.printList();

const lista2 = new Transacoes
lista2.add(array)
lista2.add (array2)
lista2.add (array3)
lista2.add (array4)

lista2.listaDepositos()
lista2.listaTranferencias()
