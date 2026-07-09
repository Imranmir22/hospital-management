import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
   
    private readonly saltRounds = 10;

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async register(registerDto: registerDto, manager?: EntityManager) {
        const repo = manager ? manager.getRepository(User) : this.usersRepository;
        const hashedPassword = await this.hashPassword(registerDto.password);
        const user = repo.create({ ...registerDto, password: hashedPassword });
        return await repo.save(user);
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.saltRounds);
    }

    async login(loginDto: loginDto) {
        const { email, password } = loginDto;
        const user = await this.usersRepository.findOne({where: {email}})
        if(! await this.comparePasswords(password, user.password)) {
            throw new UnauthorizedException();
        }

        const payload = { email: user.email, sub: user.id };

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    async comparePasswords(plain: string, hashed: string): Promise<boolean> {
        return bcrypt.compare(plain, hashed);
    }
}
