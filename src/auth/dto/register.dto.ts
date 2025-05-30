/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from "class-validator";


export class RegisterDTO {
    @IsNotEmpty({ message : 'username required!!!'})
    username: string;

    @IsNotEmpty({ message : 'email required!!!'})
    @IsEmail({}, { message : 'The email format is incorrect.'})
    email: string;

    @IsNotEmpty({ message : 'password required!!!'})
    password: string;
}