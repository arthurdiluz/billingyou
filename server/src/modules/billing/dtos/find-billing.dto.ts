import { ApiPropertyOptional } from '@nestjs/swagger';
import { BillingStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNumberString,
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
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

  @ApiPropertyOptional({
    type: BillingStatus,
    required: false,
    example: BillingStatus.PENDING,
  })
  @IsOptional()
  @IsEnum(BillingStatus)
  status?: BillingStatus;
}
