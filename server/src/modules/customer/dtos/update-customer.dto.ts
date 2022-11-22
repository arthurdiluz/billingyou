import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';
import { IsCpfOrCnpjValid } from 'src/common/validators/cpfCnpj.validator';

export class UpdateCustomerDto {
  @ApiPropertyOptional({
    type: String,
    required: false,
    example: 'John',
  })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  name?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    example: cpf.generate(true),
  })
  @IsOptional()
  @IsString()
  @IsCpfOrCnpjValid()
  @MaxLength(32)
  cpfCnpj?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    example: 'john.smith@email.com',
  })
  @IsOptional()
  @IsString()
  @MaxLength(32)
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    type: String,
    required: false,
    example: '5512345678900',
  })
  @IsOptional()
  @IsNumberString()
  @MaxLength(32)
  phone?: string;
}
