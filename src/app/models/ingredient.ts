export class Ingredient {

    constructor(public name: string, public amountType: string, public amount: number) {
        this.name = name;
        this.amount = amount;
        this.amountType = amountType;
    }
}
