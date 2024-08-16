import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from "@nestjs/common";
import { TasksService } from './tasks.service';
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserResponse } from "src/users/entities/user.entity";

@Controller('/tasks')
@ApiTags('tasks')
export class TaskController {
    constructor( private taskService: TasksService){}

    @Get()
    @ApiOperation({ summary: "Get all tasks"})
    @ApiResponse({status: 200, description: "Retorna todas las tasks" , type: UserResponse, isArray: true})
    getAllTask( @Query() query: any){
        console.log(query);
       return this.taskService.getTasks();
    }

    @Get('/:id')
    getTaskById( @Param('id') id: string){
       return this.taskService.getTask(Number(id));
    }

    @Post()
    createTask( @Body() task: CreateTaskDto ){
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask( @Body() task: UpdateTaskDto){
        return this.taskService.updateTask(task);
    }

    @Delete()
    deleteTask(){
        return this.taskService.deleteTask();
    }

    @Patch()
    updateTaskPatch(){
        return this.taskService.updatePartialTask()
    }


}