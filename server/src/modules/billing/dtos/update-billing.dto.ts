import { ApiPropertyOptional } from '@nestjs/swagger';
import { BillingStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateBillingDto {
  @ApiPropertyOptional({
    type: String,
    required: false,
    example: 'internet bill',
  })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  description?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    example: '100',
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

  @ApiPropertyOptional({
    type: String,
    required: false,
    example: BillingStatus.PAID,
  })
  @IsOptional()
  @IsEnum(BillingStatus)
  status?: BillingStatus;
}
