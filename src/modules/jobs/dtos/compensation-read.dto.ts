import { Transform } from "class-transformer";

function _getNumericAmount(amount): number {
    return Number.isFinite(amount)
        ? amount
        : Number(amount.toJSON().$numberDecimal)
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