import {IsNotEmpty, IsString} from "class-validator";

export class LocationUpdateDto {

    @IsString()
    @IsNotEmpty()
    readonly city: string

    @IsString()
    @IsNotEmpty()
    readonly state: string

    @IsString()
    @IsNotEmpty()
    readonly country: string

    constructor(location) {
        Object.assign(this, location)
    }
}