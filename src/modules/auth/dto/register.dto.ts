import { Injectable } from '@nestjs/common';
import { IsNotEmpty, Min, MinLength,MaxLength, IsEmail } from 'class-validator';
import { ConfirmPassword } from 'src/modules/users/validators/confirm-password.validator';
import { IsEmailUnique } from 'src/modules/users/validators/is-email-unique.validator';

export class registerDto {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    first_name: string;
    
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    last_name: string;
    
    @IsNotEmpty()
    @MaxLength(100)
    @IsEmail()
    @IsEmailUnique()
    email: string;
    
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    @ConfirmPassword()
    password: string;

    @IsNotEmpty()
    password_confirmation: string;
}