import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsUUID,
  Length,
  MaxLength,
} from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';
import { randomUUID } from 'crypto';
import { IsCpfOrCnpjValid } from 'src/common/validators/cpfCnpj.validator';

export class CreateCustomerDto {
  @ApiProperty({
    type: String,
    required: true,
    example: randomUUID(),
  })
  @IsUUID('4')
  @Length(36, 36)
  userId: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'John Smith',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(64)
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    example: cpf.generate(true),
  })
  @IsNotEmpty()
  @IsString()
  @IsCpfOrCnpjValid()
  @MaxLength(32)
  cpfCnpj: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'john.smith@example.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(32)
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '5512345678900',
  })
  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(32)
  phone: string;
}
