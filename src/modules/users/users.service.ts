import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    let user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne({ where: { id } });

    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto, manager?: EntityManager) {
      const user = await this.usersRepository.findOne({where: {id: id}});
      if(!user) {
        throw new Error('User not found');
      }
      const repo = manager ? manager.getRepository(User) : this.usersRepository;
      repo.update(id, updateUserDto);

      return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
