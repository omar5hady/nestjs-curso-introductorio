import { ApiProperty } from "@nestjs/swagger";

export class UserResponse{
    @ApiProperty({example: 'xyz123'})
    id: string;
    @ApiProperty({example: 'John Doe'})
    name: string;
    @ApiProperty({example: 'abcd78545'})
    password: string
}