import { Transform } from "class-transformer";

function _getNumericAmount(amount): number {
    return (amount.toJSON)
        ? Number(amount.toJSON().$numberDecimal)
        : Number(amount)
}

export class CompensationReadDto {
    isVariable: boolean
    currency: string
    recurrency: string

    @Transform(amount => _getNumericAmount(amount))
    amount: number

    constructor(partial: Partial<CompensationReadDto>) {
        Object.assign(this, partial);
    }

}