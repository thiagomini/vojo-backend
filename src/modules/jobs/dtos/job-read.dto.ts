import { Exclude, Transform, Type } from 'class-transformer';
import {CompensationReadDto} from "@/modules/jobs/dtos/compensation-read.dto";
import { ValidateNested } from 'class-validator';

export class JobReadDto {
    readonly company: string
    readonly imageUrl: string
    readonly location: object
    readonly active: boolean
    readonly information: string
    readonly title: string
    readonly assignments: Array<string>
    readonly description: Array<string>
    readonly totalSpots: bigint
    readonly workingHour: string
    readonly education: string
    readonly open: boolean

    @ValidateNested({ each: true })
    @Type(() => CompensationReadDto)
    compensation: CompensationReadDto

    @Transform(requirements => Array.isArray(requirements) ? requirements : [requirements])
    requirements: Array<string>

    @Transform(id => id.toJSON())
    _id: object

    @Exclude()
    updatedBy: object

    @Exclude()
    createdBy: object

    @Exclude()
    createdAt: object

    @Exclude()
    updatedAt: object

    constructor(partial: Partial<JobReadDto>) {
        Object.assign(this, partial)
    }

    @Exclude()
    __v: string

    @Exclude()
    isActive: boolean

    @Exclude()
    descriptions: Array<string>

}