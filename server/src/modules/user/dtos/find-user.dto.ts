import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, Length } from 'class-validator';

export class FindUsersDto {
  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'John',
  })
  @IsOptional()
  @Length(2, 255)
  firstName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'Smith',
  })
  @IsOptional()
  @Length(2, 255)
  lastName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'john.smith@example.com',
  })
  @IsOptional()
  @Length(1, 255)
  @IsEmail()
  email?: string;
}
