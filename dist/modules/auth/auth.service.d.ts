import { User } from '../users/entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    private readonly saltRounds;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    register(registerDto: registerDto, manager?: EntityManager): Promise<User>;
    hashPassword(password: string): Promise<string>;
    login(loginDto: loginDto): Promise<{
        access_token: string;
    }>;
    comparePasswords(plain: string, hashed: string): Promise<boolean>;
}
