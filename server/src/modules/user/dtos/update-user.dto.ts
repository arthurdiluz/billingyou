import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'James',
  })
  @IsOptional()
  @Length(2, 255)
  firstName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'Johnson',
  })
  @IsOptional()
  @Length(2, 255)
  lastName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'james.johnson@example.com',
  })
  @IsOptional()
  @Length(1, 255)
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: '654321',
  })
  @IsOptional()
  @Length(6, 255)
  password?: string;
}
