import { Injectable,NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id:string):Task{
  return this.tasks.find(task=> task.id === id)
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  // deleteTask(id: string): void {
  //   const foundTaskIndex = this.tasks.findIndex((task) => task.id === id);
  //   if (foundTaskIndex === -1) {
  //     throw new NotFoundException(`Task with ID ${id} not found`);
  //   this.tasks.splice(foundTaskIndex, 1);
  // }
  updateTaskStatus(id:string,  status: TaskStatus ) : Task{
    const task= this.getTaskById(id)
    task.status = status
    return task
  }
  deleteTask(id:string) :void {
    this.tasks = this.tasks.filter(task=> task.id !==id)
  }
}
