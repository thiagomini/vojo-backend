import {
    IsArray,
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsObject,
    IsOptional,
    IsString,
    ValidateNested
} from "class-validator";
import { LocationUpdateDto } from "@/modules/jobs/dtos/location-update.dto";
import { Type } from "class-transformer";
import CompensationUpdateDto from '@/modules/jobs/dtos/compensation-update.dto';


export class JobUpdateDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly company: string

    @IsOptional()
    @IsArray()
    readonly description: Array<string>

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly imageUrl: string

    @IsOptional()
    @IsBoolean()
    readonly isActive: boolean

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => LocationUpdateDto )
    readonly location: LocationUpdateDto

    @IsOptional()
    @IsArray()
    readonly requirements: Array<string>

    @IsOptional()
    @IsBoolean()
    readonly active: boolean

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => CompensationUpdateDto )
    compensation: CompensationUpdateDto

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly information: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsOptional()
    @IsArray()
    readonly assignments: Array<string>

    @IsOptional()
    @IsInt()
    readonly totalSpots: bigint

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly workingHours: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly education: string

    @IsOptional()
    @IsBoolean()
    readonly open: boolean

    constructor(partial) {
        Object.assign(this, partial);
    }
}