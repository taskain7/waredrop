import { Module } from '@nestjs/common';
import {UsersService} from "./users.service";
import { UsersController } from './users.controller';
import {PrismaService} from "../database/prisma.service";
import {PrismaModule} from "../database/prisma.module";

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [PrismaModule],
})
export class UsersModule {}
