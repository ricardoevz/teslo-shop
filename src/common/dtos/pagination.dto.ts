import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: 'How many row do you need?',
    default: 10,
  })
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Type(() => Number) // enableImplicitConvertions: true
  limit?: number;

  @ApiProperty({
    description: 'How many row do want skip?',
    default: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number) // enableImplicitConvertions: true
  offset?: number;
}
