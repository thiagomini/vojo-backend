import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CompensationUpdateDto {

  @IsOptional()
  @Transform(amount => Number(amount))
  @IsNumber()
  amount: number

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  currency: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  recurrency: string

  @IsOptional()
  @IsBoolean()
  isVariable: boolean

  constructor(partial) {
    Object.assign(this, partial);
  }
}

export default CompensationUpdateDto;