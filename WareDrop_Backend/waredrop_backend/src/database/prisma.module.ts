import { Module } from '@nestjs/common';
import {PrismaService} from "./prisma.service";
import {UsersService} from "./users.service";
import {PrismaController} from "./prisma.controller";

@Module({
    imports: [],
    controllers: [PrismaController],
    providers: [PrismaService, UsersService],
})
export class PrismaModule {}