import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
    example: 'John',
  })
  @IsNotEmpty()
  @Length(2, 255)
  firstName: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Smith',
  })
  @IsNotEmpty()
  @Length(2, 255)
  lastName: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'john.smith@example.com',
  })
  @IsNotEmpty()
  @Length(1, 255)
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '123456',
  })
  @IsNotEmpty()
  @Length(6, 255)
  password: string;
}
