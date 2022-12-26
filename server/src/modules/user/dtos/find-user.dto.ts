import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, MaxLength } from 'class-validator';

export class FindUsersDto {
  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'John',
  })
  @IsOptional()
  @MaxLength(32)
  firstName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'Smith',
  })
  @IsOptional()
  @MaxLength(32)
  lastName?: string;

  @ApiPropertyOptional({
    type: String,
    required: true,
    example: 'john.smith@example.com',
  })
  @IsOptional()
  @MaxLength(32)
  email?: string;
}
