import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { FindUsersDto } from '../dtos/find-user.dto';
import { Utils } from 'src/common/helpers/utils';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create({ password, ...body }: CreateUserDto) {
    return this.userRepository.create({
      data: {
        password: Utils.hashPassword(password),
        ...body,
      },
      select: {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
  }

  find(query: FindUsersDto) {
    return this.userRepository.findMany({
      where: {
        deletedAt: null,
        ...query,
      },
      select: {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
  }

  findById(id: string) {
    return this.userRepository.findUnique({
      where: { id },
      select: {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
  }

  update(id: string, { password, ...body }: UpdateUserDto) {
    return this.userRepository.update({
      where: { id },
      data: {
        password: password ? Utils.hashPassword(password) : password,
        updatedAt: new Date(),
        ...body,
      },
      select: {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });
  }

  softDelete(id: string) {
    return this.userRepository.softDelete({ where: { id } });
  }
}
