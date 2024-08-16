import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { query, Request, Response } from "express";
import { ValidateuserPipe } from './validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url);
        response.status(200).json({
            message: 'Hello World',
        })
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 Not Found Page';
    }

    @Get('new')
    @HttpCode(201)
    newPage() {
        return 'Something new';
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return '500 Internal Server Error Page';
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number){
        return num + 14;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status:boolean){
        console.log(typeof(status));
        return status
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
        // console.log(typeof(query.name));
        // console.log(typeof(query.age));
        return `Hello ${query.name}, your ages is ${query.age}`
    }
}
