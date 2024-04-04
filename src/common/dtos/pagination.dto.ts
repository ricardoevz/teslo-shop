import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Type(() => Number) // enableImplicitConvertions: true
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number) // enableImplicitConvertions: true
  offset?: number;
}
