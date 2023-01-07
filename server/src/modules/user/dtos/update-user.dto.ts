import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'James',
  })
  @IsOptional()
  @MaxLength(32)
  firstName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'Johnson',
  })
  @IsOptional()
  @MaxLength(32)
  lastName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'james.johnson@example.com',
  })
  @IsOptional()
  @MaxLength(32)
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: '654321',
  })
  @IsOptional()
  @MaxLength(64)
  password?: string;
}
