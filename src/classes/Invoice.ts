export class Invoice{
    private _client : string;
    private _details : string;
    private _amount : number;


    constructor(client: string, details: string, amount: number) {
        this._client = client;
        this._details = details;
        this._amount = amount;
    }

    format(){
        return `${this._client} owes $${this._amount} for ${this._details}`;
    }


    get client(): string {
        return this._client;
    }

    set client(value: string) {
        this._client = value;
    }

    get details(): string {
        return this._details;
    }

    set details(value: string) {
        this._details = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}