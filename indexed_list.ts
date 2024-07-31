import NodeIList from "./NodeIList";

class List {
    head: any;
    constructor() {
        this.head = null;
    }

    searchElement(element: string | number): Boolean {
        let pointer: any = this.head;

        while (pointer && element != pointer.element) {
            pointer = pointer.next;
        }
        return pointer;
    }

    insertingValues(array: string[] | number[]): Boolean {
        array.forEach(element => {
            if (this.searchElement(element)) {
                return false;
            } 
            let newNode = new NodeIList(element)

            if (!this.head || element < this.head.element) {
                newNode.next = this.head;
                this.head = newNode;
            } 
            else {
                let pointer = this.head;
                while(pointer.next && element > pointer.next.element) {
                    pointer = pointer.next;
                }
                newNode.next = pointer.next;
                pointer.next = newNode;
            }
        });
        return true;
    }

    printList() {
        let pointer = this.head;
        while (pointer) {
            console.log(pointer.element);
            pointer = pointer.next;
        }
    }

    removeValues(element: string | number) {
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
    }
}

const lista1 = new List
let arrayword = ["arroz", "feijao", "açucar", "arroz"]
lista1.insertingValues(arrayword)
lista1.removeValues("açucar")
lista1.printList()
