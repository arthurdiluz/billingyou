import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { genSaltSync, hashSync } from 'bcrypt';
import { FindUsersDto } from '../dtos/find-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create({ password, ...body }: CreateUserDto) {
    return await this.userRepository.create({
      data: {
        password: this.hashPassword(password),
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

  find(query: FindUsersDto) {
    return this.userRepository.findMany({
      where: {
        ...query,
      },
    });
  }

  updateById(id: string, { password, ...body }: UpdateUserDto) {
    return this.userRepository.update({
      where: { id },
      data: {
        password: password ? this.hashPassword(password) : password,
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

  softDeleteById(id: string) {
    return this.userRepository.update({
      where: { id },
      data: { deletedAt: new Date() },
      select: { deletedAt: true },
    });
  }

  hashPassword(password: string): string {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }
}
