/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';

@Controller('auth') //localhost:3000/auth
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/register') // localhost:3000/auth/register
    @HttpCode(201) // show code 201, when register complete
    async register(@Body() registerDto: RegisterDTO) {
        await this.authService.register(registerDto);
        return {
            message: 'Register Complete',
        };
    }

    @Post('/login') // localhost:3000/auth/login
    async login(@Body() loginDto: LoginDTO) {
        return await this.authService.login(loginDto);
    }
}
