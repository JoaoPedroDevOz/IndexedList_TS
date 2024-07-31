export default class NodeIList {
    element: string | number;
    next: null;
    constructor(element: string | number) {
        this.element = element;
        this.next = null;
    }
}