import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNumberString,
  IsString,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class FindBillingDto {
  @ApiPropertyOptional({
    type: String,
    required: false,
    example: 'credit card bill',
  })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  description?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    example: '1500',
  })
  @IsOptional()
  @IsNumberString()
  @Type(() => Number)
  value?: number;

  @ApiPropertyOptional({
    type: String,
    required: false,
    example: '2022-12-18',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;
}
