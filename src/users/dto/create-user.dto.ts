import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'email@email.com', description: 'User email'})
    @IsString({message: 'Should be a string'})
    @IsEmail({}, {message: 'Should be an email'})
    readonly email: string

    @ApiProperty({example: '12345', description: 'User password'})
    @IsString({message: 'Should be a string'})
    @Length(4, 17, {message: 'Not less then 4, but not greater then 17'})
    readonly password: string
}