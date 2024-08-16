 import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

 export interface Task {
    id: number;
    name: string;
    status: boolean
 }
 
 @Injectable()
 export class TasksService {

    private tasks = [];
    getTasks(): Task[]{
        return this.tasks;
    }

    getTask(id: number){
        const taskFound = this.tasks.find( task => task.id === id)

        if(!taskFound){
            return new NotFoundException(`La tarea con el id ${id} no fue encontrada`);
        }

        return taskFound;
    }

    createTask(task: CreateTaskDto){
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task;
    }

    updateTask( task: UpdateTaskDto ){
        return 'Actualizando tarea';
    }

    deleteTask(){
        return 'Eliminando tarea';
    }

    updatePartialTask(){
        return 'Actualizando tarea de manera parcial';
    }
 }