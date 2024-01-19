import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { title } from 'process';
import { promises } from 'dns';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.taskservice.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskservice.getTaskById(id)
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskservice.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id')id:string,
    @Body('status')status:TaskStatus,
  ): Task{
    return this.taskservice.updateTaskStatus(id,status)
  }
  

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void{
    this.taskservice.deleteTask(id);
  }
}
