import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async get_all() {
    return new Promise(async (resolve, reject) => {
      try {
        const user_list = await this.prisma.user.findMany();
        resolve(user_list);
      } catch (error) {
        reject(error);
      }
    });
  }

  async get_one(id: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const get_one = await this.prisma.user.findUnique({
          where: {
            id: id,
          },
        });
        resolve(get_one);
      } catch (error) {
        reject(error);
      }
    });
  }

  async create(payload: CreateUserDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const user_created = await this.prisma.user.create({
          data: payload,
        });
        resolve(user_created);
      } catch (error) {
        reject(error);
      }
    });
  }
  async update(id: string, payload: UpdateUserDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const update_user = await this.prisma.user.update({
          where: {
            id: id,
          },
          data: payload,
        });
        resolve(update_user);
      } catch (error) {
        reject(error);
      }
    });
  }
  async delete(id: string, payload?: UpdateUserDto) {
    return new Promise(async (resolve, reject) => {
      try {
        const user_created = await this.prisma.user.update({
          where: {
            id: id,
          },
          data: {
            is_active: false,
          },
        });
        resolve(user_created);
      } catch (error) {
        reject(error);
      }
    });
  }
}
