import { Module } from '@nestjs/common';
import {PrismaModule} from "./database/prisma.module";
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
})
export class AppModule{}
