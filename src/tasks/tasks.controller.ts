import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.taskservice.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title')title: string,
    @Body('description')description: string
  ) : Task {
    return this.taskservice.createTask(title,description)
  }
}
 