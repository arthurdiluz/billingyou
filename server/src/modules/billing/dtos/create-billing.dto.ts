import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  MaxLength,
} from 'class-validator';
import { randomUUID } from 'crypto';

export class CreateBillingDto {
  @ApiProperty({
    type: String,
    required: true,
    example: randomUUID(),
  })
  @IsNotEmpty()
  @IsUUID('4')
  @Length(36, 36)
  userId: string;

  @ApiProperty({
    type: String,
    required: true,
    example: randomUUID(),
  })
  @IsNotEmpty()
  @IsUUID('4')
  @Length(36, 36)
  customerId: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'credit card bill',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  description: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '1500',
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  value: number;

  @ApiProperty({
    type: String,
    required: true,
    example: '2022-12-18',
  })
  @IsNotEmpty()
  @IsDateString()
  dueDate: string;
}
