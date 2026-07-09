import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: loginDto): Promise<{
        access_token: string;
    }>;
    registers(registerDto: registerDto): Promise<import("../users/entities/user.entity").User>;
}
