import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, IsStrongPassword, Max, MaxLength, MinLength } from "class-validator"


export class CreateUserDto {

    @IsString()
    @MinLength(10)
    @MaxLength(30)
    @IsNotEmpty()
    name: string

    // @IsNumber()
    // @IsPositive()
    // @Max(100)
    // @IsInt()
    // age: number

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      },
      {
        message: 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.',
      })
    password: string
}