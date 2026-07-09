import {
  Controller,  
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() loginDto: loginDto) {
    return this.authService.login(loginDto);
  }
  
  @Public()
  @Post('register')
  registers(@Body() registerDto: registerDto) {
    return this.authService.register(registerDto);
  }
}
