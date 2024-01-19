import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
// import { TasksController } from './no-spec/tasks/tasks.controller';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [TasksModule],
  // controllers: [TasksController],
})
export class AppModule {}
