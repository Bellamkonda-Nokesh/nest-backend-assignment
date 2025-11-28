// Users service
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDto): Promise<Omit<User, 'password'>> {
    if (await this.usersRepository.findOne({ where: { username: data.username } })) {
      throw new BadRequestException('Username already exists');
    }
    const password = await bcrypt.hash(data.password, 10);
    const { password: _, ...user } = await this.usersRepository.save({ ...data, password });
    return user;
  }

  findAll(): Promise<Omit<User, 'password'>[]> {
    return this.usersRepository.find({ select: ['id', 'username', 'role'] });
  }

  async findOne(id: number): Promise<Omit<User, 'password'>> {
    const user = await this.usersRepository.findOne({ where: { id }, select: ['id', 'username', 'role'] });
    if (!user) throw new NotFoundException();
    return user;
  }

  async update(id: number, data: UpdateUserDto): Promise<Omit<User, 'password'>> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    await this.usersRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const { affected } = await this.usersRepository.delete(id);
    if (!affected) throw new NotFoundException();
  }

  findByUsername(username: string) {
    return this.usersRepository.findOne({ where: { username } });
  }
}