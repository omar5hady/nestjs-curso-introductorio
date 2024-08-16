import { IsString, IsBoolean, MinLength, MaxLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    title: string

    @IsBoolean()
    status: boolean
}