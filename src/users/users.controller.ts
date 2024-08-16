import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get('/')
    @ApiTags('users')
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post('/')
    @ApiTags('users')
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
    
}
