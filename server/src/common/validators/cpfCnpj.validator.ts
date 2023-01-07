import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { cnpj, cpf } from 'cpf-cnpj-validator';

export function IsCpfOrCnpjValid(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsCpfOrCnpjValid',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return (
            typeof value === 'string' &&
            (cpf.isValid(value) || cnpj.isValid(value))
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `Property '${args?.property}' is neither a CPF nor a CNPJ`;
        },
      },
    });
  };
}
