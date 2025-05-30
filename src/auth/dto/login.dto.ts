/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDTO {
    @IsNotEmpty({ message : 'email required!!!'})
    @IsEmail({}, { message : 'The email format is incorrect.'})
    email: string;

    @IsNotEmpty({ message : 'password required!!!'})
    password: string;
}