import { IsString, IsNumberString, IsOptional } from 'class-validator';

export class DataDto {
    @IsNumberString()
    @IsOptional()
    id?: number

    @IsString()
    @IsOptional()
    name?: string;

}
