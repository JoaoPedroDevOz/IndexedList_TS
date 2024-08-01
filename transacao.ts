export class Transacao {
    constructor(
        private readonly _id: number,
        private readonly _nome: string,
        //private _dataNascimento: Date,
        private readonly _valor: number,
        private readonly _tipoTransacao: string
    ) {}
    
    public get id() : number {
        return this._id
    }
    
    public get nome() : string {
        return this._nome
    }
        
    // public get dataNascimento() : Date {
    //     const data = new Date(this._dataNascimento.getTime());
    //     return data;
    // }

    public get valor() : number {
        return this._valor
    }

    public get tipoTransacao() : string {
        return this._tipoTransacao
    }
}